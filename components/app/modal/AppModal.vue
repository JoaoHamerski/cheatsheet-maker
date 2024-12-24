<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'

const MODAL_SIZES = {
  sm: 'max-w-sm',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
}

const MODAL_TRANSITIONS = {
  enter: 'duration-300 ease-out',
  enterFrom: 'opacity-0 scale-95',
  enterTo: 'opacity-100 scale-100',
  leave: 'duration-200 ease-in',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95',
}

interface AppModalProps {
  size?: keyof typeof MODAL_SIZES
}

const modelValue = defineModel<boolean>({ default: false })

defineEmits(['update:modelValue'])

withDefaults(defineProps<AppModalProps>(), {
  size: 'md',
})
</script>

<template>
  <TransitionRoot
    appear
    :show="modelValue"
    as="template"
  >
    <Dialog
      as="div"
      class="relative z-50"
      @close="$emit('update:modelValue', $event)"
    >
      <AppModalBackdrop />

      <div class="fixed inset-0 overflow-y-auto overflow-x-hidden">
        <div
          class="flex w-screen min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            v-bind="MODAL_TRANSITIONS"
          >
            <DialogPanel
              class="w-full transform overflow-hidden rounded-2xl bg-gray-300 p-5 text-left align-middle shadow-xl transition-all"
              :class="MODAL_SIZES[size]"
            >
              <DialogTitle
                v-if="$slots['title']"
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                <slot name="title" />
              </DialogTitle>

              <DialogDescription v-if="$slots['body']">
                <slot name="body"></slot>
              </DialogDescription>

              <slot name="footer"></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
