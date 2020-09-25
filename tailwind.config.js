module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
      ]
    },
  },
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      body: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xs: ['.75rem', '16px'],
      sm: ['.875rem', '20px'],
      base: ['1rem', '24px'],
      lg: ['1.125rem', '28px'],
      xl: ['1.25rem', '32px'],
      '2xl': ['1.5rem', '32px', , { letterSpacing: '-0.025em' }],
      '4xl': ['2.25rem', { lineHeight: '26px', letterSpacing: '-0.05em' }],
      '5xl': ['3rem', '32px', { letterSpacing: '-0.025em' }],
      '6xl': ['4rem', { lineHeight: '43px', letterSpacing: '-0.05em' }],
      '7xl': ['5rem', '32px', { letterSpacing: '-0.025em' }],
      '8xl': ['6rem', '32px', { letterSpacing: '-0.025em' }],
      '9xl': ['7rem', { lineHeight: '75px', letterSpacing: '-0.05em' }],
    },
    extend: {
      opacity: {
        '80': '.8',
        '90': '.9',
        '95': '.95',
        '99': '.99',
      },
    },
  },
  variants: {},
  plugins: [],
}
