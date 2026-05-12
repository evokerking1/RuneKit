import type { Meta, StoryObj } from '@storybook/react-vite'
import { motion } from 'framer-motion'
import { durations, runeMotion } from '../../motion/presets'

const meta = {
  title: 'RuneKit/Motion/Transitions',
  parameters: {
    docs: {
      description: {
        component:
          'Motion metadata: phase-in(entry), pulse(activity), drift(ambient), rotate(live), trace(flow), bloom(focus), collapse(dismiss). Includes reduced-motion fallback in global CSS.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const MotionSamples: Story = {
  render: () => (
    <div className="grid gap-3 md:grid-cols-3">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={runeMotion.phaseIn}
        transition={{ duration: durations.normal }}
        className="rk-panel p-4 text-sm"
      >
        Phase In (220ms)
      </motion.div>
      <div className="rk-panel animate-rk-pulse p-4 text-sm">Pulse</div>
      <div className="rk-panel animate-rk-drift p-4 text-sm">Drift</div>
    </div>
  ),
}
