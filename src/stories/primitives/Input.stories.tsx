import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../../components/primitives/Input'

const meta = {
  title: 'RuneKit/Primitives/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Inputs are channel-like with illuminated borders, focus bloom, and fractured invalid semantics via warning states.',
      },
    },
  },
  args: {
    placeholder: 'Enter channel command',
    state: 'idle',
    density: 'default',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="space-y-2">
      <Input state="idle" placeholder="idle" />
      <Input state="focus" placeholder="focus" />
      <Input state="warning" placeholder="warning" />
      <Input state="critical" placeholder="critical" />
      <Input state="disabled" placeholder="disabled" />
    </div>
  ),
}

export const DensityModes: Story = {
  render: () => (
    <div className="space-y-2">
      <Input density="compact" placeholder="compact" />
      <Input density="default" placeholder="default" />
      <Input density="expanded" placeholder="expanded" />
    </div>
  ),
}
