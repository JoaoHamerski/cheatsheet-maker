<script setup lang="ts">
import type { Icon } from '#build/components'

defineProps<{
  icon?: InstanceType<typeof Icon>['$props']
  hasIcon?: boolean
}>()
</script>

<template>
  <span
    class="rounded-full text-sm px-2 font-bold"
    :class="{
      'flex items-center w-fit gap-2': !!icon,
    }"
  >
    <Icon
      v-if="icon"
      v-bind="icon"
    />
    <slot />
  </span>
</template>
