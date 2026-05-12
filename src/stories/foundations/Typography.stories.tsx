import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'RuneKit/Typography/Scale',
  parameters: {
    docs: {
      description: {
        component:
          'Headings are geometric uppercase with tracking. Body is readable. Numeric archives use monospaced rhythm.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Specimen: Story = {
  render: () => (
    <section className="rk-panel space-y-3 p-4">
      <h1 className="text-xl">Archive Command Index</h1>
      <h2 className="text-lg">Containment Channel</h2>
      <p className="text-sm">Body text remains legible while preserving atmosphere.</p>
      <p className="rk-mono text-xs">NODE RK-09F2 · RATE 18.240 · LATENCY 02.1MS</p>
    </section>
  ),
}
