import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/rodiongavrilov/WebstormProjects/rang-cms-test/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}