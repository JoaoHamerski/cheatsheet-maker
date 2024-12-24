<script setup lang="ts">
import type { CheatSheetItem } from '@prisma/client'
import { Tippy } from 'vue-tippy'

defineProps<{
  cheatSheetItem: CheatSheetItem
}>()

const itemText = ref<HTMLElement | null>(null)

const isTruncated = computed(() => {
  if (!itemText.value) {
    return false
  }

  return itemText.value.scrollWidth > itemText.value.clientWidth
})
</script>

<template>
  <li
    class="px-4 text-sm font-bold hover:bg-slate-700 active:bg-slate-600 py-2 transition-colors duration-100 cursor-pointer"
  >
    <Tippy
      v-if="isTruncated"
      to="parent"
      placement="top"
      :delay="[500, 0]"
    >
      {{ cheatSheetItem.title }}
    </Tippy>

    <div
      ref="itemText"
      class="text-ellipsis text-nowrap overflow-hidden"
    >
      {{ cheatSheetItem.title }}
    </div>
  </li>
</template>
