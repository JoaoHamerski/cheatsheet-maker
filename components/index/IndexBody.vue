<script setup>
const { data: items } = await useFetch('/api/cheat-sheet-items')
</script>

<template>
  <div class="grid grid-cols-5 gap-3">
    <CheatSheetCard
      v-for="item in items"
      :key="item.id"
      :cheat-sheet-item="item"
    />
  </div>
</template>
