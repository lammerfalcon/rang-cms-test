// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ["@storyblok/nuxt", { accessToken: '49cjI8MlgPGCeHeslQtftgtt' }],
        '@nuxtjs/tailwindcss',
        '@hypernym/nuxt-anime'
    ],
    build: {
        transpile: ['fsevents']
    }
})
