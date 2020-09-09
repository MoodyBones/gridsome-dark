// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const theme = require('./src/data/theme.json')
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production')
  postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: theme.site_name,
  icon: './src/my-icon.svg',
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
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [],
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
