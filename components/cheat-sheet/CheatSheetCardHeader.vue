<script setup lang="ts">
import type { CheatSheetsIndex } from '~/server/routes/api/cheat-sheets/index.get'

defineProps<{
  cheatSheet: CheatSheetsIndex[number]
}>()
</script>

<template>
  <div class="px-4 pb-2 w-full border-b-2 border-slate-700">
    <div class="font-bold flex items-center gap-2">
      <Icon name="ph:scroll-fill"></Icon>
      <span class="text-white">{{ cheatSheet.title }}</span>
    </div>
    <span
      v-tippy="'Sheet alias'"
      class="text-sm text-gray-400"
      >{{ cheatSheet.alias }}</span
    >
  </div>
</template>
