import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'RuneKit/Layouts/Frame',
  parameters: {
    docs: {
      description: {
        component: 'Layout demonstration: strong grid alignment, section framing, negative space, and explicit information zoning.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const OperationsLayout: Story = {
  render: () => (
    <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
      <aside className="rk-panel p-4">Sidebar Zone</aside>
      <main className="grid gap-4">
        <section className="rk-panel p-4">Primary Module</section>
        <section className="rk-panel p-4">Secondary Module</section>
      </main>
    </div>
  ),
}
