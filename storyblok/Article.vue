<template>
    <div v-editable="blok">
      <img
        :src="blok.iamge + '/m/1600x0'"
        class="mx-auto w-3/4 object-cover mb-10"
      />
      <div class="container mx-auto mb-12 columns-2">
        <h1 class="text-4xl text-gray-800 font-bold mb-4">{{ blok.title }}</h1>
        <h2 class="text-2xl text-gray-500 font-bold mb-4">
          {{ blok.description }}
        </h2>
        <div v-html="resolvedRichText"></div>

        <p class="text-gray-600 max-w-xl my-3 text-[0.7rem]">Written by: <b>{{ blok.author }}</b></p>
      </div>
    </div>
  </template>

  <script setup>
  const props = defineProps({ blok: Object })

  const resolvedRichText = computed(() => renderRichText(props.blok.content))
  </script>
