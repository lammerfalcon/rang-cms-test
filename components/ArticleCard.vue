<template>
    <NuxtLink
      :to="'/' + slug"
      v-editable="article"
      class="w-full h-full text-left overflow-hidden"
    >
      <img
        :src="article.iamge + '/m/600x0'"
        class="w-full h-48 xl:h-72 object-cover pointer-events-none bg-stone-800"
      />
      <div class="p-4">
        <h2 class="text-2xl text-[#1d243d] font-bold mb-1">
          {{ article.title }}
        </h2>
        <div class="text-gray-600 mb-3">{{ article.author }}</div>
        <div class="line-clamp-4">
          {{ article.description }}
        </div>
      </div>
    </NuxtLink>
  </template>

  <script setup>
  defineProps({ article: Object, slug: String })
  </script>
