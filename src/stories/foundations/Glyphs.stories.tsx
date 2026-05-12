import type { Meta, StoryObj } from '@storybook/react-vite'
import { Glyph } from '../../components/primitives/Glyph'

const kinds = ['system', 'archive', 'warning', 'energy', 'sync', 'channel', 'ritual', 'observer', 'construct'] as const

const meta = {
  title: 'RuneKit/Glyphs/Catalog',
  parameters: {
    docs: {
      description: {
        component: 'Glyphs are semantic, not decorative. Categories: system, archive, warning, energy, sync, channel, ritual, observer, construct.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Catalog: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {kinds.map((kind) => (
        <div key={kind} className="rk-panel flex items-center gap-2 p-3 text-xs uppercase tracking-[0.12em]">
          <Glyph kind={kind} className="h-5 w-5" />
          {kind}
        </div>
      ))}
    </div>
  ),
}
