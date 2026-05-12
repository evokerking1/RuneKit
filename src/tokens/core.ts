export const tokenCategories = [
  'color',
  'surface',
  'border',
  'radius',
  'spacing',
  'motion',
  'glow',
  'typography',
  'opacity',
  'shadow',
  'z-index',
] as const

export const componentLayers = [
  'base',
  'hover',
  'focus',
  'active',
  'disabled',
  'loading',
  'critical',
  'success',
  'warning',
] as const

export const spacingScale = {
  compact: '0.5rem',
  default: '0.75rem',
  expanded: '1rem',
} as const

export const motionScale = {
  instant: 0.08,
  fast: 0.14,
  normal: 0.22,
  slow: 0.4,
  ritual: 0.9,
} as const
