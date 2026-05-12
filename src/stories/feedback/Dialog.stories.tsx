import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../components/primitives/Button'

const meta = {
  title: 'RuneKit/Feedback/Dialog',
  parameters: {
    docs: {
      description: {
        component: 'Feedback patterns use symbolic framing and explicit confirmation states. This story documents recommended treatment.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ConfirmationPattern: Story = {
  render: () => (
    <section className="rk-panel rk-frame max-w-md space-y-3 p-4">
      <h3 className="text-sm">Archive Seal Confirmation</h3>
      <p className="text-sm">This action will lock the active partition and revoke write access.</p>
      <div className="flex gap-2">
        <Button variant="danger">Seal</Button>
        <Button variant="ghost">Abort</Button>
      </div>
    </section>
  ),
}
