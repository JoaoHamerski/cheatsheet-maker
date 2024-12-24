<script setup lang="ts">
import type { Icon } from '#build/components'

const COLOR_CLASSES = {
  primary: 'bg-primary hover:bg-blue-500',
  success: 'bg-success hover:bg-green-500',
}

interface AppButtonProps {
  label: string
  color?: keyof typeof COLOR_CLASSES
  icon?: InstanceType<typeof Icon>['$props']
  disabled?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  color: 'primary',
  icon: undefined,
  disabled: false,
  animated: false,
})

const classes = computed(() => [
  COLOR_CLASSES[props.color],
  {
    'hover:scale-[1.02] active:scale-100 ': props.animated,
  },
])
</script>

<template>
  <button
    class="px-4 py-2 transition-all rounded-lg flex items-center gap-3 shadow"
    :class="classes"
  >
    <Icon
      v-if="icon"
      v-bind="icon"
    />
    <span>{{ label }}</span>
  </button>
</template>
