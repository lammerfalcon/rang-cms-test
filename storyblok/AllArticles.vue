<template>
    <div class="py-24">
      <div class="container mx-auto flex flex-col w-full">
        <ArticleCard
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </template>

  <script setup>
  defineProps({ blok: Object })

  const articles = ref(null)
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'blog',
    is_startpage: false,
  })
  articles.value = data.stories
  </script>
