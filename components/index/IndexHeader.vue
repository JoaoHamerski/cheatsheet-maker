<template>
  <div class="flex justify-between my-16 relative h-14">
    <IndexHeaderNewBtn />
    <IndexHeaderSearch class="w-1/2 absolute left-1/2 -translate-x-1/2" />
    <AppButton
      v-tippy="{
        content: 'Settings',
        placement: 'bottom',
      }"
      color="gray"
      :icon="{ name: 'ph:gear-six', size: '1.35rem' }"
      variant="text"
    />
  </div>
</template>
