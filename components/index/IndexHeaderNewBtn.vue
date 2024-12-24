<script setup lang="ts">
const modalOpen = ref(false)
</script>

<template>
  <div class="flex">
    <AppButton
      class="font-bold"
      label="NEW SHEET"
      :icon="{ name: 'ph:plus-circle-fill', size: '1.5rem' }"
      color="primary"
      animated
      @click="modalOpen = true"
    />
    <IndexHeaderNewBtnModal v-model="modalOpen" />
  </div>
</template>
