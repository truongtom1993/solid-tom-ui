# solid-tom-ui

> A blazing-fast, beautifully crafted UI component library for [SolidJS](https://solidjs.com), inspired by Ant Design.

**Entire library ships at just ~1.5 MB.** Built on **Tailwind CSS 4** and **DaisyUI 5**, solid-tom-ui harnesses SolidJS fine-grained reactivity to deliver buttery-smooth UIs with near-zero overhead — no virtual DOM, no unnecessary re-renders, just raw speed.

Customizing the look and feel is a first-class experience: swap the entire color scheme by overriding a handful of CSS variables, or dial in individual components through the unified `color` prop and per-slot `class` overrides — no CSS-in-JS, no build plugins, just plain CSS and Tailwind utilities you already know.

## Why solid-tom-ui?

- **Featherlight** — the full library (45+ components, styles included) weighs only ~1.5 MB, keeping your app fast on any network
- **Instant theming** — change primary colors, border radii, and shadows site-wide by editing a single CSS block; no rebuild required
- **Pixel-perfect by default** — every component is designed to look great out of the box, while remaining fully customizable via `class` props or CSS variables
- **SolidJS-native** — reactivity is handled at the signal level, so components update surgically without wasting a single render cycle

## Features

- **45+ components** — from simple buttons to complex data tables with virtual scrolling
- **Tree-shakeable** — each component is its own module; unused components are not bundled
- **Typed** — full TypeScript support with exported prop interfaces
- **Themeable** — DaisyUI color tokens + unified `color` prop across all components
- **Accessible** — semantic HTML, ARIA attributes, keyboard navigation
- **Zero CSS setup** — pre-compiled CSS bundle includes Tailwind + DaisyUI, no extra config needed

## Installation

```bash
npm install solid-tom-ui
or
pnpm install solid-tom-ui
or
bun install solid-tom-ui
```

### Peer dependencies

```bash
npm install solid-js
```

Optional (only needed for specific components):

| Package | Component |
|---------|-----------|
| `imask` | `Input` with mask |
| `qrcode` | `QrCode` |
| `@tanstack/solid-table` | `Table` |

## Setup

### 1. Import the pre-compiled CSS bundle

```css
/* app.css */
@import 'solid-tom-ui/styles';
```

Make sure this CSS file is imported in your app entry point:

```tsx
// src/index.tsx
import './app.css';
import { render } from 'solid-js/web';
import App from './App';

render(() => <App />, document.getElementById('root')!);
```
---

### 2. Use components

```tsx
import { Button, Modal, toast } from 'solid-tom-ui';

function App() {
  return (
    <Button color="primary" onClick={() => toast.success('Hello!')}>
      Click me
    </Button>
  );
}
```

---

## Advanced Setup (Custom Theme)

Overwrite css variable 

```css
:root {
	--color-base-100: white;
	--color-base-content: black;

	--color-primary: red;
	--color-primary-content: white;

	--color-secondary: red;
	--color-secondary-content: white;

	--color-accent: red;
	--color-accent-content: white;

	--color-neutral: red;
	--color-neutral-content: white;

	--color-info: red;
	--color-info-content: white;

	--color-success: red;
	--color-success-content: white;

	--color-warning: red;
	--color-warning-content: white;

	--color-error: red;
	--color-error-content: white;
	--radius-selector: 8px;
	--radius-field: 4px;
	--radius-box: 6px;
	--size-selector: 4px;
	--size-field: 4px;
	--border: 1px;
	--depth: 0;
	--noise: 0;
}
```

---

## Components

### Layout & Navigation
| Component | Description |
|-----------|-------------|
| `Breadcrumb` | Navigation breadcrumb trail |
| `Divider` | Horizontal or vertical divider |
| `Drawer` | Slide-in side panel |
| `Dropdown` | Dropdown menu |
| `Menu` | Vertical/horizontal navigation menu |
| `Pagination` | Page navigation |
| `Splitter` | Resizable split pane |
| `Steps` | Step-by-step progress indicator |
| `Tab` | Tabbed navigation |

### Data Display
| Component | Description |
|-----------|-------------|
| `Avatar` | User avatar with fallback |
| `Badge` | Status badge / tag |
| `Carousel` | Image/content carousel |
| `ChatBubble` | Chat message bubble |
| `Diff` | Side-by-side diff viewer |
| `Indicator` | Numeric badge overlay |
| `Skeleton` | Loading skeleton placeholder |
| `Table` | Feature-rich table (virtual scroll, sort, filter, pinned columns) |
| `Timeline` | Vertical timeline |
| `Tooltip` | Hover tooltip |
| `Tour` | Interactive product tour |

### Input & Forms
| Component | Description |
|-----------|-------------|
| `Checkbox` | Checkbox input |
| `Input` | Text, password, number, textarea, color, date, range, OTP, masked inputs |
| `Rating` | Star rating |
| `Select` | Dropdown select |
| `SelectZone` | Drag-to-select zone |
| `Slider` | Range slider |
| `Switch` | Toggle switch |
| `Upload` | File upload with drag & drop |

### Feedback
| Component | Description |
|-----------|-------------|
| `Loading` | Spinner / loading indicator |
| `Modal` | Dialog modal |
| `ProgressBar` | Progress bar |
| `Toast` | Toast notifications (`toast.success()`, `toast.error()`, …) |

### Visual & Effects
| Component | Description |
|-----------|-------------|
| `Collapse` | Collapsible content panel |
| `ContextMenu` | Right-click context menu |
| `FloatButton` | Floating action button |
| `Hover3dImage` | 3D parallax image on hover |
| `ImagePreview` | Lightbox image preview |
| `Mansory` | Masonry grid layout |
| `QrCode` | QR code generator |
| `Swap` | Flip between two states |
| `TextRotate` | Animated rotating text |

### Utilities
| Component | Description |
|-----------|-------------|
| `CodePreview` | Code preview |

---

## API

### Color prop

Most components accept a `color` prop:

```tsx
type BaseColorProps =
  | 'primary' | 'secondary' | 'accent' | 'neutral'
  | 'info' | 'success' | 'warning' | 'error';
```

```tsx
<Badge color="success">Active</Badge>
<Button color="warning">Caution</Button>
```

### Class override (slot system)

Every component exposes a `class` prop to override individual slots:

```tsx
// Single-element components
<Badge class="font-bold text-lg" />

// Multi-slot components
<Modal
  class={{
    root: 'max-w-2xl',
    header: 'bg-base-200',
    body: 'p-8',
  }}
/>
```

## TypeScript

All prop types are exported:

```tsx
import type { ButtonProps, ModalProps, BaseColorProps, SolidComponent } from 'solid-tom-ui';
```

## License

MIT © [Truong Tom](https://github.com/truongtom1993)
