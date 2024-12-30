<script setup lang="ts">
const modalOpen = ref(false)
</script>

<template>
  <div class="flex justify-between my-16 relative h-14">
    <IndexHeaderNewBtn @click="modalOpen = true" />
    <IndexHeaderSearch class="w-1/2 absolute left-1/2 -translate-x-1/2" />
    <AppButton
      v-tippy="{
        content: 'Settings',
        placement: 'bottom',
      }"
      color="gray"
      :icon="{ name: 'ph:gear-six', size: '1.35rem' }"
      variant="text"
    />
    <IndexHeaderNewModal v-model="modalOpen" />
  </div>
</template>
