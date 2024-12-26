<script setup lang="ts">
import type { Icon } from '#build/components'
import type { InputHTMLAttributes } from 'vue'

interface AppInputProps {
  id?: string
  name: string
  label?: string
  placeholder?: string
  icon?: InstanceType<typeof Icon>['$props']
  pt?: InputHTMLAttributes
}

const modelValue = defineModel<string | number>()

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<AppInputProps>(), {
  id: '',
  label: '',
  placeholder: '',
  icon: undefined,
  kbd: undefined,
  pt: undefined,
})

const inputId = computed(() => props.name ?? props.id)

const onInput = (event: Event) => {
  const element = event.target as HTMLInputElement

  emit('update:modelValue', element.value)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label
      :for="name"
      class="text-gray-300 self inline font-semibold w-fit"
      >{{ label }}</label
    >

    <label
      :for="name"
      class="bg-[rgb(var(--input-bg))] rounded-md w-full px-4 py-3 focus-within:outline focus-within:outline-3 focus-within:outline-primary text-gray-300 flex items-center gap-2"
    >
      <Icon
        v-if="icon"
        v-bind="icon"
      />
      <input
        :id="inputId"
        type="text"
        class="bg-transparent text-gray-300 focus:outline-none w-full"
        :placeholder="placeholder"
        :name="name"
        :value="modelValue"
        v-bind="pt"
        @input="onInput"
      />
      <div v-if="$slots['append']">
        <slot name="append"></slot>
      </div>
    </label>
  </div>
</template>
