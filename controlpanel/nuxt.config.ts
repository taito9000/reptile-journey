// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  nitro: {
    preset: "vercel",
    output: {
      // publicDir: process.env.ENV !== 'prod' ? '../public-dev' : '../public-prod'
      publicDir: "../public-dev",
    },
  },
  runtimeConfig: {
    public: {
      ApiKey: process.env.FIREBASE_APIKEY,
      AuthDomain: process.env.FIREBASE_AUTHDOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      StorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      MessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      AppId: process.env.FIREBASE_APP_ID,
      MeasurementId: process.env.FIREBASE_MEASUREMENTID,
    },
  },
});
