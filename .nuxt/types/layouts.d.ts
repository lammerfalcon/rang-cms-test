import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/rodiongavrilov/WebstormProjects/rang-cms-test/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}