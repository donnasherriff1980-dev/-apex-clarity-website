/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: { '1': 'hsl(var(--chart-1))', '2': 'hsl(var(--chart-2))', '3': 'hsl(var(--chart-3))', '4': 'hsl(var(--chart-4))', '5': 'hsl(var(--chart-5))' },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Batch 2 — same rendered colours as before, now sourced from the
        // Apex semantic tokens in src/index.css via Tailwind's documented
        // CSS-variable pattern (rgb(var(--x) / <alpha-value>)), so opacity
        // utilities like bg-brand-dark/95 and bg-gold/90 keep working exactly
        // as they do today.
        brand: {
          dark: 'rgb(var(--apex-surface-dark-rgb) / <alpha-value>)',
          mid: 'rgb(var(--apex-surface-dark-mid-rgb) / <alpha-value>)',
          light: 'rgb(var(--apex-surface-light-rgb) / <alpha-value>)',
        },
        gold: 'rgb(var(--apex-brand-primary-rgb) / <alpha-value>)',

        // Batch 3 — Lucy-led Day/Night brand tokens. Values live in
        // src/index.css (:root = Night, [data-theme="light"] = Day),
        // sourced from the Apex Clarity PLATFORM's own tokens. Additive to
        // the brand/gold keys above — pages not yet migrated this batch
        // keep rendering with brand.dark/gold exactly as before.
        canvas: 'rgb(var(--apex-canvas-rgb) / <alpha-value>)',
        surface: 'rgb(var(--apex-surface-rgb) / <alpha-value>)',
        'surface-subtle': 'var(--apex-surface-subtle)',
        'surface-raised': 'rgb(var(--apex-surface-raised-rgb) / <alpha-value>)',
        ink: 'rgb(var(--apex-text-primary-rgb) / <alpha-value>)',
        'ink-secondary': 'rgb(var(--apex-text-secondary-rgb) / <alpha-value>)',
        teal: 'rgb(var(--apex-teal-rgb) / <alpha-value>)',
        champagne: 'rgb(var(--apex-lucy-warm-rgb) / <alpha-value>)',
        hairline: 'rgb(var(--apex-border-rgb) / <alpha-value>)',

        // Batch 3 remediation — fixed (non-theme-flipping) contrast pairs for
        // surfaces that declare their own dark/light context explicitly
        // (Navbar's transparent state). See HeaderSurfaceContext.jsx.
        'ink-on-dark': '#E9F4F1',
        'ink-on-light': '#1A292E',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-in-up': { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'slide-in-right': { from: { opacity: '0', transform: 'translateX(40px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
