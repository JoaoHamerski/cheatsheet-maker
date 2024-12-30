<script setup lang="ts">
import type { CheatSheet } from '@prisma/client'

defineProps<{
  cheatSheet: CheatSheet
}>()
</script>

<template>
  <div>
    <h1>{{ cheatSheet }}</h1>
  </div>
</template>
