# RuneKit

RuneKit is a symbolic UI system with two runtime theme variants:

- **Raidho**: ceremonial, atmospheric, high-glow interfaces
- **Inawaz**: analytical, structured, restrained operational interfaces

This repository ships a React + TypeScript + Tailwind + Storybook implementation of the RuneKit guide.

## Implemented system pieces

- Token architecture (`src/tokens`) for core, Raidho, and Inawaz values
- Theme switching via `html[data-theme]`
- Motion presets and reduced-motion handling (`src/motion`, `src/hooks`)
- Glyph system (`src/components/primitives/Glyph.tsx`)
- Core primitives and structures:
  - Button
  - Input
  - Card
  - Navigation
  - Data table
- Tailwind semantic aliases and RuneKit utility layer (`tailwind.config.js`, `src/index.css`)
- Storybook with runtime theme toolbar and RuneKit preview styling
- Story suites for foundations, primitives, composites, data display, navigation, feedback, layouts, and experimental work

## Stack

- React + TypeScript + Vite
- TailwindCSS
- Framer Motion
- Storybook
- clsx + tailwind-merge
- Radix Slot

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run storybook
npm run build-storybook
```

## Theme usage

```ts
import { applyTheme } from './src/tokens'

applyTheme('raidho')
applyTheme('inawaz')
```

Theme tokens are backed by CSS variables and consumed through Tailwind semantic color aliases.
