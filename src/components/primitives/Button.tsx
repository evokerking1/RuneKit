import { Slot } from '@radix-ui/react-slot'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Glyph } from './Glyph'
import { cn } from '../../utils/cn'

export type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'ritual' | 'node'
export type ComponentState =
  | 'idle'
  | 'hover'
  | 'focus'
  | 'active'
  | 'disabled'
  | 'loading'
  | 'success'
  | 'warning'
  | 'critical'
export type Density = 'compact' | 'default' | 'expanded'

type RuneButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: ButtonVariant
  state?: ComponentState
  density?: Density
  glyph?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary/22 text-text border-primary/60 hover:bg-primary/32',
  ghost: 'bg-surface/35 text-text border-border/80 hover:bg-surface/60',
  danger: 'bg-warning/20 text-warning border-warning/65 hover:bg-warning/28',
  ritual: 'rk-energy-surface text-text border-secondary/70 hover:rk-glow',
  node: 'rk-node bg-surface/50 text-muted border-border/80 hover:text-text',
}

const densityClasses: Record<Density, string> = {
  compact: 'h-8 px-3 text-xs',
  default: 'h-10 px-4 text-sm',
  expanded: 'h-12 px-5 text-base',
}

export function Button({
  asChild,
  variant = 'primary',
  state = 'idle',
  density = 'default',
  glyph,
  className,
  children,
  disabled,
  ...props
}: RuneButtonProps) {
  const Component = asChild ? Slot : 'button'
  const isDisabled = disabled || state === 'disabled' || state === 'loading'

  return (
    <Component
      className={cn(
        'rk-phase-in inline-flex items-center justify-center gap-2 rounded-rk border font-medium uppercase tracking-[0.14em] transition-colors duration-150',
        variantClasses[variant],
        densityClasses[density],
        state === 'focus' && 'ring-2 ring-secondary/65 ring-offset-2 ring-offset-bg',
        state === 'active' && 'translate-y-px',
        state === 'success' && 'border-success/70 text-success',
        state === 'warning' && 'border-warning/70 text-warning',
        state === 'critical' && 'border-warning/90 text-warning rk-glow',
        isDisabled && 'cursor-not-allowed opacity-45',
        className,
      )}
      data-state={state}
      disabled={isDisabled}
      {...props}
    >
      {state === 'loading' ? <Glyph kind="sync" className="animate-rk-rotate" /> : glyph}
      <span>{children}</span>
    </Component>
  )
}
