---
id: 1
title: Compound Components
category: Component
added: 2025-10-08T00:00:00Z
difficulty: Intermediate
framework:
  - React
  - Vue
  - Svelte
metaDescription: Learn the Compound Components pattern for building flexible, reusable React, Vue, and Svelte components. Complete guide with code examples and best practices.
---

# Compound Components

:::tldr
## TL;DR

Split complex components into sub-components that share implicit state via `Context`/`provide`/`inject`.

**Why:** Avoid 15-20 prop components, increase flexibility, easier to style, maintain and extend.

**How:** Parent manages state, children access via context, no prop drilling.

**When to use:**
- Building reusable component libraries
- Components with 5+ configuration options
- Need flexibility without API complexity

**Impact:** Prop count drops from 15-20 to 2-3, cleaner API, happier consumers.

**Quick example:**
```jsx
<Select value={selected} onChange={setSelected}>
  <Select.Trigger />
  <Select.Options>
    <Select.Option value="1">Option 1</Select.Option>
  </Select.Options>
</Select>
```
:::

## Problem

When building complex UI components, you face a choice: expose dozens of props (configuration hell), or make the component inflexible. Neither scales well. Teams need components that are both powerful and simple to use.

## Context

You're building:
- A component library or design system for multiple teams
- Complex UI components (Select, Modal, Tabs, Accordion, Dropdown)
- Components that will be used in many different ways
- Components where new features are frequently requested

The component starts with 3-4 props, but over time grows to 15-20 props as teams request more customization. Adding props becomes painful, and the component's API becomes confusing.

## Solution

Split complex components into multiple cooperating sub-components that share implicit state. Parent component manages state; child components access it without explicit prop drilling. Users compose sub-components to create the UI they need.

## Core principle

Instead of: 

```javascript
<Select 
  options={[...]} 
  renderOption={...} 
  renderValue={...}
  onChange={...}
  multiSelect={true}
  clearable={true}
  searchable={true}
  // 20 more props...
/>
```

Allow: 

```javascript
<Select>
  <Select.Trigger />
  <Select.Options>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
  </Select.Options>
</Select>
```

Sub-components implicitly access parent state (selected value, open/closed, etc.) without prop drilling.

## Implementation

:::tabs name="framework"
::::tab label="React"
### Implementation: React

```javascript
// Using Context API for implicit state sharing
import { createContext, useContext, useState } from 'react';

const SelectContext = createContext(null);

export function Select({ children, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const context = {
    value,
    onChange,
    isOpen,
    setIsOpen
  };
  
  return (
    <SelectContext.Provider value={context}>
      <div className="select">{children}</div>
    </SelectContext.Provider>
  );
}

Select.Trigger = function SelectTrigger() {
  const { value, isOpen, setIsOpen } = useContext(SelectContext);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {value || 'Select...'}
    </button>
  );
};

Select.Options = function SelectOptions({ children }) {
  const { isOpen } = useContext(SelectContext);
  if (!isOpen) return null;
  return <div className="options">{children}</div>;
};

Select.Option = function SelectOption({ value, children }) {
  const { onChange, setIsOpen } = useContext(SelectContext);
  return (
    <div 
      onClick={() => {
        onChange(value);
        setIsOpen(false);
      }}
    >
      {children}
    </div>
  );
};

// Usage
<Select value={selected} onChange={setSelected}>
  <Select.Trigger />
  <Select.Options>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
  </Select.Options>
</Select>
```
::::

::::tab label="Vue 3"
### Implementation: Vue 3

```javascript
<!-- Select.vue - Parent Component -->
<script setup>
import { provide, ref } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

// Provide state to child components
provide('selectState', {
  value: props.modelValue,
  isOpen,
  onChange: (val) => emit('update:modelValue', val),
  setIsOpen: (val) => isOpen.value = val
});
</script>

<template>
  <div class="select">
    <slot />
  </div>
</template>

<!-- SelectTrigger.vue -->
<script setup>
import { inject } from 'vue';
const { value, isOpen, setIsOpen } = inject('selectState');
</script>

<template>
  <button @click="setIsOpen(!isOpen)">
    {{ value || 'Select...' }}
  </button>
</template>

<!-- SelectOptions.vue -->
<script setup>
import { inject } from 'vue';
const { isOpen } = inject('selectState');
</script>

<template>
  <div v-if="isOpen" class="options">
    <slot />
  </div>
</template>

<!-- SelectOption.vue -->
<script setup>
import { inject } from 'vue';
const props = defineProps(['value']);
const { onChange, setIsOpen } = inject('selectState');

const handleClick = () => {
  onChange(props.value);
  setIsOpen(false);
};
</script>

<template>
  <div @click="handleClick">
    <slot />
  </div>
</template>

<!-- Usage -->
<Select v-model="selected">
  <SelectTrigger />
  <SelectOptions>
    <SelectOption value="1">Option 1</SelectOption>
    <SelectOption value="2">Option 2</SelectOption>
  </SelectOptions>
</Select>
```
::::

::::tab label="Svelte"
### Implementation: Svelte

```javascript
<!-- Select.svelte -->
<script>
  import { setContext, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';

  export let value = null;
  
  const isOpen = writable(false);
  const dispatch = createEventDispatcher();
  
  // Share state via context
  setContext('select', {
    value: writable(value),
    isOpen,
    onChange: (val) => {
      value = val;
      dispatch('change', val);
    },
    setIsOpen: (val) => isOpen.set(val)
  });
</script>

<div class="select">
  <slot />
</div>

<!-- SelectTrigger.svelte -->
<script>
  import { getContext } from 'svelte';
  const { value, isOpen, setIsOpen } = getContext('select');
</script>

<button on:click={() => setIsOpen(!$isOpen)}>
  {$value || 'Select...'}
</button>

<!-- SelectOptions.svelte -->
<script>
  import { getContext } from 'svelte';
  const { isOpen } = getContext('select');
</script>

{#if $isOpen}
  <div class="options">
    <slot />
  </div>
{/if}

<!-- SelectOption.svelte -->
<script>
  import { getContext } from 'svelte';
  export let value;
  const { onChange, setIsOpen } = getContext('select');
  
  function handleClick() {
    onChange(value);
    setIsOpen(false);
  }
</script>

<div on:click={handleClick}>
  <slot />
</div>

<!-- Usage -->
<Select bind:value={selected}>
  <SelectTrigger />
  <SelectOptions>
    <SelectOption value="1">Option 1</SelectOption>
    <SelectOption value="2">Option 2</SelectOption>
  </SelectOptions>
</Select>
```
::::

::::tab label="Vanilla JS (Web Components)"
### Implementation: Vanilla JavaScript (Web Components)

```javascript
// For patterns where Web Components make sense
class CompoundSelect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._value = null;
    this._isOpen = false;
  }
  
  connectedCallback() {
    // Provide state to children
    this.addEventListener('select:change', this._handleChange);
    this.addEventListener('select:toggle', this._handleToggle);
    this.render();
  }
  
  _handleChange(e) {
    this._value = e.detail;
    this.dispatchEvent(new CustomEvent('change', { detail: this._value }));
    this._isOpen = false;
    this.render();
  }
  
  _handleToggle() {
    this._isOpen = !this._isOpen;
    this.render();
  }
  
  // ... rest of implementation
}

customElements.define('compound-select', CompoundSelect);
```
::::
:::

## Consequences

### Benefits
- **Flexibility**: Users compose exactly the UI they need
- **Maintainability**: Adding features doesn't require new props
- **Type safety**: Sub-components have specific, focused prop types
- **Separation of concerns**: Each sub-component has single responsibility
- **Backwards compatibility**: New sub-components don't break existing usage

### Tradeoffs
- **Complexity**: More components to understand and maintain
- **Learning curve**: Teams need to understand implicit state sharing
- **Context overhead**: Every sub-component re-renders when context changes (unless memoized)
- **Discovery**: Harder to see all available options (vs one component with props)
- **Verbosity**: More code to write vs single component with props

## When to Use

- Building reusable component libraries or design systems
- Components with complex internal state (modals, selects, tabs, accordions)
- When you need flexibility in how components are composed
- Multiple teams will consume the component (flexibility prevents breaking changes)
- The component has 5+ configuration options

## When to Avoid

- Simple components with 1-3 props (compound pattern is overkill)
- One-off components used in a single place
- Components with no internal state to share
- When team is unfamiliar with advanced React patterns (learning curve)
- Performance-critical components (context can cause re-renders if not memoized)

## Real-World Examples

This pattern is used extensively in popular libraries:

- **Radix UI**: All components use compound pattern ([Select](https://www.radix-ui.com/primitives/docs/components/select), Accordion, Dialog, Dropdown)
- **Headless UI**: Tabs, Disclosure, Menu components
- **Reach UI**: Tabs, Accordion, Menu
- **React Router**: Routes component with nested Route children
- **HTML native**: `<select>` with `<option>` children

## Related Patterns

**Complements:**
- Pattern [X]: Provider Pattern (prerequisite understanding)
- Pattern [Y]: Render Props (alternative approach for flexibility)

**Alternatives:**
- Pattern [Z]: Higher-Order Components (older approach to composition)
- Simple Props (when compound pattern is overkill)

**Learn next:**
- Pattern [N]: State Reducer Pattern (for more control over state changes)
