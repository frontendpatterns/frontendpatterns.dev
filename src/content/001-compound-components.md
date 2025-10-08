---
id: 1
title: "Compound Components"
type: "Component"
---

# Problem

When building complex UI components, you face a choice: expose dozens of props (configuration hell), or make the component inflexible. Neither scales well. Teams need components that are both powerful and simple to use.

# Solution

Split complex components into multiple cooperating sub-components that share implicit state. Parent component manages state; child components access it without explicit prop drilling. Users compose sub-components to create the UI they need.

# Core principle

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

# Implementation: React

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

# Implementation: Vue 3

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

# Implementation: Svelte

```javascript
<!-- Select.svelte -->
<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  
  export let value = null;
  
  const isOpen = writable(false);
  
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

# Implementation: Vanilla JavaScript (Web Components)

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
