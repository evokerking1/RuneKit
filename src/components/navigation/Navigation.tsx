import { cn } from '../../utils/cn'
import { Glyph } from '../primitives/Glyph'

type NavItem = {
  id: string
  label: string
  glyph:
    | 'system'
    | 'archive'
    | 'warning'
    | 'energy'
    | 'sync'
    | 'channel'
    | 'ritual'
    | 'observer'
    | 'construct'
}

export function Navigation({
  items,
  active,
  onSelect,
}: {
  items: NavItem[]
  active: string
  onSelect: (id: string) => void
}) {
  return (
    <nav aria-label="RuneKit sections" className="rk-panel rk-grid-lock p-2">
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {items.map((item) => {
          const isActive = item.id === active
          return (
            <li key={item.id}>
              <button
                type="button"
                className={cn(
                  'inline-flex w-full items-center gap-2 rounded-md border px-3 py-2 text-left text-xs uppercase tracking-[0.12em] transition-all',
                  isActive
                    ? 'border-secondary/80 bg-secondary/10 text-text rk-glow'
                    : 'border-border/70 bg-surface/50 text-muted hover:border-secondary/40 hover:text-text',
                )}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onSelect(item.id)}
              >
                <Glyph kind={item.glyph} />
                <span>{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
