<script setup lang="ts">
defineProps<{
  cheatSheetUuid: string
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full py-5">
    <NuxtLink
      :to="{ path: `/cheat-sheets/${cheatSheetUuid}/new-cheat` }"
      class="flex flex-col gap-3 items-center justify-center h-full bg-red hover:text-white transition-colors"
    >
      <Icon
        name="ph:plus-circle-fill"
        size="3rem"
      />
      <span class="font-bold"> NEW ITEM </span>
    </NuxtLink>
    <div class="text-xs font-semibold uppercase text-gray-500">
      No items found
    </div>
  </div>
</template>
