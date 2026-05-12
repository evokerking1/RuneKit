import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Glyph } from '../primitives/Glyph'
import { Button } from '../primitives/Button'

type CardStatus = 'idle' | 'success' | 'warning' | 'critical' | 'loading'

type RuneCardProps = {
  title: string
  metadata: string
  status?: CardStatus
  children: ReactNode
  actionLabel?: string
  onAction?: () => void
}

export function Card({
  title,
  metadata,
  status = 'idle',
  children,
  actionLabel = 'Inspect',
  onAction,
}: RuneCardProps) {
  return (
    <article
      className={cn(
        'rk-panel rk-frame rk-phase-in relative flex flex-col gap-4 p-4',
        status === 'loading' && 'animate-rk-pulse',
        status === 'critical' && 'border-warning/90',
      )}
      data-status={status}
    >
      <span className="absolute left-2 top-2 text-secondary/80" aria-hidden="true">
        <Glyph kind="ritual" />
      </span>
      <span className="absolute right-2 top-2 text-secondary/80" aria-hidden="true">
        <Glyph kind="system" />
      </span>

      <header className="flex items-center justify-between gap-3 pt-2">
        <div className="space-y-1">
          <h3 className="text-sm text-text">{title}</h3>
          <p className="rk-mono text-xs text-muted">{metadata}</p>
        </div>
        <Glyph
          kind={status === 'critical' ? 'warning' : status === 'success' ? 'energy' : 'archive'}
          className="h-5 w-5"
        />
      </header>

      <section className="text-sm text-muted">{children}</section>

      <footer className="flex justify-end">
        <Button
          variant="node"
          state={status === 'loading' ? 'loading' : status === 'critical' ? 'critical' : 'idle'}
          density="compact"
          onClick={onAction}
          glyph={<Glyph kind="observer" />}
        >
          {actionLabel}
        </Button>
      </footer>
    </article>
  )
}
