import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Glyph } from './Glyph'

type ComponentState =
  | 'idle'
  | 'hover'
  | 'focus'
  | 'active'
  | 'disabled'
  | 'loading'
  | 'success'
  | 'warning'
  | 'critical'

type Density = 'compact' | 'default' | 'expanded'

type RuneInputProps = InputHTMLAttributes<HTMLInputElement> & {
  state?: ComponentState
  density?: Density
  glyph?: ReactNode
  invalid?: boolean
}

const densityClasses: Record<Density, string> = {
  compact: 'h-9 text-xs px-2.5',
  default: 'h-10 text-sm px-3',
  expanded: 'h-12 text-base px-4',
}

export function Input({
  className,
  state = 'idle',
  density = 'default',
  glyph,
  invalid,
  disabled,
  ...props
}: RuneInputProps) {
  const isInvalid = invalid || state === 'critical' || state === 'warning'

  return (
    <label
      className={cn(
        'rk-panel inline-flex w-full items-center gap-2 border px-2 text-text transition-shadow',
        densityClasses[density],
        state === 'focus' && 'rk-glow',
        isInvalid && 'border-warning/80 text-warning',
        disabled && 'opacity-50',
      )}
      data-state={state}
    >
      {glyph ?? <Glyph kind="channel" className="text-secondary" />}
      <input
        className={cn(
          'w-full bg-transparent outline-none placeholder:text-muted/70',
          isInvalid && 'placeholder:text-warning/70',
          className,
        )}
        aria-invalid={isInvalid}
        disabled={disabled || state === 'disabled'}
        {...props}
      />
    </label>
  )
}
