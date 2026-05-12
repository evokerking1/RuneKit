import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../components/primitives/Button'
import { Input } from '../../components/primitives/Input'

const meta = {
  title: 'RuneKit/Foundations/Accessibility',
  parameters: {
    docs: {
      description: {
        component:
          'Dedicated accessibility stories: High Contrast, Keyboard Navigation, Reduced Motion, Screen Reader Structure, Focus Traversal.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const HighContrast: Story = {
  render: () => (
    <section className="space-y-2">
      <Button variant="primary">Primary Action</Button>
      <Input placeholder="Focusable channel input" />
    </section>
  ),
}

export const KeyboardNavigation: Story = {
  render: () => (
    <div className="space-y-2">
      <Button>First</Button>
      <Button variant="ghost">Second</Button>
      <Input placeholder="Tab through controls" />
    </div>
  ),
}

export const ReducedMotion: Story = {
  render: () => <p className="rk-panel p-4 text-sm">Global CSS respects prefers-reduced-motion and collapses motion timing.</p>,
}

export const ScreenReaderStructure: Story = {
  render: () => <main aria-label="RuneKit preview region" className="rk-panel p-4 text-sm">Semantic containers and aria labels are included on navigation and stateful controls.</main>,
}

export const FocusTraversal: Story = {
  render: () => (
    <div className="space-y-2">
      <Button>Focus 1</Button>
      <Input placeholder="Focus 2" />
      <Button variant="node">Focus 3</Button>
    </div>
  ),
}
