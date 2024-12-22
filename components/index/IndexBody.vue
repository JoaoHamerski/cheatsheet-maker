<script setup>
const { data: cheatSheets } = await useFetch('/api/cheat-sheets')
</script>

<template>
  <div class="grid grid-cols-5 gap-3">
    <CheatSheetCard
      v-for="cheatSheet in cheatSheets"
      :key="cheatSheet.id"
      :cheat-sheet="cheatSheet"
    />
  </div>
</template>
