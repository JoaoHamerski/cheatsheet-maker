<script setup lang="ts">
import type { CheatSheetsWithItems } from '~/server/routes/cheat-sheets/index.get'

defineProps<{
  cheatSheet: CheatSheetsWithItems[number]
}>()
</script>

<template>
  <div
    class="flex flex-col group text-gray-300 rounded-lg shadow-lg bg-gray-800 overflow-hidden py-3 h-full"
  >
    <CheatSheetCardHeader :cheat-sheet="cheatSheet" />
    <CheatSheetCardBody
      class="grow"
      :cheat-sheet-items="cheatSheet.cheatSheetItems"
    />
    <CheatSheetCardFooter :cheat-sheet="cheatSheet" />
  </div>
</template>
