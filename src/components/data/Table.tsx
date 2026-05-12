import { Glyph } from '../primitives/Glyph'

type Status = 'ok' | 'warning' | 'critical' | 'sync'

type ArchiveRow = {
  id: string
  node: string
  channel: string
  status: Status
}

const statusGlyph: Record<Status, 'energy' | 'warning' | 'sync'> = {
  ok: 'energy',
  warning: 'warning',
  critical: 'warning',
  sync: 'sync',
}

export function DataTable({ rows }: { rows: ArchiveRow[] }) {
  return (
    <div className="rk-panel overflow-hidden">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-surface/85 text-xs uppercase tracking-[0.14em] text-muted">
          <tr>
            <th className="px-3 py-2 font-medium">ID</th>
            <th className="px-3 py-2 font-medium">Node</th>
            <th className="px-3 py-2 font-medium">Channel</th>
            <th className="px-3 py-2 font-medium">State</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-border/55">
              <td className="rk-mono px-3 py-2 text-xs text-text">{row.id}</td>
              <td className="px-3 py-2 text-text">{row.node}</td>
              <td className="px-3 py-2 text-muted">{row.channel}</td>
              <td className="px-3 py-2">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted">
                  <Glyph kind={statusGlyph[row.status]} className={row.status === 'critical' ? 'text-warning' : ''} />
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
