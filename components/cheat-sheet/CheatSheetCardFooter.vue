<script setup lang="ts">
import type { CheatSheetsIndex } from '~/server/routes/api/cheat-sheets/index.get'

defineProps<{
  cheatSheet: CheatSheetsIndex[number]
}>()
</script>

<template>
  <div class="mx-4">
    <AppBadge
      v-if="cheatSheet._count.cheatSheetItems"
      v-tippy="'Items on this sheet'"
      class="bg-slate-900"
      :icon="{
        name: 'ph:article-fill',
      }"
    >
      <span>{{ cheatSheet._count.cheatSheetItems }}</span>
    </AppBadge>
  </div>
</template>
