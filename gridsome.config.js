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

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

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
  chainWebpack: (config) => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap((options) => {
        options.plugins.unshift(
          ...[
            require('postcss-import'),
            require('postcss-nested'),
            require('tailwindcss'),
          ]
        )

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(
            ...[
              require('@fullhuman/postcss-purgecss')({
                content: ['src/assets/**/*.css', 'src/**/*.vue', 'src/**/*.js'],
                extractors: [
                  {
                    extractor: TailwindExtractor,
                    extensions: ['css', 'vue', 'js'],
                  },
                ],
                whitelist: ['svg-inline--fa'],
                whitelistPatterns: [/shiki/, /fa-$/],
              }),
            ]
          )
        }
        return options
      })
  },
}
