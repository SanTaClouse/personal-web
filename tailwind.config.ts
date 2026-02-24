import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bgPrimary:     '#1A1210',
          bgSecondary:   '#2C1F1A',
          bgDeep:        '#0D0A09',
          border:        '#4A3428',
          gold:          '#C9963A',
          goldDark:      '#8B6A28',
          rose:          '#D4607A',
          textPrimary:   '#F5EDE3',
          textSecondary: '#B8A99A',
          cream:         '#FDF6EE',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:     ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono:     ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      fontSize: {
        hero:    ['4.5rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        display: ['3rem',      { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        title:   ['2rem',      { lineHeight: '1.2'  }],
        body:    ['1.0625rem', { lineHeight: '1.7'  }],
        label:   ['0.75rem',   { lineHeight: '1',    letterSpacing: '0.1em'  }],
      },
      maxWidth: {
        content: '72rem', // 1152px = max-w-6xl
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to bottom, rgba(26,18,16,0.3) 0%, rgba(26,18,16,0.85) 100%)',
        'hero-overlay-strong': 'linear-gradient(to bottom, rgba(26,18,16,0.5) 0%, rgba(26,18,16,0.92) 100%)',
      },
      boxShadow: {
        gold: '0 8px 32px rgba(201,150,58,0.15)',
        'gold-lg': '0 16px 48px rgba(201,150,58,0.2)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}

export default config
