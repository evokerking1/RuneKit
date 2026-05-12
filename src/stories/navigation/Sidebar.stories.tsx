import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navigation } from '../../components/navigation/Navigation'

const items = [
  { id: 'archives', label: 'Archives', glyph: 'archive' as const },
  { id: 'signals', label: 'Signals', glyph: 'channel' as const },
  { id: 'observers', label: 'Observers', glyph: 'observer' as const },
]

const meta = {
  title: 'RuneKit/Navigation/Sidebar',
  parameters: {
    docs: {
      description: {
        component: 'Navigation is symbolic: semantic icon per item, hover energy traces, and active lock-in illumination.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function InteractiveNavigationStory() {
  const [active, setActive] = useState('archives')
  return <Navigation items={items} active={active} onSelect={setActive} />
}

export const Interactive: Story = {
  render: () => <InteractiveNavigationStory />,
}
