<template>
    <header class="w-full h-24">
      <div class="container px-2 h-full mx-auto flex items-center justify-between">
        <NuxtLink to="/">
          <h1 class="text-gray-800 sm:text-4xl text-xl font-bold">rodion gavrilov</h1>
        </NuxtLink>
        <nav>
          <ul class="flex space-x-8 text-lg font-bold">
            <li>
              <NuxtLink to="/blog" class="hover:text-gray-600">Blog</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
