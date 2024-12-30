<script setup lang="ts">
const { data: cheatSheets } = await useFetch('/api/cheat-sheets')
</script>

<template>
  <div class="container mx-auto">
    <IndexHeader />
    <IndexBody :cheat-sheets="cheatSheets" />
  </div>
</template>
