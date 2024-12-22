<script setup lang="ts">
import type { CheatSheetItem } from '@prisma/client'

defineProps<{
  cheatSheetItems: CheatSheetItem[]
}>()
</script>

<template>
  <ul class="flex flex-col my-3">
    <CheatSheetCardBodyListItem
      v-for="cheatSheetItem in cheatSheetItems"
      :key="cheatSheetItem.id"
      :cheat-sheet-item="cheatSheetItem"
    />
  </ul>
</template>
