# @nipsys/lsd - Substance over Spectacle

Minimalist, accessible UI components following the [Logos Design System](https://guide.logos.co/). Built for React 19+ on top of Radix UI using shadcn/ui.

[![npm version](https://img.shields.io/npm/v/@nipsys/lsd)](https://www.npmjs.com/package/@nipsys/lsd)
[![MIT License](https://img.shields.io/npm/l/@nipsys/lsd)](LICENSE)

[![React](https://img.shields.io/badge/react-19.2.4+-61dafb?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.1.18-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Radix UI](https://img.shields.io/badge/radix%20ui-primitives-8b5cf6?logo=radixui&logoColor=white)](https://www.radix-ui.com)

[![Biome](https://img.shields.io/badge/biome-2.x-60a5fa?logo=biome&logoColor=white)](https://biomejs.dev)
[![Lefthook](https://img.shields.io/badge/lefthook-2.1.0-ff1e1e?logo=lefthook&logoColor=white)](https://lefthook.dev/)
[![Playwright](https://img.shields.io/badge/playwright-e2e-2emerald?logo=playwright&logoColor=white)](https://playwright.dev)
[![Vitest](https://img.shields.io/badge/vitest-unit-violet?logo=vitest&logoColor=white)](https://vitest.dev)

This component library follows the guidelines defined by the original Logos Design System, prioritising accessibility and content readability over aesthetics.

## Documentation
Visit [lsd.nipsys.dev](https://lsd.nipsys.dev) to view the complete documentation and live examples.

## Get Started with LSD

Install the latest version of `nipsys/lsd`

```bash
npm add @nipsys/lsd
```

Import the LSD styles, either in CSS or JS/TS:

```css
@import "@nipsys/lsd/css";
```

```ts
import '@nipsys/lsd/css'
```

Components are now ready to be used:

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@nipsys/lsd'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with a button</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## What's Inside

- **39 components** covering forms, navigation, data display, overlays, and more
- **Radix UI primitives** for accessibility-first behavior
- **5 accent themes** + light/dark modes
- **Documentation with 185+ live examples**

## Monorepo Structure

This is a pnpm workspace monorepo containing two packages:

- **`@nipsys/lsd`** - The component library
- **`@nipsys/lsd-docs`** - Next.js documentation site

## Project Structure

```
packages/
├── lsd/                      # Component library
│   ├── src/
│   │   ├── components/ui/    # LSD Components
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utilities (cn(), types)
│   │   └── styles/           # Design tokens (core.css, themes.css)
│   └── package.json
└── lsd-docs/                 # Documentation site
    ├── app/
    │   ├── components/       # Docs layout components
    │   ├── examples/         # 185+ live examples
    │   ├── design-tokens/    # Design system docs
    │   └── getting-started/  # Installation, theming
    ├── e2e/                  # Components behavior & accessibility end-to-end testing
    └── scripts/
        └── docs-generator/   # Automated TSDoc-based generator
```

## Development

### Setup

```bash
pnpm install
```

### Build

```bash
# Build both packages
pnpm build

# Build component library only
pnpm lsd:build

# Build documentation site only
pnpm docs:build
```

### Testing

Note: E2E tests live inside the lsd-docs packages as they are run against the documentation examples pages.

```bash
# Run all tests
pnpm test

# LSD-only Unit tests with watch mode
pnpm lsd:test:watch

# E2E tests (Playwright)
pnpm docs:test:e2e

# Test with UI mode
pnpm docs:test:e2e:ui
```

### Documentation Site

```bash
# Start dev server
pnpm docs:dev

# Build for production (static build)
pnpm docs:build

# Preview production build
pnpm docs:preview
```

### Linting & Formatting (powered by Biome)

```bash
# Check code
pnpm lint

# Auto-fix issues
pnpm lint:fix

# Format code
pnpm format
```

## AI-generated documentation pages

The documentation site uses an automated generator that extracts metadata from AI-generated TSDoc annotations in component source files, so manual modifications to documentation pages should be avoided.

#### Prompt to generate TSDoc and documentation page using an AI agent
Note: Your agent needs to be able to fetch webpages as it will be instructed to get component information from the Radix UI and shadcn/ui documentation sites.

Prompt:

```Re-generate the documentation page for the Button component while strictly following the instructions in tsdoc-page-generation.md```

#### Manually regenerating a documentation page from TSDoc annotations

```bash
pnpm docs:generate button
```

#### Manually regenerating all documentation pages from TSDoc annotations

```bash
pnpm docs:generate --all
```

The generator parses:
- Component props and their types
- Variant and size configurations from CVA
- Accessibility patterns (keyboard, ARIA, focus)
- TSDoc custom tags for documentation sections

See `tsdoc-page-generation.md` for complete documentation generation guidelines (intended for AI agents, but of course readable by humans too).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines and code of conduct.

## License

MIT
