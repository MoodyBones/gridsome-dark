// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const theme = require('./src/data/theme.json')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')       

const postcssPlugins = [ tailwind(), autoprefixer() ]

module.exports = {
  siteName: theme.site_name,
  icon: './src/favicon.svg',
  css: {
    loaderOptions: {
          postcss: {
            plugins: postcssPlugins,
        },
    },
},
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'projects/**/*.md',
      },
    },
  ],
  templates: {
    Project: '/project/:year/:title',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  transformers: {
    remark: {
      plugins: [
        [
          'gridsome-plugin-remark-shiki',
          { theme: 'Material-Theme-Palenight', skipInline: true },
        ],
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
}
