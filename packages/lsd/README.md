# @nipsys/lsd

Minimalist, accessible UI components following the [Logos Design System](https://guide.logos.co/). Built for React 19+ on top of Radix UI.

[![npm version](https://img.shields.io/npm/v/@nipsys/lsd)](https://www.npmjs.com/package/@nipsys/lsd)
[![MIT License](https://img.shields.io/npm/l/%40nipsys%2Flsd)](https://github.com/nipsysdev/lsd/blob/main/LICENSE)

[![React](https://img.shields.io/badge/react-19.2.4+-61dafb?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.1.18-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Radix UI](https://img.shields.io/badge/radix%20ui-primitives-8b5cf6?logo=radixui&logoColor=white)](https://www.radix-ui.com)

## Documentation

Visit [lsd.nipsys.dev](https://lsd.nipsys.dev) for complete documentation with 185+ live examples, component API reference, and design token documentation.

## Installation

```bash
npm add @nipsys/lsd
```

## Quick Start

Import the LSD styles:

```css
@import "@nipsys/lsd/css";
```

Or import in JavaScript/TypeScript:

```ts
import '@nipsys/lsd/css'
```

Start building components:

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@nipsys/lsd'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Minimal UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## What's Included

- **39 components** - Forms, navigation, data display, overlays, feedback, and layout
- **Accessibility-first** - Radix UI primitives with full keyboard navigation
- **Theming** - 5 accent themes + light/dark modes
- **Documentation with 185+ live examples**
- **TypeScript** - Full type definitions included
- **Tailwind CSS** - Built with Tailwind CSS v4

## Component Categories

### Forms (15 components)
Autocomplete, Button, ButtonGroup, Checkbox, Command, Field, Form, Input, InputGroup, Label, RadioGroup, Select, Slider, Switch, Textarea

### Navigation (4 components)
Menubar, NavigationMenu, Sidebar, Tabs

### Overlays (5 components)
AlertDialog, Dialog, DropdownMenu, Popover, Sheet

### Feedback (4 components)
Alert, Badge, Progress, Sonner

### Layout (7 components)
Accordion, Avatar, Calendar, Card, ScrollArea, Separator, Table

### Typography & Interactive (4 components)
Toggle, ToggleGroup, Tooltip, Typography

## AI Skill

```bash
npx skills add nipsys-lsd
```

The **nipsys-lsd** skill provides guidance on:
- Component APIs and usage patterns
- Design tokens (colors, typography, spacing scale)
- Theming with accent colors and light/dark modes
- Composition patterns for complex components

Best for developers building UI components with LSD in any React 19+ project.

## Peer Dependencies

- `react` ^19.2.4
- `react-dom` ^19.2.4

## License

MIT
