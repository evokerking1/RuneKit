import { inawazTokens } from './inawaz'
import { raidhoTokens } from './raidho'

export type ThemeName = 'raidho' | 'inawaz'

export const themes = {
  raidho: raidhoTokens,
  inawaz: inawazTokens,
} as const

export function applyTheme(theme: ThemeName) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.classList.remove('theme-raidho', 'theme-inawaz')
  root.classList.add(`theme-${theme}`)
}
