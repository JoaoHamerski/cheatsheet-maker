<script setup lang="ts">
import type { CheatSheetsIndex } from '~/server/routes/api/cheat-sheets/index.get'

defineProps<{
  cheatSheet: CheatSheetsIndex[number]
}>()
</script>

<template>
  <div
    class="flex flex-col group text-gray-300 rounded-lg shadow-lg bg-gray-800 overflow-hidden py-3 h-full"
  >
    <CheatSheetCardHeader :cheat-sheet="cheatSheet" />
    <CheatSheetCardBody
      class="grow"
      :cheat-sheet-uuid="cheatSheet.uuid"
      :cheat-sheet-items="cheatSheet.cheatSheetItems"
    />
    <CheatSheetCardFooter :cheat-sheet="cheatSheet" />
  </div>
</template>
