<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <AppButton
      label="Go back to home"
      class="font-bold"
      animated
    ></AppButton>
  </div>
</template>
