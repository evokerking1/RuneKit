import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'RuneKit variant',
      defaultValue: 'raidho',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'raidho', title: 'Raidho' },
          { value: 'inawaz', title: 'Inawaz' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'raidho' | 'inawaz'
      document.documentElement.dataset.theme = theme
      document.body.className = `theme-${theme}`

      return (
        <div className="min-h-screen bg-bg p-6 text-text">
          <div className="mx-auto max-w-6xl space-y-4">
            <Story />
          </div>
        </div>
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'runekit',
      values: [{ name: 'runekit', value: '#070b14' }],
    },
    a11y: {
      test: 'error',
    },
    docs: {
      description: {
        component:
          'RuneKit stories document symbolic component semantics, variant behavior, motion language, and token usage.',
      },
    },
  },
}

export default preview
