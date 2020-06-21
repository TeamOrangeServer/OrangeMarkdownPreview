/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'Orange Markdown Preview'
  },
  loading: false,
  plugins: [{ ssr: true, src: '@/plugins/icons.js' }],
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/vuetify'],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#1867c0',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c'
        }
      }
    }
  },
  build: {
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: '12'
            },
            useBuiltIns: 'usage',
            corejs: 3
          }
        ]
      ]
    }
  }
}
