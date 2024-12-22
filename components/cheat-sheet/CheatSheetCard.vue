<script setup lang="ts">
import type { CheatSheetItem } from '@prisma/client'

defineProps<{
  cheatSheetItem: CheatSheetItem
}>()
</script>

<template>
  <div
    class="flex items-center justify-center p-4 text-xl font-bold text-center text-gray-900 rounded-lg shadow-lg bg-primary"
  >
    {{ cheatSheetItem.title }}
  </div>
</template>
