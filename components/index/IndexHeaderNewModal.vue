<script setup lang="ts">
import type { FetchError } from 'ofetch'

const open = ref(false)

const form = ref({
  sheet_title: '',
})

const submit = async () => {
  try {
    await $fetch('/cheat-sheets/create', {
      method: 'POST',
      body: form.value,
    })
  } catch (err) {
    const error = err as FetchError

    console.log(error.data)
  }
}
</script>

<template>
  <AppModal v-model="open">
    <template #body>
      <form @submit.prevent="submit">
        <div class="flex flex-col gap-12 mt-5">
          <div class="text-center text-gray-300">
            <Icon
              name="ph:scroll-fill"
              size="4rem"
            />
          </div>

          <AppInput
            v-model="form.sheet_title"
            name="sheet_title"
            placeholder="Type the sheet name..."
            :pt="{ tabindex: 1, class: 'text-center h-10 text-xl' }"
          />

          <AppButton
            label="CREATE"
            block
            color="success"
            class="font-bold py-3"
            animated
            type="submit"
          />
        </div>
      </form>
    </template>
  </AppModal>
</template>
