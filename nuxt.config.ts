// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css : [
    "~/assets/css/main.scss",
  ], 
  ui: {
    global: true,
    icons: ['mdi'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Ideacube',
    }
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    'nuxt-typed-router',
  ],
  components: true,
  typescript: {
    typeCheck: true
  },
  devServer: {
    host: '192.168.1.104',
    port: 5173
  },
})

/** Might be used in the future
 *  https://nuxt.com/modules/security - For file transfer and other things
 *  https://nuxt.com/modules/swiper - Swiping library
 *  
 */
