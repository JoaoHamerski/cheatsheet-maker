<script setup lang="ts">
import { TransitionChild } from '@headlessui/vue'
</script>

<template>
  <TransitionChild
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
  </TransitionChild>
</template>
