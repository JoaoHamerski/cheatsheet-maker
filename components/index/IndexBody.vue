<script setup lang="ts">
import type { CheatSheetsIndex } from '~/server/routes/api/cheat-sheets/index.get'

defineProps<{
  cheatSheets: CheatSheetsIndex
}>()
</script>

<template>
  <div class="grid grid-cols-5 gap-3">
    <CheatSheetCard
      v-for="cheatSheet in cheatSheets"
      :key="cheatSheet.uuid"
      :cheat-sheet="cheatSheet"
    />
  </div>
</template>
