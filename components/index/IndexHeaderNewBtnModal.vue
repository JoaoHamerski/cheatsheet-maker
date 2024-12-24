<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <AppModal v-model="open">
    <template #body>
      <AppInput
        label="E-mail"
        name="email"
        placeholder="Digite seu email..."
      />
    </template>
  </AppModal>
</template>
