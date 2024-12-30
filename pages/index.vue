<script setup lang="ts">
import type { CheatSheetsIndex } from '~/server/routes/api/cheat-sheets/index.get'

const { data: cheatSheets } =
  await useFetch<CheatSheetsIndex>('/api/cheat-sheets')
</script>

<template>
  <div class="container mx-auto">
    <IndexHeader />
    <IndexBody
      v-if="cheatSheets"
      :cheat-sheets="cheatSheets"
    />
  </div>
</template>
