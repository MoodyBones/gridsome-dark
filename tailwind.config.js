module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      danger: 'var(--color-danger)',
    },
    fontFamily: {
      mono: ['var(--font-mono)'],
      sans: ['var(--font-sans)'],
      body: ['var(--font-body)'],
      display: ['var(--font-display)'],
    },
    fontSize: {
      xs: ['.75rem', '16px'],
      sm: ['.875rem', '20px'],
      base: ['1rem', '24px'],
      lg: ['1.125rem', '28px'],
      xl: ['1.25rem', '32px'],
      '2xl': ['1.5rem', { lineHeight: '26px', letterSpacing: '-0.025em' }],
      '3xl': ['2rem', { lineHeight: '26px', letterSpacing: '-0.025em' }],
      '4xl': ['2.25rem', { lineHeight: '26px', letterSpacing: '-0.05em' }],
      '5xl': ['3rem', { lineHeight: '26px', letterSpacing: '-0.025em' }],
      '6xl': ['4rem', { lineHeight: '43px', letterSpacing: '-0.05em' }],
      '7xl': ['5rem', { lineHeight: '26px', letterSpacing: '-0.025em' }],
      '8xl': ['6rem', { lineHeight: '26px', letterSpacing: '-0.025em' }],
      '9xl': ['7rem', { lineHeight: '75px', letterSpacing: '-0.05em' }],
    },
    extend: {
      opacity: {
        '80': '.8',
        '90': '.9',
        '95': '.95',
        '99': '.99',
      },
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
