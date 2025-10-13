---
id: 4
title: Keyboard Navigation
tags: Accessibility
difficulty: Intermediate
framework:
  - React
  - Vue
  - Svelte
added: 2025-10-10T01:00:00Z
metaDescription: ""
---

# Keyboard Navigation

:::tldr
## TL;DR

Make all interactive elements usable with keyboard (Tab, Enter, Escape, Arrow keys) following web standards

**Why:** 15% of users rely on keyboard navigation (motor disabilities, power users, screen reader users)

**How:** Semantic HTML, focus management, keyboard event handlers, proper ARIA attributes

**When to use:**
- Any interactive UI (modals, dropdowns, tabs, custom controls)
- Building accessible component libraries
- Enterprise apps with compliance requirements (WCAG 2.1)

**Impact:** Makes app usable for keyboard-only users, improves accessibility scores, legal compliance

**Quick example:**
```jsx
// Trap focus in modal, close on Escape
useEffect(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') closeModal();
  };
  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
}, []);
```
:::

## Problem

Many web applications are built for mouse/touch interaction only. Keyboard users encounter:

**Common barriers:**
- Can't reach interactive elements (missing `tabindex` or not using semantic elements)
- Trapped in UI elements (focus doesn't escape modals/dropdowns)
- No visual focus indicators (can't see where they are)
- Wrong tab order (focus jumps illogically)
- Can't activate controls (buttons that only respond to clicks)
- Can't dismiss overlays (modals with no Escape key handler)
- Lost focus after actions (deleting item, focus disappears)

**Who this affects:**
- **15% of users** rely primarily on keyboard
- Motor disabilities (can't use mouse precisely)
- Vision impairments (screen reader + keyboard)
- Power users (keyboard is faster than mouse)
- Temporary injuries (broken arm, RSI)

**Legal risk:** Inaccessible apps violate ADA (Americans with Disabilities Act), WCAG guidelines, and can result in lawsuits.

## Context

You're building interactive UI components:
- Modals/dialogs that overlay content
- Dropdown menus or select controls
- Tab interfaces for content switching
- Custom form controls (date pickers, sliders)
- Expandable/collapsible sections
- Interactive data tables

**Current approach (problematic):**
```jsx
// Modal that traps mouse users but not keyboard users
function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

**Problems:**
- Can Tab out of modal to background content
- No Escape key to close
- Focus doesn't return to trigger element after close
- Can't trap focus within modal
- Background still scrollable via keyboard

## Solution

**Follow web standards for keyboard interaction, manage focus explicitly, and provide keyboard handlers for all interactive patterns.**

### Core Principles

#### 1. Use Semantic HTML First

**Semantic elements are keyboard-accessible by default:**
- `<button>` - Focusable, activates on Enter/Space
- `<a>` - Focusable, activates on Enter
- `<input>`, `<textarea>`, `<select>` - Focusable, built-in keyboard handling

**Custom elements need extra work:**
- `<div onClick={...}>` - Not focusable, not keyboard-accessible
- Must add `tabIndex={0}` and keyboard handlers

**Rule:** If semantic HTML exists, use it. Only create custom elements when necessary.

#### 2. Focus Management States

**Elements can be in different focus states:**
- **Focusable:** Can receive focus via Tab key (`tabindex="0"` or semantic elements)
- **Not focusable:** Cannot receive focus (`tabindex="-1"` temporarily or no tabindex)
- **Focus trap:** Focus cycles within a container (modals, menus)
- **Focus restoration:** Return focus after an action (closing modal, deleting item)

**Common patterns:**
- Modal opens → trap focus inside
- Modal closes → return focus to trigger button
- Item deleted → focus next item in list
- Dropdown opens → focus first item

#### 3. Standard Keyboard Shortcuts

**Users expect these conventions:**

| Key | Expected Behavior |
|-----|------------------|
| **Tab** | Move focus to next focusable element |
| **Shift + Tab** | Move focus to previous element |
| **Enter** | Activate button/link |
| **Space** | Activate button, toggle checkbox |
| **Escape** | Close modal/dropdown, cancel operation |
| **Arrow keys** | Navigate within component (tabs, menus, lists) |
| **Home** | Jump to first item |
| **End** | Jump to last item |

**Don't reinvent:** Use standard shortcuts unless you have a very good reason.

## Implementation Patterns

### Pattern A: Focus Trap (Modals, Dropdowns)

**Principle:** Trap Tab key within a container, preventing focus from escaping.

:::tabs name="Framework"
::::tab label="React"
#### React Implementation

```jsx
import { useEffect, useRef } from 'react';

function FocusTrap({ children, active }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!active) return;
    
    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Focus first element when trap activates
    firstElement?.focus();
    
    function handleTab(e) {
      if (e.key !== 'Tab') return;
      
      // Shift + Tab on first element → focus last
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
      // Tab on last element → focus first
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
    
    container.addEventListener('keydown', handleTab);
    return () => container.removeEventListener('keydown', handleTab);
  }, [active]);
  
  return <div ref={containerRef}>{children}</div>;
}

// Usage: Modal with focus trap
function Modal({ isOpen, onClose, children }) {
  const triggerRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      // Store element that opened modal
      triggerRef.current = document.activeElement;
    } else if (triggerRef.current) {
      // Restore focus when modal closes
      triggerRef.current.focus();
    }
  }, [isOpen]);
  
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <FocusTrap active={isOpen}>
        <div className="modal-content" role="dialog" aria-modal="true">
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </FocusTrap>
    </div>
  );
}
```

::::
::::tab label="Vue 3"
#### Vue Implementation

```vue
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps(['isOpen', 'onClose']);
const containerRef = ref(null);
const triggerElementRef = ref(null);

// Focus trap logic
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    triggerElementRef.value = document.activeElement;
    
    // Wait for next tick, then trap focus
    setTimeout(() => {
      const container = containerRef.value;
      const focusable = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable[0]?.focus();
    }, 0);
  } else if (triggerElementRef.value) {
    triggerElementRef.value.focus();
  }
});

function handleTab(e) {
  if (e.key !== 'Tab' || !props.isOpen) return;
  
  const container = containerRef.value;
  const focusable = Array.from(container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ));
  
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last?.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first?.focus();
  }
}

function handleEscape(e) {
  if (e.key === 'Escape' && props.isOpen) {
    props.onClose();
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div
      ref="containerRef"
      class="modal-content"
      role="dialog"
      aria-modal="true"
      @keydown="handleTab"
    >
      <slot />
      <button @click="onClose">Close</button>
    </div>
  </div>
</template>
```

::::
::::tab label="Svelte"
#### Svelte Implementation

```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  
  export let isOpen = false;
  export let onClose;
  
  let containerRef;
  let triggerElement;
  
  $: if (isOpen) {
    triggerElement = document.activeElement;
    setTimeout(() => {
      const focusable = containerRef?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.[0]?.focus();
    }, 0);
  } else if (triggerElement) {
    triggerElement.focus();
  }
  
  function handleTab(e) {
    if (e.key !== 'Tab') return;
    
    const focusable = Array.from(containerRef.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ));
    
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  }
  
  function handleEscape(e) {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  }
  
  onMount(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  });
</script>

{#if isOpen}
  <div class="modal-overlay">
    <div
      bind:this={containerRef}
      class="modal-content"
      role="dialog"
      aria-modal="true"
      on:keydown={handleTab}
    >
      <slot />
      <button on:click={onClose}>Close</button>
    </div>
  </div>
{/if}
```

::::
:::

### Pattern B: Arrow Key Navigation (Tabs, Menus)

**Principle:** Arrow keys navigate within a component, following ARIA Authoring Practices.

```jsx
function TabList({ tabs, activeTab, onChange }) {
  const tabRefs = useRef([]);
  
  function handleKeyDown(e, index) {
    let newIndex = index;
    
    switch (e.key) {
      case 'ArrowRight':
        newIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    
    e.preventDefault();
    tabRefs.current[newIndex]?.focus();
    onChange(tabs[newIndex].id);
  }
  
  return (
    <div role="tablist">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => tabRefs.current[index] = el}
          role="tab"
          aria-selected={activeTab === tab.id}
          tabIndex={activeTab === tab.id ? 0 : -1}
          onClick={() => onChange(tab.id)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

**Key features:**
- Arrow keys navigate between tabs
- Only active tab is in tab order (`tabIndex={0}` vs `-1`)
- Home/End jump to first/last
- Follows ARIA Authoring Practices for tabs

### Pattern C: Skip Links (Page Navigation)

**Principle:** Let keyboard users skip repetitive navigation.

```html
<!-- Skip link: first focusable element on page -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<nav>
  <!-- 50 navigation links... -->
</nav>

<main id="main-content" tabindex="-1">
  <!-- Main content here -->
</main>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

**What happens:**
- First Tab reveals skip link
- Enter jumps to main content
- Avoids tabbing through 50 nav links

### Pattern D: Focus Restoration (After Deletions)

**Principle:** When an item is deleted, focus the next logical element.

```jsx
function TodoList({ todos, onDelete }) {
  const itemRefs = useRef([]);
  
  function handleDelete(index) {
    onDelete(todos[index].id);
    
    // Focus next item, or previous if deleting last
    setTimeout(() => {
      const nextIndex = index < todos.length - 1 ? index : index - 1;
      itemRefs.current[nextIndex]?.focus();
    }, 0);
  }
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            ref={(el) => itemRefs.current[index] = el}
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
```

**Why this matters:** Without focus restoration, focus is lost and keyboard users are disoriented.

### Pattern E: Custom Button (When Semantic HTML Isn't Enough)

**Principle:** If you must use `<div>` as button, add full keyboard support.

```jsx
function CustomButton({ onClick, children }) {
  function handleKeyDown(e) {
    // Activate on Enter or Space (standard button behavior)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e);
    }
  }
  
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="custom-button"
    >
      {children}
    </div>
  );
}
```

**Required attributes:**
- `role="button"` - Tells screen readers this is a button
- `tabIndex={0}` - Makes it focusable
- `onKeyDown` - Handle Enter and Space keys
- `onClick` - Handle mouse/touch

**Better:** Just use `<button>`. Only create custom when absolutely necessary (e.g., styling limitations).

## Consequences

### Benefits

- **15% more users can access app** - Keyboard-only users included  
- **Legal compliance** - Meets WCAG 2.1 Level AA, ADA requirements  
- **Better UX for everyone** - Power users prefer keyboard  
- **Screen reader compatible** - Keyboard navigation enables screen readers  
- **Reduced lawsuit risk** - Accessibility lawsuits are common and expensive  
- **Improved SEO** - Accessible sites rank higher  
- **Higher quality perception** - Accessible apps feel professional

### Tradeoffs

- **Development time** - Requires testing with keyboard  
- **Complexity** - Focus management adds code  
- **Testing overhead** - Must test every interactive flow with keyboard  
- **Visual design constraints** - Focus indicators must be visible  
- **Team education** - Developers must learn accessibility patterns  
- **Ongoing maintenance** - New features must maintain keyboard support

## When to Use

- **Any interactive UI** (modals, menus, forms, custom controls)  
- **Public-facing applications** (legal requirement in many jurisdictions)  
- **Enterprise/B2B apps** (often have accessibility requirements)  
- **Government/education** (WCAG compliance often mandatory)  
- **Component libraries** (must be accessible out-of-box)  
- **Any site with forms** (keyboard users need to complete forms)

## When It's Less Critical

- **Internal tools with 5 users** (still good practice, but lower priority)  
- **Prototypes/MVPs** (can add later, but don't skip entirely)  
- **Games with custom controls** (different interaction model)

**Note:** Even these benefit from keyboard support. This is about priority, not skipping entirely.

## Common Mistakes

### Forgetting Focus Indicators

**Wrong:**
```css
*:focus {
  outline: none; /* Never do this! */
}
```

**Right:**
```css
/* Provide clear focus indicator */
*:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
```

### Div Buttons Without Keyboard Support

**Wrong:**
```jsx
<div onClick={handleClick}>Click me</div>
```

**Right:**
```jsx
<button onClick={handleClick}>Click me</button>
```

Or if you must use div:
```jsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Click me
</div>
```

### No Escape Key for Modals

**Wrong:**
```jsx
// Modal with no Escape handler
function Modal({ onClose, children }) {
  return <div className="modal">{children}</div>;
}
```

**Right:**
```jsx
function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  return <div className="modal">{children}</div>;
}
```

### Wrong Tab Order

**Wrong:**
```jsx
// CSS changes visual order but not tab order
<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
  <button>First visually, last in tab order</button>
  <button>Last visually, first in tab order</button>
</div>
```

**Right:**
- Keep DOM order matching visual order
- Or use `tabIndex` carefully (not recommended)
- Or restructure HTML

## Testing Checklist

**Test every interactive flow with keyboard only:**

- Unplug mouse/trackpad
- Can Tab to all interactive elements?
- Is focus indicator visible on all elements?
- Can activate buttons with Enter?
- Can activate buttons with Space?
- Can close modals with Escape?
- Does focus trap in modals?
- Does focus restore after modal closes?
- Does focus restore after deleting items?
- Can navigate menus with Arrow keys?
- Can jump to first/last with Home/End?
- Is tab order logical?
- Can skip repetitive navigation?

**Automated testing:**
```bash
# Use accessibility testing tools
npm install --save-dev jest-axe
npm install --save-dev @axe-core/react
```

```jsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Modal is keyboard accessible', async () => {
  const { container } = render(<Modal isOpen={true} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Real-World Example: Accessible Dropdown

```jsx
function Dropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  
  function handleButtonKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }
  
  function handleListKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((focusedIndex + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((focusedIndex - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        onChange(options[focusedIndex].value);
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(options.length - 1);
        break;
    }
  }
  
  return (
    <div className="dropdown">
      <button
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onKeyDown={handleButtonKeyDown}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}: {value}
      </button>
      
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          onKeyDown={handleListKeyDown}
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={index === focusedIndex}
              className={index === focusedIndex ? 'focused' : ''}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**Features:**
- Arrow keys navigate options
- Enter/Space select
- Escape closes
- Home/End jump to first/last
- Focus returns to button after selection
- Proper ARIA attributes

## Related Patterns

**Complements:**
- Pattern [X]: Screen Reader Announcements (ARIA live regions)
- Pattern [Y]: Focus Indicators (visual design for focus states)
- Pattern [Z]: Skip Links (page-level navigation)

**Prerequisites:**
- Understanding of semantic HTML
- Basic JavaScript event handling
- Familiarity with useEffect/lifecycle methods

**Learn Next:**
- Pattern [N]: ARIA Attributes (roles, states, properties)
- Pattern [M]: Screen Reader Testing
- Pattern [P]: Accessible Forms

## Further Reading

- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) - W3C patterns
- [WebAIM Keyboard Accessibility](https://webaim.org/articles/keyboard/) - Comprehensive guide
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Official standards
- [A11y Project](https://www.a11yproject.com/) - Practical accessibility tips
- [Inclusive Components](https://inclusive-components.design/) - Accessible component patterns
