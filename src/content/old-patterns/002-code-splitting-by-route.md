---
id: 2
title: Code Splitting By Route
tags: Performance
added: 2025-10-09T00:00:00Z
difficulty: Intermediate
framework:
  - React
  - Vue
  - Svelte
metaDescription: Learn how to split JavaScript bundles by route in React, Vue, and Svelte. Reduce initial load time by 60-80% with lazy loading. Complete guide with code examples and performance metrics.
---

# Code Splitting By Route

:::tldr
## TL;DR

Split JavaScript bundles by route so users only download code for the page they're visiting.

**Why:** 60-80% smaller initial bundle, 3-5× faster load times, better Core Web Vitals.

**How:** Use dynamic imports (`import()`) with lazy loading in your router.

**When to use:**
- App has 3+ distinct routes
- Initial bundle >200KB (gzipped)
- Routes have different dependencies (charts, forms, maps)

**Impact:** Typical reduction: 487KB → 78KB bundle, 6.2s → 1.9s Time to Interactive.

**Quick example:**
```jsx
const Dashboard = lazy(() => import('./Dashboard'));

<Route path="/dashboard" element={<Dashboard />} />
```
:::

## Problem

As your application grows, the initial JavaScript bundle becomes massive. Users download hundreds of kilobytes (or megabytes) of code just to see the landing page, including code for routes they may never visit. This results in slow initial page loads, poor Core Web Vitals scores, and frustrated users who bounce before your app finishes loading.

A 500KB bundle means 5+ seconds on slow 3G connections. Users don't wait, they leave.

## Context

You're building a multi-page application with distinct routes:
- Marketing pages (landing, pricing, about)
- Dashboard or admin interface
- User-facing features (profile, settings, checkout)

Each route has unique dependencies:
- Landing page needs animations and marketing components
- Dashboard needs charts and data grids
- Settings page needs form libraries

Currently, all code for all routes ships in one bundle. Users visiting the landing page download dashboard code they'll never see. This is wasteful and slow.

Your app has reached a size where:
- Initial bundle is >200KB (gzipped)
- Lighthouse scores are dropping
- Time to Interactive (TTI) exceeds 5 seconds
- Users are complaining about slow loading

## Solution

**Split your JavaScript bundle by route so users only download code for the page they're visiting.** Other routes are loaded on-demand when navigated to.

### Core Principle

Instead of:
```
Bundle.js (500KB)
├── Landing page code (50KB)
├── Dashboard code (200KB)
├── Settings code (100KB)
├── Profile code (80KB)
└── Admin code (70KB)
```

Create:
```
main.js (50KB) - Landing page
dashboard.chunk.js (200KB) - Loaded when user visits /dashboard
settings.chunk.js (100KB) - Loaded when user visits /settings
profile.chunk.js (80KB) - Loaded when user visits /profile
admin.chunk.js (70KB) - Loaded when user visits /admin
```

**Result:** Users download 50KB initially instead of 500KB. Other routes load in the background or on-demand.

### How It Works

1. **Bundle splitting at build time** - Webpack/Vite creates separate chunks per route
2. **Dynamic imports** - Routes are imported using `import()` syntax (lazy loading)
3. **Automatic loading** - Framework router detects route change, loads required chunk
4. **Caching** - Once loaded, chunks are cached (subsequent visits are instant)

## Implementation

:::tabs name="framework"
::::tab label="React"
### Implementation: React

```jsx
// App.jsx - Route configuration with lazy loading
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Eagerly loaded (part of main bundle)
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';

// Lazy loaded (separate chunks)
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));
const Admin = lazy(() => import('./pages/Admin'));

// Loading fallback component
function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Landing page: eagerly loaded (fast initial load) */}
            <Route path="/" element={<Landing />} />
            
            {/* Other routes: lazy loaded (separate chunks) */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}
```

**What happens:**
1. User visits `/` → Downloads `main.js` (50KB) + Landing component
2. User clicks "Dashboard" → Browser downloads `dashboard.chunk.js` (200KB)
3. While loading, `<LoadingSpinner />` displays
4. Once loaded, Dashboard renders
5. Chunk is cached, future visits are instant

**Build output:**
```
main.js                    52.3 KB
dashboard.chunk.js        203.1 KB
settings.chunk.js         98.7 KB
profile.chunk.js          82.4 KB
admin.chunk.js            71.2 KB
```
::::
::::tab label="Vue 3"
### Implementation: Vue 3

```vue
<!-- App.vue - Route configuration with lazy loading -->
<script setup>
import { defineAsyncComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Landing from './pages/Landing.vue';

// Loading component shown while route loads
const LoadingSpinner = {
  template: `
    <div class="loading">
      <div class="spinner" />
      <p>Loading...</p>
    </div>
  `
};

// Error component shown if chunk fails to load
const ErrorDisplay = {
  template: `<div class="error">Failed to load page. Please refresh.</div>`
};
</script>

<template>
  <div id="app">
    <Header />
    
    <main>
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>
```

```javascript
// router.js - Vue Router configuration
import { createRouter, createWebHistory } from 'vue-router';
import Landing from './pages/Landing.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing, // Eagerly loaded
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      // Lazy loaded with loading/error states
      component: () => import('./pages/Dashboard.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('./pages/Settings.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('./pages/Profile.vue'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('./pages/Admin.vue'),
      // Optional: Add route-level metadata
      meta: { requiresAuth: true }
    },
  ],
});

// Optional: Show loading state during chunk load
router.beforeEach((to, from, next) => {
  // You can dispatch loading state to store here
  next();
});

export default router;
```

**Alternative with defineAsyncComponent (more control):**
```javascript
import { defineAsyncComponent } from 'vue';

const Dashboard = defineAsyncComponent({
  loader: () => import('./pages/Dashboard.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorDisplay,
  delay: 200, // Show loading after 200ms (avoid flash)
  timeout: 10000, // Error after 10s
});
```
::::
::::tab label="Svelte (SvelteKit)"
### Implementation: Svelte (SvelteKit)

```svelte
<!-- src/routes/+layout.svelte - Root layout -->
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { navigating } from '$app/stores';
</script>

<div class="app">
  <Header />
  
  <main>
    {#if $navigating}
      <div class="loading">
        <div class="spinner" />
        <p>Loading...</p>
      </div>
    {:else}
      <slot />
    {/if}
  </main>
  
  <Footer />
</div>
```

**SvelteKit automatically code-splits by route using file-based routing:**

```
src/routes/
├── +page.svelte                 → / (landing)
├── dashboard/
│   └── +page.svelte            → /dashboard
├── settings/
│   └── +page.svelte            → /settings
├── profile/
│   └── +page.svelte            → /profile
└── admin/
    └── +page.svelte            → /admin
```

**Each route automatically becomes a separate chunk.** No configuration needed!

**Advanced: Preloading on hover**
```svelte
<!-- Navigation.svelte -->
<script>
  import { preloadData } from '$app/navigation';
</script>

<nav>
  <a 
    href="/dashboard"
    on:mouseenter={() => preloadData('/dashboard')}
  >
    Dashboard
  </a>
</nav>
```

When user hovers over link, SvelteKit preloads the dashboard chunk in the background. Click is instant.
::::
::::tab label="Vanilla JS (with Vite)"
### Implementation: Vanilla JavaScript (with Vite)

```javascript
// main.js - Manual route-based code splitting
const routes = {
  '/': () => import('./pages/landing.js'),
  '/dashboard': () => import('./pages/dashboard.js'),
  '/settings': () => import('./pages/settings.js'),
  '/profile': () => import('./pages/profile.js'),
  '/admin': () => import('./pages/admin.js'),
};

const appElement = document.getElementById('app');

async function loadRoute(path) {
  // Show loading state
  appElement.innerHTML = '<div class="loading">Loading...</div>';
  
  try {
    // Dynamically import the route module
    const module = await routes[path]();
    
    // Render the page
    appElement.innerHTML = '';
    module.render(appElement);
  } catch (error) {
    appElement.innerHTML = '<div class="error">Failed to load page</div>';
    console.error('Route loading failed:', error);
  }
}

// Handle navigation
window.addEventListener('popstate', () => {
  loadRoute(window.location.pathname);
});

document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="/"]')) {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    history.pushState(null, '', path);
    loadRoute(path);
  }
});

// Initial load
loadRoute(window.location.pathname);
```

**Vite automatically creates chunks:**
```javascript
// pages/dashboard.js - Separate chunk
export function render(container) {
  container.innerHTML = `
    <div class="dashboard">
      <h1>Dashboard</h1>
      <!-- Dashboard content -->
    </div>
  `;
}
```
::::
:::

## Consequences

### Benefits

- **Dramatically faster initial load** - Users download 60-80% less JavaScript initially  
- **Better Core Web Vitals** - Improved LCP (Largest Contentful Paint) and TBT (Total Blocking Time)  
- **Improved SEO** - Google rewards fast-loading pages  
- **Better mobile experience** - Critical on slow 3G/4G connections  
- **Automatic caching** - Chunks cached by browser, subsequent visits are instant  
- **Pay-per-route** - Only download code users actually need  
- **Scalability** - App can grow without slowing initial load

### Tradeoffs

- **Slight delay on navigation** - First visit to a route requires downloading chunk (200-500ms)  
- **More HTTP requests** - Multiple chunks = multiple requests (mitigated by HTTP/2)  
- **Loading states required** - Need to handle loading UI gracefully  
- **Complexity** - More moving parts in build configuration  
- **Potential layout shift** - Loading spinners can cause CLS if not handled carefully  
- **Cache management** - Need cache-busting strategy for updates  
- **Failed chunk loads** - Network issues can cause routes to fail (need error handling)

## When to Use

- **Your app has multiple distinct routes** (>3 pages)  
- **Initial bundle exceeds 200KB** (gzipped)  
- **Lighthouse performance score is <90**  
- **Users complain about slow loading**  
- **Routes have different dependencies** (charts, forms, maps, etc.)  
- **Not all users visit all routes** (e.g., admin section rarely accessed)  
- **Mobile users are significant portion** of traffic

## When NOT to Use

- **Single-page application with 1-2 routes** (overhead not worth it)  
- **All routes share 90% of code** (splitting provides minimal benefit)  
- **Initial bundle is already <100KB** (optimization not needed yet)  
- **Navigation needs to be instant** (no tolerance for loading states)  
- **Server-side rendered with hydration** (consider streaming SSR instead)  
- **Users typically visit all routes** in a session (pre-loading makes more sense)

## Advanced Techniques

### 1. Prefetching / Preloading

**Load chunks before user navigates:**

```jsx
// React - Prefetch on hover
import { useEffect } from 'react';

function NavigationLink({ to, children }) {
  const prefetch = () => {
    // Trigger chunk download
    const route = routeMap[to];
    if (route) route.preload();
  };
  
  return (
    <Link 
      to={to} 
      onMouseEnter={prefetch}
      onTouchStart={prefetch}
    >
      {children}
    </Link>
  );
}
```

**User hovers → chunk loads in background → click is instant**

### 2. Chunk Naming Strategy

```javascript
// webpack.config.js or vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        // Creates: chunks/dashboard-a3b5c2d.js
      }
    }
  }
}
```

**Benefits:**
- Descriptive chunk names for debugging
- Content hash enables long-term caching
- Easy to identify chunks in network tab

### 3. Grouping Related Routes

```jsx
// Group admin routes into one chunk
const AdminUsers = lazy(() => import('./pages/admin/Users'));
const AdminSettings = lazy(() => import('./pages/admin/Settings'));
const AdminLogs = lazy(() => import('./pages/admin/Logs'));

// Webpack magic comment to group chunks
const AdminDashboard = lazy(() => 
  import(/* webpackChunkName: "admin" */ './pages/admin/Dashboard')
);
```

**All admin routes share one chunk instead of separate chunks.**

### 4. Error Boundaries for Failed Chunks

```jsx
// React Error Boundary for chunk loading failures
class ChunkErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    // Check if it's a chunk loading error
    if (error.message.includes('Loading chunk')) {
      return { hasError: true };
    }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="chunk-error">
          <p>Failed to load page. Please refresh.</p>
          <button onClick={() => window.location.reload()}>
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

## Measuring Impact

### Before Code Splitting
```
Initial bundle: 487 KB (gzipped)
Time to Interactive: 6.2s
Lighthouse Performance: 62
First Contentful Paint: 2.8s
```

### After Code Splitting
```
Initial bundle: 78 KB (gzipped)
Time to Interactive: 1.9s
Lighthouse Performance: 94
First Contentful Paint: 0.9s

Additional chunks (lazy loaded):
- dashboard.chunk.js: 203 KB
- settings.chunk.js: 98 KB
- profile.chunk.js: 82 KB
```

**Result:** 84% reduction in initial bundle, 69% faster TTI.

## Real-World Examples

### Companies Using Route-Based Code Splitting

**Airbnb:**
- Landing page: 120KB
- Search results: Loaded on-demand
- Booking flow: Separate chunks
- Host dashboard: Admin-only chunk

**GitHub:**
- Repository view: Different chunks per tab (Code, Issues, PRs)
- Settings: Lazy loaded
- Actions/CI: Separate chunk (not all users need it)

**Notion:**
- Landing/marketing: Small initial bundle
- Editor: Large chunk loaded after login
- Templates gallery: On-demand

### Open Source Examples

- **Next.js apps**: Automatic route-based splitting
- **Vue Router documentation**: Each doc page is separate chunk
- **SvelteKit examples**: File-based routing = automatic splitting

## Related Patterns

**Complements:**
- Pattern [X]: Component-Level Code Splitting (split within routes)
- Pattern [Y]: Lazy Loading Images (complete the performance optimization)
- Pattern [Z]: Service Worker Caching (cache chunks for offline use)

**Alternatives:**
- Server-Side Rendering (SSR) - Load full HTML first, hydrate later
- Static Site Generation (SSG) - Pre-render all routes at build time
- Progressive Web Apps (PWA) - Cache entire app after first visit

**Prerequisites:**
- Modern bundler (Webpack 5, Vite, Rollup, esbuild)
- Browser support for dynamic imports (ES2020+, 95% coverage)
- Understanding of async JavaScript

**Learn Next:**
- Pattern [N]: Prefetching Strategies (eliminate navigation delay)
- Pattern [M]: Bundle Analysis (identify optimization opportunities)

## Common Pitfalls

### No Loading State
**Problem:** Blank screen while chunk loads (bad UX)  
**Solution:** Always provide loading UI (spinner, skeleton, progress bar)

### Over-Splitting
**Problem:** 100+ tiny chunks = HTTP overhead  
**Solution:** Group related routes, aim for 5-15 chunks total

### No Error Handling
**Problem:** Network failure = broken app  
**Solution:** Catch chunk load errors, show retry UI

### Layout Shift During Load
**Problem:** Loading spinner causes content jump (bad CLS)  
**Solution:** Reserve space for content, use skeleton screens

### Forgetting About Shared Dependencies
**Problem:** Every chunk includes React/Vue/Svelte  
**Solution:** Configure bundler to extract common dependencies into vendor chunk

## Implementation Checklist

Before implementing route-based code splitting:

- Audit current bundle size (use webpack-bundle-analyzer or similar)
- Identify routes with heaviest dependencies
- Ensure bundler supports dynamic imports (Webpack 5, Vite, Rollup)
- Design loading states for each route
- Implement error boundaries for failed chunk loads
- Configure chunk naming strategy
- Test on slow 3G network (Chrome DevTools throttling)
- Monitor Core Web Vitals impact (LCP, FID, CLS)
- Set up bundle size monitoring in CI
- Consider prefetching for likely next routes

## Further Reading

- [MDN: Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [React Documentation: Code Splitting](https://react.dev/reference/react/lazy)
- [Vue Router: Lazy Loading](https://router.vuejs.org/guide/advanced/lazy-loading.html)
- [Web.dev: Code Splitting](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
- [Webpack: Code Splitting Guide](https://webpack.js.org/guides/code-splitting/)
