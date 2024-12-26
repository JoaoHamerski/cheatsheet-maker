<template>
  <AppInput
    name="main-search"
    placeholder="Search anything"
    :icon="{
      name: 'ph:magnifying-glass-bold',
      size: '2rem',
    }"
    :pt="{
      class: 'text-lg placeholder:italic',
    }"
  >
    <template #append>
      <IndexHeaderSearchKbds />
    </template>
  </AppInput>
</template>
