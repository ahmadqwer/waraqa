import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ورقة',
    title: 'الصفحة الرئيسية',
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'robots',
        name: 'robots',
        content: 'all'
      },
      {
        hid: 'googlebot',
        name: 'googlebot',
        content: 'all'
      },
      {
        hid: 'publisher',
        name: 'publisher',
        content: 'Mawdoo3'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Mawdoo3'
      },
      {
        hid: 'description',
        name: 'description',
        content: ' المنصة الاكبر في إنتاج المحتوى العربي الرقمي في العالم '
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Waraqa,ورقة,ورقه,تدقيق,مدقق,عمل مستقل,موظف مستقل,كاتب,كتّاب'
      },

      {
        hid: 'og:description',
        name: 'og:description',
        content: ' المنصة الاكبر في إنتاج المحتوى العربي الرقمي في العالم '
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/waraqa/favicon.ico' },
      {
        rel: 'canonical',
        href: 'http://13.37.164.215/waraqa/'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/styles.scss'],
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss']
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/Home', extensions: ['vue'] },
    { path: '~/components/Footer', extensions: ['vue'] }
  ],
  layoutTransition: 'layout',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    'nuxt-compress',
    '@nuxtjs/device'
  ],
  device: {
    refreshOnResize: true
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192
        },
        brotli: {
          threshold: 8192
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000
    }
  },
  router: {
    base: '/waraqa/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
