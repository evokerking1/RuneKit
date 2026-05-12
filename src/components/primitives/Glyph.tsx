import { cn } from '../../utils/cn'

type GlyphKind =
  | 'system'
  | 'archive'
  | 'warning'
  | 'energy'
  | 'sync'
  | 'channel'
  | 'ritual'
  | 'observer'
  | 'construct'

const paths: Record<GlyphKind, string> = {
  system: 'M6 6h12v12H6z M9 9h6v6H9z',
  archive: 'M5 7h14v10H5z M8 5h8',
  warning: 'M12 4l8 14H4z M12 9v4 M12 15h.01',
  energy: 'M10 4l-1 6h4l-1 10 3-8h-4l1-8z',
  sync: 'M7 8a5 5 0 0 1 8-2 M17 16a5 5 0 0 1-8 2 M5 9V5h4 M19 15v4h-4',
  channel: 'M5 6h4v12H5z M15 6h4v12h-4z M9 11h6v2H9z',
  ritual: 'M12 3l8 9-8 9-8-9z M12 7v10',
  observer: 'M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z M12 10a2 2 0 1 0 .01 0',
  construct: 'M12 3l7 4v10l-7 4-7-4V7z',
}

export function Glyph({
  kind,
  className,
}: {
  kind: GlyphKind
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-4 w-4 rk-glyph', className)}
    >
      <path d={paths[kind]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
