module.exports = {
  purge: [],
  experimental: {
    extendedFontSizeScale: true,
  },
  theme: {
    fontFamily: {
      mono: ['var(--font-mono)'],
      body: ['var(--font-body)'],
      display: ['var(--font-display)'],
    },
    extend: {
      boxShadow: {
        'solid-primary': '0.3em 0.3em var(--color-primary)',
        'solid-theme-black': '0.3em 0.3em var(--theme-black)',
        'solid-theme-white': '0.3em 0.3em var(--theme-white)',
      },
      colors: {
        primary: 'var(--color-primary)',
        'theme-blue': 'var(--theme-blue)',
        'theme-black': 'var(--theme-black)',
        'theme-white': 'var(--theme-white)',
        'theme-purple': 'var(--theme-purple)',
        'theme-red': 'var(--theme-red)',
        'theme-pink': 'var(--theme-pink)',
        'theme-orange': 'var(--theme-orange)',
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
      gridColumnEnd: {
        '-1': '-1',
      },
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
        '1fr-11fr': '1fr 11fr',
        'auto auto': 'auto auto',
      },
      gridTemplateRows: {
        'footer-7': 'repeat(7, auto)',
        'project-6': 'repeat(6, auto)',
      },
      height: {
        'screen-40': '40vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      inset: {
        '8': '8rem',
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
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {},
  plugins: [],
}
