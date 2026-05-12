import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../components/primitives/Button'
import { Glyph } from '../../components/primitives/Glyph'

const states = ['idle', 'hover', 'focus', 'active', 'disabled', 'loading', 'success', 'warning', 'critical'] as const
const densities = ['compact', 'default', 'expanded'] as const

const meta = {
  title: 'RuneKit/Primitives/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Includes all required states, density modes, and semantic variants (primary, ghost, danger, ritual, node). Labels are uppercase and glyph-first.',
      },
    },
  },
  args: {
    children: 'Execute',
    variant: 'primary',
    state: 'idle',
    density: 'default',
    glyph: <Glyph kind="system" />,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const StateMatrix: Story = {
  render: () => (
    <div className="grid gap-2 md:grid-cols-3">
      {states.map((state) => (
        <Button key={state} state={state} glyph={<Glyph kind="sync" />}>
          {state}
        </Button>
      ))}
    </div>
  ),
}

export const DensityModes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {densities.map((density) => (
        <Button key={density} density={density} variant="ritual" glyph={<Glyph kind="ritual" />}>
          {density}
        </Button>
      ))}
    </div>
  ),
}

export const VariantSpectrum: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ritual">Ritual</Button>
      <Button variant="node">Node</Button>
    </div>
  ),
}
