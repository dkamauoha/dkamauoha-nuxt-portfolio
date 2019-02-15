module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dkamauoha-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', }
    ]
  },
  plugins: ['~plugins/vue-scrollto.js', '~plugins/vue-parallaxy.js', '~plugins/font-awesome.js', { src: '~plugins/nuxt-swiper-plugin.js', ssr: false },],
  css: ['swiper/dist/css/swiper.css'],
  modules: ['bootstrap-vue/nuxt', 'nuxt-fontawesome', '@nuxtjs/axios'],
  serverMiddleware: [
    '~/api/contact.js',
    { path: '/api/test', handler: '~/api/test' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg|PNG|JPE?G)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      }
    ]
  }
}
