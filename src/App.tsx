import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from './components/composites/Card'
import { DataTable } from './components/data/Table'
import { Navigation } from './components/navigation/Navigation'
import { Button } from './components/primitives/Button'
import { Glyph } from './components/primitives/Glyph'
import { Input } from './components/primitives/Input'
import { useReducedMotionPreference } from './hooks/useReducedMotionPreference'
import { durations, runeMotion } from './motion/presets'
import { applyTheme, type ThemeName } from './tokens'

const navItems = [
  { id: 'archives', label: 'Archives', glyph: 'archive' as const },
  { id: 'channels', label: 'Channels', glyph: 'channel' as const },
  { id: 'constructs', label: 'Constructs', glyph: 'construct' as const },
]

const sampleRows = [
  { id: 'RK-01A7', node: 'Observer Gate', channel: 'Telemetry', status: 'ok' as const },
  { id: 'RK-02F1', node: 'Archive Prism', channel: 'Replication', status: 'sync' as const },
  { id: 'RK-05D0', node: 'Containment Lattice', channel: 'Safety', status: 'warning' as const },
]

function App() {
  const [theme, setTheme] = useState<ThemeName>('raidho')
  const [activeNav, setActiveNav] = useState('archives')
  const reducedMotion = useReducedMotionPreference()

  const variant = useMemo(() => (reducedMotion ? undefined : runeMotion.phaseIn), [reducedMotion])

  const setThemeAndApply = (nextTheme: ThemeName) => {
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <main className="rk-grid min-h-screen p-6 text-text">
      <motion.section
        initial={variant ? 'hidden' : false}
        animate={variant ? 'visible' : undefined}
        variants={variant}
        transition={{ duration: durations.normal }}
        className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[240px_1fr]"
      >
        <Navigation items={navItems} active={activeNav} onSelect={setActiveNav} />

        <section className="space-y-4">
          <header className="rk-panel rk-energy-surface flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <h1 className="text-lg">RuneKit Control Surface</h1>
              <p className="mt-1 text-sm">Theme variant: {theme}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={theme === 'raidho' ? 'ritual' : 'ghost'}
                onClick={() => setThemeAndApply('raidho')}
                glyph={<Glyph kind="ritual" />}
              >
                Raidho
              </Button>
              <Button
                variant={theme === 'inawaz' ? 'node' : 'ghost'}
                onClick={() => setThemeAndApply('inawaz')}
                glyph={<Glyph kind="system" />}
              >
                Inawaz
              </Button>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2">
            <Card title="Node Authorization" metadata="MODULE: SIGIL-778 / ACTIVE" status="success">
              Validate operator intent before opening privileged channels.
            </Card>
            <Card title="Containment Breach" metadata="MODULE: VAULT-211 / ALERT" status="critical">
              Critical archive partition reports structural drift across seals.
            </Card>
          </section>

          <section className="rk-panel space-y-3 p-4">
            <h2 className="text-sm">Channel Input</h2>
            <Input placeholder="Route command through selected channel" state="focus" />
          </section>

          <DataTable rows={sampleRows} />
        </section>
      </motion.section>
    </main>
  )
}

export default App
