import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--rk-bg) / <alpha-value>)',
        surface: 'rgb(var(--rk-surface) / <alpha-value>)',
        primary: 'rgb(var(--rk-primary) / <alpha-value>)',
        secondary: 'rgb(var(--rk-secondary) / <alpha-value>)',
        success: 'rgb(var(--rk-success) / <alpha-value>)',
        warning: 'rgb(var(--rk-warning) / <alpha-value>)',
        text: 'rgb(var(--rk-text) / <alpha-value>)',
        muted: 'rgb(var(--rk-muted) / <alpha-value>)',
      },
      spacing: {
        'rk-1': '0.25rem',
        'rk-2': '0.5rem',
        'rk-3': '0.75rem',
        'rk-4': '1rem',
        'rk-6': '1.5rem',
        'rk-8': '2rem',
      },
      borderRadius: {
        rk: 'var(--rk-radius)',
      },
      animation: {
        'rk-phase-in': 'rk-phase-in var(--rk-time-normal) var(--rk-ease-standard)',
        'rk-pulse': 'rk-pulse 1.8s ease-in-out infinite',
        'rk-drift': 'rk-drift 8s ease-in-out infinite',
        'rk-rotate': 'rk-rotate 4s linear infinite',
        'rk-trace': 'rk-trace 1.4s ease-in-out infinite',
        'rk-bloom': 'rk-bloom var(--rk-time-fast) var(--rk-ease-standard)',
        'rk-collapse': 'rk-collapse var(--rk-time-fast) var(--rk-ease-standard)',
      },
      keyframes: {
        'rk-phase-in': {
          from: { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'rk-pulse': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        'rk-drift': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'rk-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'rk-trace': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        'rk-bloom': {
          from: { boxShadow: '0 0 0 0 rgb(var(--rk-primary) / 0.0)' },
          to: { boxShadow: '0 0 0.9rem 0.08rem rgb(var(--rk-primary) / var(--rk-glow-strength))' },
        },
        'rk-collapse': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.96)' },
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addUtilities({
        '.rk-grid': {
          backgroundImage:
            'linear-gradient(to right, rgb(var(--rk-muted) / 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--rk-muted) / 0.14) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        },
        '.rk-glow': {
          boxShadow: '0 0 0.9rem 0.08rem rgb(var(--rk-primary) / var(--rk-glow-strength))',
        },
        '.rk-border': {
          borderColor: 'rgb(var(--rk-border) / 0.85)',
        },
        '.rk-glyph': {
          stroke: 'rgb(var(--rk-primary) / 1)',
          strokeWidth: '1.6',
          fill: 'none',
        },
        '.rk-phase-in': {
          animation: 'rk-phase-in var(--rk-time-normal) var(--rk-ease-standard)',
        },
        '.rk-scanline': {
          backgroundImage:
            'linear-gradient(180deg, rgb(var(--rk-secondary) / 0) 0%, rgb(var(--rk-secondary) / 0.16) 50%, rgb(var(--rk-secondary) / 0) 100%)',
          backgroundSize: '100% 10px',
        },
      })

      addComponents({
        '.rk-panel': {
          borderRadius: 'var(--rk-radius)',
          border: '1px solid rgb(var(--rk-border) / 0.9)',
          background: 'rgb(var(--rk-surface) / 0.75)',
          backdropFilter: 'blur(var(--rk-blur))',
        },
        '.rk-surface': {
          background: 'linear-gradient(180deg, rgb(var(--rk-surface) / 0.96), rgb(var(--rk-surface) / 0.72))',
        },
        '.rk-node': {
          borderRadius: '6px',
          border: '1px solid rgb(var(--rk-border) / 1)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        },
        '.rk-frame': {
          position: 'relative',
          border: '1px solid rgb(var(--rk-border) / 0.8)',
        },
        '.rk-frame::before': {
          content: '""',
          position: 'absolute',
          inset: '0.35rem',
          border: '1px solid rgb(var(--rk-primary) / 0.3)',
          pointerEvents: 'none',
        },
        '.rk-sigil-border': {
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'rgb(var(--rk-primary) / 0.65)',
        },
        '.rk-energy-surface': {
          background:
            'radial-gradient(circle at 50% 0%, rgb(var(--rk-secondary) / 0.18), transparent 60%), linear-gradient(180deg, rgb(var(--rk-surface) / 0.95), rgb(var(--rk-surface) / 0.68))',
        },
        '.rk-panel-ops': {
          border: '1px solid rgb(var(--rk-border) / 1)',
          background: 'linear-gradient(180deg, rgb(var(--rk-surface) / 1), rgb(var(--rk-surface) / 0.94))',
        },
        '.rk-grid-lock': {
          backgroundImage:
            'linear-gradient(to right, rgb(var(--rk-secondary) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--rk-secondary) / 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        },
      })
    }),
  ],
}
