<script setup lang="ts">
const modalOpen = ref(false)
</script>

<template>
  <div class="flex">
    <button
      class="flex items-center gap-2 px-6 font-bold text-lg uppercase rounded-lg bg-gradient-to-r from-primary to-blue-500 hover:scale-[1.02] transition-all active:scale-100"
      @click="modalOpen = true"
    >
      <Icon
        name="ph:plus-circle-fill"
        size="1.5rem"
      />
      New sheet
    </button>
    <IndexHeaderNewBtnModal v-model="modalOpen" />
  </div>
</template>
