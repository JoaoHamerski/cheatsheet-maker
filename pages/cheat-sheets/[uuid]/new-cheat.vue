<script setup lang="ts">
import type { CheatSheet } from '@prisma/client'

const route = useRoute()

const { data: cheatSheet } = await useFetch<CheatSheet>(
  `/api/cheat-sheets/${route.params.uuid}`,
)

if (!cheatSheet.value) {
  throw createError({
    statusCode: 404,
  })
}
</script>

<template>
  <div>
    <NewCheatHeader :cheat-sheet="cheatSheet!" />
  </div>
</template>
