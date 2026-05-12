import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataTable } from '../../components/data/Table'

const rows = [
  { id: 'RK-01A7', node: 'Observer Gate', channel: 'Telemetry', status: 'ok' as const },
  { id: 'RK-02F1', node: 'Archive Prism', channel: 'Replication', status: 'sync' as const },
  { id: 'RK-05D0', node: 'Containment Lattice', channel: 'Safety', status: 'warning' as const },
  { id: 'RK-07C2', node: 'Vault Delta', channel: 'Integrity', status: 'critical' as const },
]

const meta = {
  title: 'RuneKit/Data Display/Table',
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component:
          'Archive-style data table with monospaced IDs, thin separators, status glyphs, and structured row rhythm without loud striping.',
      },
    },
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rows,
  },
}
