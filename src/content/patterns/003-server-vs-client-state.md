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

Recognize that server data (from APIs) and client UI state (toggles, forms) have fundamentally different characteristics and manage them separately

**Why:** Prevents state mixing, eliminates manual cache logic, reduces bugs, clearer architecture

**How:** Different storage strategies—server state needs caching/invalidation, client state doesn't

**When to use:**
- App fetches data from APIs
- Same server data needed in multiple places
- Data can become stale and needs refreshing

**Impact:** Eliminates 80% of cache boilerplate, prevents stale data bugs, clearer mental model

**Quick example:**
```jsx
// Server state: Needs caching, can be stale
const users = await fetchWithCache('users', fetchUsers);

// Client state: Immediate, never stale
const [isModalOpen, setIsModalOpen] = useState(false);
```
:::

## Problem

Applications manage two fundamentally different types of state as if they were the same:

**Server State (Remote Data):**
- Lives on a server you don't control
- Fetched asynchronously via APIs
- Shared with other users/systems
- Can become stale (changes without your knowledge)
- You have a local copy that might be outdated

**Client State (UI State):**
- Lives entirely in your application
- Synchronous and immediate
- Controlled only by your code
- Never stale (you control all changes)
- Single source of truth

**When you treat them the same, you get:**
- Manual cache management ("how long is this data fresh?")
- Stale data bugs ("this list is 5 minutes old but looks current")
- Race conditions ("two components requested the same data")
- Over-fetching ("every component fetch independently")
- Complex loading states ("which API call is in-flight?")
- Memory leaks ("forgot to cleanup cached data")

## Context

You're building an application that:
- Fetches data from REST/GraphQL APIs
- Shows the same data in multiple places (user profile in header + settings page)
- Updates data (CRUD operations)
- Needs data to stay reasonably fresh

**Current approach (problematic):**
```jsx
const store = {
  // Everything mixed together
  users: [],              // From API (server state)
  posts: [],              // From API (server state)
  isModalOpen: false,     // UI state (client state)
  selectedTab: 'home',    // UI state (client state)
  usersLoading: false,    // API metadata
  usersError: null,       // API metadata
  usersFetchedAt: null,   // Cache timestamp
  
  // Manual cache invalidation logic
  shouldRefetchUsers() {
    const fiveMinutes = 5 * 60 * 1000;
    return Date.now() - this.usersFetchedAt > fiveMinutes;
  }
};
```

**Problems with this approach:**
- Server and client state lumped together
- Manual cache timestamp tracking
- Custom staleness logic per resource
- No deduplication (two components fetch → two API calls)
- Cleanup complexity (when to remove cached data?)

## Solution

**Recognize that server state and client state have different characteristics and require different management strategies.**

### Core Principle: State Characteristics Matter

#### Server State Characteristics

| Characteristic | Implication | Management Need |
|---------------|-------------|-----------------|
| **Asynchronous** | Requires fetching | Loading states, error handling |
| **Remote storage** | You don't control it | Can't guarantee availability |
| **Shared ownership** | Others can modify | Needs refresh/invalidation |
| **Can be stale** | Changes without notice | Staleness tracking |
| **Expensive to fetch** | Network latency | Caching required |
| **Potentially shared** | Multiple components need it | Deduplication needed |

#### Client State Characteristics

| Characteristic | Implication | Management Need |
|---------------|-------------|-----------------|
| **Synchronous** | Immediate access | No loading states |
| **Local storage** | You control it | Guaranteed availability |
| **Single ownership** | Only you modify | No refresh needed |
| **Never stale** | Always current | No staleness tracking |
| **Free to access** | In memory | No caching needed |
| **Component-scoped** | Usually local | Simple state management |

**The insight:** These are different problems requiring different solutions.

## Implementation: The Pattern

### Step 1: Identify Which State is Which

**Server State (needs special handling):**
- Fetched from API
- Can be modified by backend/other users
- Needs to be shared across components
- Can become stale

**Examples:** User list, shopping cart, product catalog, blog posts, settings from server

**Client State (simple local state):**
- Controlled entirely by frontend
- Never fetched from server
- Component-local or simple shared state
- Never becomes stale

**Examples:** Modal open/closed, selected tab, form input values, UI toggles, local filters

### Step 2: Different Management Strategies

#### For Server State: Implement Caching Layer

```javascript
// Conceptual pattern (framework-agnostic)
class ServerStateManager {
  constructor() {
    this.cache = new Map();
  }
  
  async fetch(key, fetcher, options = {}) {
    const cached = this.cache.get(key);
    
    // Check if cached data is still fresh
    if (cached && this.isFresh(cached, options.staleTime)) {
      return cached.data;
    }
    
    // Fetch new data
    const data = await fetcher();
    
    // Cache with timestamp
    this.cache.set(key, {
      data,
      fetchedAt: Date.now(),
    });
    
    return data;
  }
  
  isFresh(cached, staleTime = 60000) {
    return Date.now() - cached.fetchedAt < staleTime;
  }
  
  invalidate(key) {
    this.cache.delete(key);
  }
}
```

**Key features needed:**
1. **Caching:** Store fetched data with timestamp
2. **Staleness:** Track age, decide when to refetch
3. **Invalidation:** Remove cached data when it changes
4. **Deduplication:** Multiple requests for same data → one API call

#### For Client State: Simple Local State

```javascript
// No special handling needed
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedTab, setSelectedTab] = useState('home');
const [searchQuery, setSearchQuery] = useState('');
```

**No caching, no staleness, no invalidation. Just simple, immediate state.**

## Implementation

:::tabs name="framework"
::::tab label="React"
### Implementation: React

```jsx
// ============================================
// Option 1: Manual Server State Management
// ============================================

// Custom hook for server state
function useServerState(key, fetcher, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cacheRef = useRef(new Map());
  
  useEffect(() => {
    const cache = cacheRef.current;
    const cached = cache.get(key);
    
    // Use cache if fresh
    if (cached && Date.now() - cached.timestamp < (options.staleTime || 60000)) {
      setData(cached.data);
      setIsLoading(false);
      return;
    }
    
    // Fetch new data
    setIsLoading(true);
    fetcher()
      .then(result => {
        cache.set(key, { data: result, timestamp: Date.now() });
        setData(result);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, [key]);
  
  const invalidate = useCallback(() => {
    cacheRef.current.delete(key);
  }, [key]);
  
  return { data, isLoading, error, invalidate };
}

// ============================================
// Usage: Separation of Concerns
// ============================================

function UserList() {
  // Server state: Custom caching hook
  const { data: users, isLoading, invalidate } = useServerState(
    'users',
    () => fetch('/api/users').then(r => r.json()),
    { staleTime: 5 * 60 * 1000 }
  );
  
  // Client state: Simple useState
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleDelete = async (userId) => {
    await fetch(`/api/users/${userId}`, { method: 'DELETE' });
    invalidate(); // Refresh server state after mutation
  };
  
  // Filter using client state
  const filtered = users?.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {/* Client state controls search */}
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      
      <ul>
        {filtered.map(user => (
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
      
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <button onClick={() => handleDelete(selectedUserId)}>
            Confirm Delete
          </button>
        </Modal>
      )}
    </div>
  );
}
```

**What's different:**
- `useServerState` handles caching, staleness, invalidation
- `useState` handles simple UI state
- Clear separation of concerns


::::
::::tab label="Vue 3"
### Implementation: Vue 3

```vue
<script setup>
import { ref, computed, onMounted } from 'vue';

// ============================================
// Server State: Composable with Caching
// ============================================

function useServerState(key, fetcher, options = {}) {
  const data = ref(null);
  const isLoading = ref(true);
  const error = ref(null);
  
  // Simple in-memory cache
  const cache = new Map();
  
  const fetch = async () => {
    const cached = cache.get(key);
    
    // Return cache if fresh
    if (cached && Date.now() - cached.timestamp < (options.staleTime || 60000)) {
      data.value = cached.data;
      isLoading.value = false;
      return;
    }
    
    // Fetch fresh data
    isLoading.value = true;
    try {
      const result = await fetcher();
      cache.set(key, { data: result, timestamp: Date.now() });
      data.value = result;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };
  
  const invalidate = () => {
    cache.delete(key);
    fetch();
  };
  
  onMounted(fetch);
  
  return { data, isLoading, error, invalidate };
}

// ============================================
// Usage: Clear Separation
// ============================================

// Server state: Cached, can be stale
const { data: users, isLoading, invalidate } = useServerState(
  'users',
  () => fetch('/api/users').then(r => r.json()),
  { staleTime: 5 * 60 * 1000 }
);

// Client state: Simple refs
const isModalOpen = ref(false);
const selectedUserId = ref(null);
const searchQuery = ref('');

// Computed using both server and client state
const filteredUsers = computed(() => {
  if (!users.value) return [];
  return users.value.filter(u =>
    u.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

async function handleDelete(userId) {
  await fetch(`/api/users/${userId}`, { method: 'DELETE' });
  invalidate(); // Refresh server state
}
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <!-- Client state controls search -->
    <input v-model="searchQuery" placeholder="Search..." />
    
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.name }}
        <button @click="() => {
          selectedUserId = user.id;
          isModalOpen = true;
        }">
          Delete
        </button>
      </li>
    </ul>
    
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <button @click="handleDelete(selectedUserId)">
        Confirm Delete
      </button>
    </Modal>
  </div>
</template>
```

::::
::::tab label="Svelte"
### Implementation: Svelte

```svelte
<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  
  // ============================================
  // Server State: Store with Caching Logic
  // ============================================
  
  function createServerState(key, fetcher, options = {}) {
    const data = writable(null);
    const isLoading = writable(true);
    const error = writable(null);
    
    const cache = new Map();
    
    const fetch = async () => {
      const cached = cache.get(key);
      
      if (cached && Date.now() - cached.timestamp < (options.staleTime || 60000)) {
        data.set(cached.data);
        isLoading.set(false);
        return;
      }
      
      isLoading.set(true);
      try {
        const result = await fetcher();
        cache.set(key, { data: result, timestamp: Date.now() });
        data.set(result);
      } catch (err) {
        error.set(err);
      } finally {
        isLoading.set(false);
      }
    };
    
    const invalidate = () => {
      cache.delete(key);
      fetch();
    };
    
    onMount(fetch);
    
    return { data, isLoading, error, invalidate };
  }
  
  // ============================================
  // Usage
  // ============================================
  
  // Server state: Cached, managed
  const usersState = createServerState(
    'users',
    () => fetch('/api/users').then(r => r.json()),
    { staleTime: 5 * 60 * 1000 }
  );
  
  // Client state: Simple writable stores
  const isModalOpen = writable(false);
  const selectedUserId = writable(null);
  const searchQuery = writable('');
  
  // Reactive filtering
  $: filteredUsers = $usersState.data?.filter(u =>
    u.name.toLowerCase().includes($searchQuery.toLowerCase())
  ) || [];
  
  async function handleDelete(userId) {
    await fetch(`/api/users/${userId}`, { method: 'DELETE' });
    usersState.invalidate();
  }
</script>

{#if $usersState.isLoading}
  <div>Loading...</div>
{:else}
  <input bind:value={$searchQuery} placeholder="Search..." />
  
  <ul>
    {#each filteredUsers as user (user.id)}
      <li>
        {user.name}
        <button on:click={() => {
          $selectedUserId = user.id;
          $isModalOpen = true;
        }}>
          Delete
        </button>
      </li>
    {/each}
  </ul>
  
  {#if $isModalOpen}
    <Modal on:close={() => isModalOpen.set(false)}>
      <button on:click={() => handleDelete($selectedUserId)}>
        Confirm Delete
      </button>
    </Modal>
  {/if}
{/if}
```

::::
:::

## Advanced: Using Libraries (Optional)

**Once you understand the principle, libraries implement it for you:**

### React Query / TanStack Query
Implements the server state pattern with:
- Automatic caching
- Background refetching
- Deduplication
- Optimistic updates
- SSR support

```jsx
import { useQuery } from '@tanstack/react-query';

// Library handles all caching logic
const { data: users } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});

// You still use useState for client state
const [isModalOpen, setIsModalOpen] = useState(false);
```

### SWR (Stale-While-Revalidate)
Similar approach, different API:

```jsx
import useSWR from 'swr';

const { data: users } = useSWR('/api/users', fetcher);
const [isModalOpen, setIsModalOpen] = useState(false);
```

### Apollo Client (GraphQL)
Server state management for GraphQL:

```jsx
import { useQuery } from '@apollo/client';

const { data } = useQuery(GET_USERS);
const [isModalOpen, setIsModalOpen] = useState(false);
```

**Key point:** These libraries implement the pattern we described. They're not magic—they're applying the server/client state separation principle with battle-tested code.

## Consequences

### Benefits

- **Clear mental model** - Know immediately which state needs what treatment  
- **Less boilerplate** - No manual cache timestamps, staleness checks  
- **Fewer bugs** - Stale data bugs eliminated by proper cache management  
- **Better performance** - Deduplication prevents redundant API calls  
- **Simpler components** - Components don't manage cache logic  
- **Easier testing** - Server state mocking is centralized  
- **Scalable architecture** - Pattern works for 5 or 500 API endpoints

### Tradeoffs

- **Initial complexity** - Need to build or adopt server state management  
- **Learning curve** - Team must understand the distinction  
- **Migration effort** - Existing mixed state needs refactoring  
- **Library decision** - Build custom or adopt TanStack Query/SWR/Apollo?  
- **Cache invalidation complexity** - Must think about when data is stale  
- **Testing changes** - Different mocking strategies for server vs client state

## When to Use

- **App fetches data from APIs** (REST, GraphQL, etc.)  
- **Same server data used in multiple components**  
- **Data can become stale** (changes on server)  
- **Performance matters** (want to minimize API calls)  
- **Building data-heavy application** (dashboards, admin panels)  
- **Multiple users can modify same data** (collaborative apps)

## When NOT to Use

- **Purely static site** (no API calls, everything is client state)  
- **Single API call on mount** (simple useEffect is fine)  
- **All data is real-time via WebSockets** (different pattern needed)  
- **Tiny app with 1-2 components** (useState everywhere is fine)  
- **Team strongly resists** (cultural fit matters)

## Common Mistakes

### Treating All State the Same

**Wrong:**
```jsx
// Modal state managed like server state (unnecessary)
const { data: isModalOpen } = useServerState('modalOpen', () => false);
```

**Right:**
```jsx
// Modal is client state - use simple useState
const [isModalOpen, setIsModalOpen] = useState(false);
```

### Not Invalidating After Mutations

**Wrong:**
```jsx
async function deleteUser(id) {
  await fetch(`/api/users/${id}`, { method: 'DELETE' });
  // User list still shows deleted user (stale!)
}
```

**Right:**
```jsx
async function deleteUser(id) {
  await fetch(`/api/users/${id}`, { method: 'DELETE' });
  invalidateUsers(); // Refresh server state
}
```

### Over-Caching Client State

**Wrong:**
```jsx
// Caching search query (why? it's client-only)
const { data: searchQuery } = useServerState('search', () => '');
```

**Right:**
```jsx
// Simple local state for UI
const [searchQuery, setSearchQuery] = useState('');
```

## Decision Framework

### Is This Server State or Client State?

```
Does the data come from an API? ───────────────────┐
                                                   │
                │                                  │
               YES                                NO
                │                                  │
                ▼                                  ▼
        Is it shared across                  CLIENT STATE
        multiple components? ─────────┐       (use useState/
                │                     │        stores)
               YES                   NO
                │                     │
                ▼                     ▼
        SERVER STATE            Maybe client state
        (needs caching)         (could be either)
```

**Additional questions:**
- Can other users/systems modify it? → Server state
- Does it need to stay fresh? → Server state
- Is it just UI toggle/form input? → Client state
- Is fetching expensive (>100ms)? → Server state
- Is it derived from server data? → Computed client state

## Real-World Example

### Before: Everything Mixed

```javascript
const store = {
  // All lumped together
  users: [],
  posts: [],
  isModalOpen: false,
  selectedTab: 'home',
  usersLoading: false,
  
  async fetchUsers() {
    this.usersLoading = true;
    this.users = await api.getUsers();
    this.usersLoading = false;
    // Manual cache management, no staleness tracking
  }
};
```

**Lines of code:** 150+ (with all actions)  
**Cache logic:** Manual, per-resource  
**Stale data bugs:** Common  
**API deduplication:** None

### After: Separated by Characteristics

```javascript
// Server state: Centralized with pattern
const serverState = useServerStateManager();

// Client state: Simple local state
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedTab, setSelectedTab] = useState('home');

// Server state handled automatically
const users = serverState.use('users', fetchUsers);
const posts = serverState.use('posts', fetchPosts);
```

**Lines of code:** 40  
**Cache logic:** Centralized, automatic  
**Stale data bugs:** Eliminated  
**API deduplication:** Automatic

## Related Patterns

**Complements:**
- Pattern [X]: Optimistic Updates (updating UI before server confirms)
- Pattern [Y]: API Error Handling (consistent error UX)
- Pattern [Z]: Loading States (skeleton screens, progress indicators)

**Prerequisites:**
- Understanding of async JavaScript
- Familiarity with REST or GraphQL
- Basic state management (useState, stores)

**Learn Next:**
- Pattern [N]: Infinite Scroll / Pagination
- Pattern [M]: Real-Time Data with WebSockets
- Pattern [P]: Offline-First State Management

## Further Reading

- [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react) - Kent C. Dodds
- [TanStack Query Documentation](https://tanstack.com/query/latest) - Library implementing this pattern
- [SWR Documentation](https://swr.vercel.app/) - Alternative implementation
- [You Might Not Need a State Management Library](https://tkdodo.eu/blog/you-might-not-need-a-state-management-library)
