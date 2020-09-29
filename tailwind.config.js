module.exports = {
  purge: [],
  theme: {
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
      xl: ['1.25rem', '24px'], //faq questions
      '2xl': ['1.5rem', { lineHeight: '26px', letterSpacing: '-0.025em' }],
      '3xl': ['2rem', { lineHeight: '26px', letterSpacing: '-0.025em' }], //faq questions md
      '4xl': ['2.25rem', { lineHeight: '40px', letterSpacing: '0' }],
      '5xl': ['3rem', { lineHeight: '45px', letterSpacing: '-0.025em' }],
      '6xl': ['4rem', { lineHeight: '63px', letterSpacing: '-0.05em' }],
      '7xl': ['5rem', { lineHeight: '60px', letterSpacing: '-0.025em' }],
      '8xl': ['6rem', { lineHeight: '26px', letterSpacing: '-0.025em' }],
      '9xl': ['7rem', { lineHeight: '75px', letterSpacing: '-0.05em' }],
    },
    extend: {
      boxShadow: {
        'solid-primary': '0.25em 0.25em var(--color-primary)',
        'solid-black': '0.3em 0.3em black',
        'solid-white': '0.25em 0.25em white',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        background: 'var(--color-background)',
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
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
        '1fr-11fr': '1fr 11fr',
        'auto auto': 'auto auto',
      },
      opacity: {
        '80': '.8',
        '90': '.9',
        '95': '.95',
        '99': '.99',
      },
      width: {
        'min-content': 'min-content',
        'max-content': 'max-content',
      },
    },
  },
  variants: {},
  plugins: [],
}
