module.exports = {
  purge: [],
  experimental: {
    extendedFontSizeScale: true,
  },
  theme: {
    fontFamily: {
      mono: ['var(--font-mono)'],
      sans: ['var(--font-sans)'],
      body: ['var(--font-body)'],
      display: ['var(--font-display)'],
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
