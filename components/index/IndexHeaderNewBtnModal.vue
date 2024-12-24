<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <AppModal v-model="open">
    <template #body> Olá mundo </template>
  </AppModal>
</template>
