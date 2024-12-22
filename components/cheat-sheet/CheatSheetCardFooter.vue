<script setup lang="ts">
import type { CheatSheetsWithItems } from '~/server/api/cheat-sheets.get'

defineProps<{
  cheatSheet: CheatSheetsWithItems[number]
}>()
</script>

<template>
  <div class="mx-4">
    <AppBadge
      v-tippy="'Items on this sheet'"
      class="bg-blue-800"
      :icon="{
        name: 'ph:article-fill',
      }"
    >
      <span>{{ cheatSheet._count.cheatSheetItems }}</span>
    </AppBadge>
  </div>
</template>
