// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss"],
  // https://github.com/harlan-zw/nuxt-seo-kit
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
      siteName: "Site",
      // siteDescription: 'Welcome to my awesome site!',
      // language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
});
