/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      spacing: {
        'system-sm': 'var(--spacing-sm)',
        'system-md': 'var(--spacing-md)',
        'system-lg': 'var(--spacing-lg)',
        'system-xl': 'var(--spacing-xl)',
      },
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          elevated: 'var(--color-bg-elevated)',
          surface: 'var(--color-surface)',
          'surface-soft': 'var(--color-surface-soft)',
          text: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          border: 'var(--color-border)',
          accent: 'var(--color-accent)',
        },
      },
      maxWidth: {
        site: '90rem',
      },
    },
  },
  plugins: [],
}
