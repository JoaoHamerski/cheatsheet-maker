<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <AppModal v-model="open">
    <template #body>
      <form action="#">
        <div class="flex flex-col gap-12 mt-5">
          <div class="text-center text-gray-300">
            <Icon
              name="ph:scroll-fill"
              size="4rem"
            />
          </div>
          <AppInput
            name="sheet-name"
            placeholder="Type the sheet name..."
            input-class="text-center h-10 text-xl"
            :pt="{ tabindex: 1 }"
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
