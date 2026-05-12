import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from '../../components/composites/Card'

const meta = {
  title: 'RuneKit/Composites/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Cards act as archived artifacts/modules with border frame, corner sigils, metadata hierarchy, and action region.',
      },
    },
  },
  args: {
    title: 'Archive Segment',
    metadata: 'NODE RK-100 · STABLE',
    children: 'Contained symbolic record payload.',
    status: 'idle',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const StatusStates: Story = {
  render: () => (
    <div className="grid gap-3 md:grid-cols-2">
      <Card title="Idle" metadata="RK-01" status="idle">Idle containment record.</Card>
      <Card title="Success" metadata="RK-02" status="success">Stable symbolic state.</Card>
      <Card title="Warning" metadata="RK-03" status="warning">Potential drift found.</Card>
      <Card title="Critical" metadata="RK-04" status="critical">Seal failure risk.</Card>
    </div>
  ),
}
