import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'RuneKit/Experimental/Signals',
  parameters: {
    docs: {
      description: {
        component: 'Experimental archive for future variants and signal overlays. Use to prototype new symbolic interaction motifs.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SignalBand: Story = {
  render: () => (
    <div className="rk-panel rk-scanline space-y-2 p-4">
      <p className="text-sm">Signal Track A · Stable</p>
      <p className="text-sm">Signal Track B · Intermittent</p>
      <p className="text-sm">Signal Track C · Pending calibration</p>
    </div>
  ),
}
