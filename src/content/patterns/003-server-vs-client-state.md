---
id: 3
title: Server State vs Client State
category: State Management
added: 2025-10-10T00:00:00Z
difficulty: Intermediate
framework:
  - React
  - Vue
  - Svelte
metaDescription: Learn the Compound Components pattern for building flexible, reusable React, Vue, and Svelte components. Complete guide with code examples and best practices.
---

# Server State vs Client State

:::tldr
## TL;DR

Separate server data (from APIs) from client UI state (toggles, forms) using different management strategies

**Why:** Prevents state mixing, enables automatic caching/revalidation, reduces bugs, clearer architecture

**How:** Use server state libraries (React Query/TanStack Query) for API data, local state (useState/stores) for UI

**When to use:**
- Fetching data from APIs
- Multiple components need same server data
- Need caching, background updates, or optimistic updates

**Impact:** Eliminates 80% of manual cache code, reduces API calls by 60-80%, prevents stale data bugs

**Quick example:**
```jsx
// Server state (React Query)
const { data, isLoading } = useQuery('users', fetchUsers);

// Client state (useState)
const [isModalOpen, setIsModalOpen] = useState(false);
```
:::

## Problem

Most applications mix two fundamentally different types of state in the same management system:

**Server State:**
- User list from `/api/users`
- Shopping cart from `/api/cart`
- Current user profile from `/api/me`

**Client State:**
- Is the modal open?
- Which tab is selected?
- What's typed in the search box?

When you treat them the same, you end up manually:
- Caching API responses in Redux/Pinia/stores
- Writing invalidation logic ("user updated, refresh the list")
- Tracking loading states for every API call
- Handling race conditions when the same data is requested twice
- Synchronizing data across components that need it
- Dealing with stale data ("this list is 5 minutes old")

**Result:** Hundreds of lines of boilerplate, subtle bugs, and constantly fighting to keep server data fresh.

## Context

You're building an application that:
- Fetches data from REST or GraphQL APIs
- Displays the same data in multiple places (user profile in header + settings page)
- Needs to keep data reasonably fresh (not stale for hours)
- Updates data (create/edit/delete operations)
- Has loading and error states to manage

**Current approach (problematic):**
```jsx
// Everything in one state management system
const store = createStore({
  // Server state mixed with client state
  users: [],           // From API
  isModalOpen: false,  // UI state
  selectedTab: 'home', // UI state
  userLoading: false,  // API loading state
  userError: null,     // API error state
  
  // Actions that mix concerns
  async fetchUsers() {
    this.userLoading = true;
    try {
      this.users = await api.getUsers();
      this.userLoading = false;
    } catch (e) {
      this.userError = e;
      this.userLoading = false;
    }
  }
});
```

**Problems:**
- Manual cache invalidation (when to refetch?)
- Stale data (users list might be old)
- Duplicate requests (two components fetch users simultaneously)
- Complex loading states (each API needs its own flags)
- Memory leaks (forgetting to clean up cached data)

## Solution

Treat server state and client state as fundamentally different problems, using specialized tools for each.

### Core Principle

**Server State has unique characteristics:**
- Stored remotely (not in your app)
- Asynchronous (requires fetching)
- Shared ownership (other users/systems can modify it)
- Can become stale (data changes on server)
- Needs caching (avoid redundant API calls)
- Requires background updates (keep fresh)

**Client State has different characteristics:**
- Stored locally (in your app)
- Synchronous (immediate access)
- Single ownership (only your app controls it)
- Never stale (you control it)
- No caching needed (it's already local)
- No background updates needed

**Use different tools:**
- **Server state:** React Query, TanStack Query, SWR, Apollo Client
- **Client state:** useState, useReducer, Zustand, Pinia, Svelte stores

## Implementation

:::tabs name="framework"
::::tab label="React (with TanStack Query)"
### Implementation: React (with TanStack Query)

```jsx
// Install: npm install @tanstack/react-query

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// API functions
async function fetchUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

async function deleteUser(userId) {
  const res = await fetch(`/api/users/${userId}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete user');
  return res.json();
}

function UserList() {
  // Server state: Managed by React Query
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // Consider fresh for 5 minutes
    refetchOnWindowFocus: true, // Refresh when tab regains focus
  });
  
  // Client state: Managed by useState
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const queryClient = useQueryClient();
  
  // Mutation for deleting user
  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries(['users']);
    },
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  // Filter users based on client state (search query)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div>
      {/* Client state controls search */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => {
              setSelectedUserId(user.id);
              setIsModalOpen(true); // Client state
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {/* Modal controlled by client state */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <p>Delete user {selectedUserId}?</p>
          <button onClick={() => {
            deleteMutation.mutate(selectedUserId);
            setIsModalOpen(false);
          }}>
            Confirm
          </button>
        </Modal>
      )}
    </div>
  );
}

// Setup QueryClient in your app root
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Default: data fresh for 1 minute
      retry: 3,
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}
```

**What React Query provides automatically:**
- Caching (users fetched once, reused everywhere)
- Deduplication (multiple components request users → one API call)
- Background refetching (keeps data fresh)
- Stale-while-revalidate (show cached data, fetch updates in background)
- Loading and error states
- Retry logic
- Pagination and infinite scroll support
- Optimistic updates

**What you manage with useState:**
- Modal open/closed
- Selected item
- Search query
- Active tab
- Form input values
::::

::::tab label="Vue 3 (with TanStack Query + Pinia)"
### Implementation: Vue 3 (with TanStack Query + Pinia)

```vue
<script setup>
// Install: npm install @tanstack/vue-query pinia

import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import { ref, computed } from 'vue';

// API functions
async function fetchUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

async function deleteUser(userId) {
  const res = await fetch(`/api/users/${userId}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete user');
  return res.json();
}

// Server state: TanStack Query
const { data: users, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000,
  refetchOnWindowFocus: true,
});

// Client state: Vue refs
const isModalOpen = ref(false);
const selectedUserId = ref(null);
const searchQuery = ref('');

const queryClient = useQueryClient();

const deleteMutation = useMutation({
  mutationFn: deleteUser,
  onSuccess: () => {
    queryClient.invalidateQueries(['users']);
  },
});

// Computed property using both server and client state
const filteredUsers = computed(() => {
  if (!users.value) return [];
  return users.value.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function handleDelete(userId) {
  selectedUserId.value = userId;
  isModalOpen.value = true;
}

function confirmDelete() {
  deleteMutation.mutate(selectedUserId.value);
  isModalOpen.value = false;
}
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <!-- Client state controls search -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search users..."
    />
    
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.name }}
        <button @click="handleDelete(user.id)">Delete</button>
      </li>
    </ul>
    
    <!-- Modal controlled by client state -->
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <p>Delete user {{ selectedUserId }}?</p>
      <button @click="confirmDelete">Confirm</button>
    </Modal>
  </div>
</template>
```

**For more complex client state, use Pinia:**
```javascript
// stores/ui.js - Client state only
import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
  state: () => ({
    isModalOpen: false,
    selectedUserId: null,
    searchQuery: '',
    activeTab: 'users',
  }),
  actions: {
    openModal(userId) {
      this.isModalOpen = true;
      this.selectedUserId = userId;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedUserId = null;
    },
  },
});

// Server state still managed by TanStack Query
```
::::

::::tab label="Svelte (with TanStack Query + Stores)"
### Implementation: Svelte (with TanStack Query + Stores)

```svelte
<!-- Install: npm install @tanstack/svelte-query -->

<script>
  import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
  import { writable } from 'svelte/store';
  
  // API functions
  async function fetchUsers() {
    const res = await fetch('/api/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  }
  
  async function deleteUser(userId) {
    const res = await fetch(`/api/users/${userId}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete user');
    return res.json();
  }
  
  // Server state: TanStack Query
  const usersQuery = createQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,
  });
  
  // Client state: Svelte stores
  const isModalOpen = writable(false);
  const selectedUserId = writable(null);
  const searchQuery = writable('');
  
  const queryClient = useQueryClient();
  
  const deleteMutation = createMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
  
  // Reactive filtered users
  $: filteredUsers = $usersQuery.data?.filter(user =>
    user.name.toLowerCase().includes($searchQuery.toLowerCase())
  ) || [];
  
  function handleDelete(userId) {
    selectedUserId.set(userId);
    isModalOpen.set(true);
  }
  
  function confirmDelete() {
    $deleteMutation.mutate($selectedUserId);
    isModalOpen.set(false);
  }
</script>

{#if $usersQuery.isLoading}
  <div>Loading...</div>
{:else if $usersQuery.error}
  <div>Error: {$usersQuery.error.message}</div>
{:else}
  <div>
    <input
      type="text"
      placeholder="Search users..."
      bind:value={$searchQuery}
    />
    
    <ul>
      {#each filteredUsers as user (user.id)}
        <li>
          {user.name}
          <button on:click={() => handleDelete(user.id)}>Delete</button>
        </li>
      {/each}
    </ul>
    
    {#if $isModalOpen}
      <Modal on:close={() => isModalOpen.set(false)}>
        <p>Delete user {$selectedUserId}?</p>
        <button on:click={confirmDelete}>Confirm</button>
      </Modal>
    {/if}
  </div>
{/if}
```

**For larger client state, use a dedicated store:**
```javascript
// stores/ui.js - Client state only
import { writable } from 'svelte/store';

function createUIStore() {
  const { subscribe, set, update } = writable({
    isModalOpen: false,
    selectedUserId: null,
    searchQuery: '',
    activeTab: 'users',
  });
  
  return {
    subscribe,
    openModal: (userId) => update(state => ({
      ...state,
      isModalOpen: true,
      selectedUserId: userId,
    })),
    closeModal: () => update(state => ({
      ...state,
      isModalOpen: false,
      selectedUserId: null,
    })),
    setSearchQuery: (query) => update(state => ({
      ...state,
      searchQuery: query,
    })),
  };
}

export const ui = createUIStore();

// Server state still managed by TanStack Query
```
::::

::::tab label="Vanilla JavaScript"
### Implementation: Vanilla JavaScript (Manual Approach)

If you can't use TanStack Query, here's the pattern manually:

```javascript
// serverState.js - Manual server state management
class ServerStateManager {
  constructor() {
    this.cache = new Map();
    this.subscribers = new Map();
  }
  
  async fetch(key, fetcher, options = {}) {
    const cached = this.cache.get(key);
    const now = Date.now();
    
    // Return cache if fresh
    if (cached && (now - cached.timestamp) < (options.staleTime || 60000)) {
      return cached.data;
    }
    
    // Fetch new data
    try {
      const data = await fetcher();
      this.cache.set(key, {
        data,
        timestamp: now,
      });
      this.notifySubscribers(key, data);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  invalidate(key) {
    this.cache.delete(key);
    this.notifySubscribers(key, null);
  }
  
  subscribe(key, callback) {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }
    this.subscribers.get(key).add(callback);
    
    return () => {
      const subs = this.subscribers.get(key);
      if (subs) subs.delete(callback);
    };
  }
  
  notifySubscribers(key, data) {
    const subs = this.subscribers.get(key);
    if (subs) {
      subs.forEach(callback => callback(data));
    }
  }
}

export const serverState = new ServerStateManager();

// Usage in component
function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Client state (simple useState)
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    serverState.fetch('users', fetchUsers)
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
      
    // Subscribe to cache updates
    return serverState.subscribe('users', (data) => {
      if (data) setUsers(data);
    });
  }, []);
  
  // ... rest of component
}
```

**Note:** This is simplified. Production-ready server state management is complex—use a library.

::::
:::

## Consequences

### Benefits

- **Automatic caching** - No manual cache logic needed  
- **Deduplication** - Multiple components request same data → one API call  
- **Background refetching** - Data stays fresh automatically  
- **Optimistic updates** - UI updates immediately, syncs in background  
- **Less boilerplate** - 80% less state management code  
- **Better performance** - Fewer unnecessary API calls  
- **Clearer architecture** - Obvious where each piece of state belongs  
- **Built-in loading/error states** - No manual tracking needed  
- **Offline support** - Cached data works without network

### Tradeoffs

- **New dependency** - Adds React Query/TanStack Query to bundle (~13KB gzipped)  
- **Learning curve** - Team needs to learn new patterns and APIs  
- **Debugging** - React Query DevTools needed to inspect cache  
- **Over-fetching risk** - Background refetch can waste bandwidth if configured poorly  
- **Migration effort** - Existing Redux/Pinia code needs refactoring  
- **Not for all state** - Client state still needs useState/stores  
- **Cache invalidation complexity** - Must understand when/how to invalidate

## When to Use

- **Your app fetches data from APIs** (REST, GraphQL, etc.)  
- **Same data displayed in multiple components** (user info in header + profile page)  
- **Data can become stale** (needs periodic refreshing)  
- **Users create/update/delete data** (CRUD operations)  
- **Multiple users can modify same data** (collaborative apps)  
- **Performance matters** (want to minimize API calls)  
- **Building dashboard or data-heavy app** (lots of server data)

## When NOT to Use

- **Purely static site** (no API calls)  
- **All state is client-side** (calculator, games, drawing apps)  
- **Simple CRUD app with 1-2 API calls** (useState is fine)  
- **Real-time data via WebSockets** (different pattern needed)  
- **Team refuses to learn new tools** (migration friction too high)  
- **Bundle size is critical** (13KB might be too much for tiny apps)

## Decision Matrix

**Use server state library if:**
- App makes 5+ different API requests
- Same data needed in 3+ places
- Data updates frequently
- Multiple users edit same data
- Need optimistic updates
- Caching would improve UX

**Score:** If 3+ checkboxes, use TanStack Query or similar.

**Stick with useState/Redux if:**
- < 5 API requests total
- Data fetched once, never updates
- No shared data between components
- Team is unfamiliar with React Query
- Bundle size is top priority

## Common Mistakes

### Putting Client State in React Query

**Wrong:**
```jsx
// DON'T: Modal state is client state, not server state
const { data: isModalOpen } = useQuery(['modalOpen'], () => false);
```

**Right:**
```jsx
// DO: Use useState for client state
const [isModalOpen, setIsModalOpen] = useState(false);
```

**Why:** React Query is for server data. Client state should use useState/stores.

### Manual Caching with Server State Library

**Wrong:**
```jsx
// DON'T: React Query already handles caching
const [cachedUsers, setCachedUsers] = useState([]);
const { data: users } = useQuery(['users'], fetchUsers);

useEffect(() => {
  if (users) setCachedUsers(users);
}, [users]);
```

**Right:**
```jsx
// DO: Trust React Query's cache
const { data: users } = useQuery(['users'], fetchUsers);
// users is automatically cached and reused
```

### Not Invalidating After Mutations

**Wrong:**
```jsx
// DON'T: Users list won't refresh after delete
const deleteMutation = useMutation({
  mutationFn: deleteUser,
  // Missing: cache invalidation
});
```

**Right:**
```jsx
// DO: Invalidate queries after mutation
const deleteMutation = useMutation({
  mutationFn: deleteUser,
  onSuccess: () => {
    queryClient.invalidateQueries(['users']);
  },
});
```

### Over-Aggressive Refetching

**Wrong:**
```jsx
// DON'T: Refetch every second (wasteful)
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  refetchInterval: 1000, // Every second!
});
```

**Right:**
```jsx
// DO: Reasonable stale time and refetch strategy
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000, // 5 minutes
  refetchOnWindowFocus: true, // Only when tab regains focus
});
```

## Real-World Example

### Before: Everything in Redux

```javascript
// Redux store mixing server and client state
const initialState = {
  // Server state (from API)
  users: [],
  usersLoading: false,
  usersError: null,
  posts: [],
  postsLoading: false,
  postsError: null,
  
  // Client state (UI)
  isModalOpen: false,
  selectedUserId: null,
  searchQuery: '',
  activeTab: 'users',
};

// Actions
const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'USERS_LOADING' });
  try {
    const users = await api.getUsers();
    dispatch({ type: 'USERS_SUCCESS', payload: users });
  } catch (error) {
    dispatch({ type: 'USERS_ERROR', payload: error });
  }
};

// Component
function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const isLoading = useSelector(state => state.usersLoading);
  const searchQuery = useSelector(state => state.searchQuery);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  // Manually filter using client state
  const filtered = users.filter(u => 
    u.name.includes(searchQuery)
  );
  
  return <ul>{/* ... */}</ul>;
}
```

**Problems:** 100+ lines of boilerplate, manual cache invalidation, no deduplication, stale data.

### After: Separated State

```javascript
// Server state: React Query
function UserList() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  
  // Client state: useState
  const [searchQuery, setSearchQuery] = useState('');
  
  const filtered = users?.filter(u => 
    u.name.includes(searchQuery)
  ) || [];
  
  return <ul>{/* ... */}</ul>;
}
```

**Result:** 20 lines instead of 100+, automatic caching, background refetching, no stale data.

## Related Patterns

**Complements:**
- Pattern [X]: Optimistic Updates (advanced React Query technique)
- Pattern [Y]: API Error Handling (consistent error UX)
- Pattern [Z]: Loading States (skeleton screens, spinners)

**Alternatives:**
- Apollo Client (for GraphQL specifically)
- SWR (similar to React Query, slightly different API)
- Redux Toolkit Query (if already using Redux)

**Prerequisites:**
- Understanding of async JavaScript (Promises, async/await)
- Familiarity with REST or GraphQL APIs
- Basic knowledge of React hooks or Vue Composition API

**Learn Next:**
- Pattern [N]: Infinite Scroll / Pagination with React Query
- Pattern [M]: Optimistic Updates for Better UX
- Pattern [P]: Real-Time Data with WebSockets + React Query

## Further Reading

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Query vs Redux](https://tkdodo.eu/blog/react-query-and-forms)
- [SWR Documentation](https://swr.vercel.app/)
- [When to Use React Query](https://ui.dev/c/react-query/when-to-use-react-query)
- [Server State vs Client State](https://kentcdodds.com/blog/application-state-management-with-react)
