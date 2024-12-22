<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="px-4 py-2 font-bold w-full flex items-center gap-2 text-white border-b-2 border-blue-900"
  >
    <Icon name="ph:scroll-fill"></Icon>
    <span>{{ title }}</span>
  </div>
</template>
