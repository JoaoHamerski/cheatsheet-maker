<script setup lang="ts">
import type { CheatSheetItem } from '@prisma/client'

defineProps<{
  cheatSheetUuid: string
  cheatSheetItems: CheatSheetItem[]
}>()
</script>

<template>
  <div>
    <CheatSheetCardBodyList
      v-if="cheatSheetItems.length"
      :cheat-sheet-items="cheatSheetItems"
    />
    <CheatSheetCardBodyEmpty
      v-else
      :cheat-sheet-uuid="cheatSheetUuid"
    />
  </div>
</template>
