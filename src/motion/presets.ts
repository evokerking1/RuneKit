import type { TargetAndTransition, VariantLabels } from 'framer-motion'
import { motionScale } from '../tokens/core'

export const runeMotion = {
  phaseIn: {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  collapse: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function withMotionPreference(
  reduced: boolean,
  animated: VariantLabels | TargetAndTransition,
  staticValue: VariantLabels | TargetAndTransition,
) {
  return reduced ? staticValue : animated
}

export const durations = {
  instant: motionScale.instant,
  fast: motionScale.fast,
  normal: motionScale.normal,
  slow: motionScale.slow,
  ritual: motionScale.ritual,
} as const
