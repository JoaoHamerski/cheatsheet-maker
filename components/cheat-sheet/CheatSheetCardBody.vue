<script setup lang="ts">
import type { CheatSheetItem } from '@prisma/client'

defineProps<{
  cheatSheetItems: CheatSheetItem[]
}>()
</script>

<template>
  <div>
    <ul class="flex flex-col my-3">
      <li
        v-for="cheatSheetItem in cheatSheetItems"
        :key="cheatSheetItem.id"
        class="px-4 text-sm font-bold hover:bg-slate-800 active:bg-slate-700 py-2 transition-colors duration-100 cursor-pointer"
      >
        <div class="text-ellipsis text-nowrap overflow-hidden">
          {{ cheatSheetItem.title }}
        </div>
      </li>
    </ul>
  </div>
</template>
