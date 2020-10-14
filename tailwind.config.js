module.exports = {
  purge: [],
  experimental: {
    applyComplexClasses: true,
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
        primary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-primary), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-primary), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--color-primary))`
        },
        'theme-blue': ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-blue), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-blue), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--theme-blue))`
        },
        'theme-black': ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-black), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-black), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--theme-black))`
        },
        'theme-white': ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-white), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-white), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--theme-white))`
        },
        'theme-purple': ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-purple), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-purple), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--theme-purple))`
        },
        'theme-red': ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-red), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-red), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--theme-red))`
        },
        'theme-pink': ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-pink), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-pink), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--theme-pink))`
        },
        'theme-orange': ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-orange), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-orange), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--theme-orange))`
        },
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
        'screen-60': '60vh',
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
