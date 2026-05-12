import type { Meta, StoryObj } from '@storybook/react-vite'

function Swatch({ name, token }: { name: string; token: string }) {
  return (
    <div className="rk-panel space-y-2 p-3">
      <div className="h-14 rounded border border-border/70" style={{ background: token }} />
      <p className="text-xs uppercase tracking-[0.12em] text-text">{name}</p>
      <p className="rk-mono text-xs">{token}</p>
    </div>
  )
}

const meta = {
  title: 'RuneKit/Foundations/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'Token reference for Raidho/Inawaz color roles: bg, surface, primary, secondary, success, warning, text, muted, border.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Palette: Story = {
  render: () => (
    <div className="grid gap-3 md:grid-cols-3">
      <Swatch name="Background" token="rgb(var(--rk-bg))" />
      <Swatch name="Surface" token="rgb(var(--rk-surface))" />
      <Swatch name="Primary" token="rgb(var(--rk-primary))" />
      <Swatch name="Secondary" token="rgb(var(--rk-secondary))" />
      <Swatch name="Success" token="rgb(var(--rk-success))" />
      <Swatch name="Warning" token="rgb(var(--rk-warning))" />
      <Swatch name="Text" token="rgb(var(--rk-text))" />
      <Swatch name="Muted" token="rgb(var(--rk-muted))" />
      <Swatch name="Border" token="rgb(var(--rk-border))" />
    </div>
  ),
}
