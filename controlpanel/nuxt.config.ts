// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  nitro:{
    preset:"vercel",
    output:{
      // publicDir: process.env.ENV !== 'prod' ? '../public-dev' : '../public-prod'
      publicDir:'../public-dev'
    }
  }
})
