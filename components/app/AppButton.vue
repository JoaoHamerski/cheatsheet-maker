<script setup lang="ts">
import type { Icon } from '#build/components'

const COLOR_CLASSES = {
  primary: 'bg-primary hover:bg-blue-500',
  success: 'bg-success hover:bg-green-400',
  gray: 'bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-gray-300',
}

interface AppButtonProps {
  label?: string
  color?: keyof typeof COLOR_CLASSES
  icon?: InstanceType<typeof Icon>['$props']
  disabled?: boolean
  animated?: boolean
  block?: boolean
  variant?: 'text' | 'outline'
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  label: '',
  color: 'primary',
  icon: undefined,
  disabled: false,
  animated: false,
  default: false,
  variant: undefined,
})

const classes = computed(() => [
  COLOR_CLASSES[props.color],
  {
    'hover:scale-[1.02] active:scale-100 ': props.animated,
    'justify-center w-full': props.block,
    'bg-transparent': props.variant === 'text',
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
    <span v-if="label">{{ label }}</span>
  </button>
</template>
