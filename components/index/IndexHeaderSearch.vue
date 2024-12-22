<template>
  <label
    class="flex items-center px-4 rounded-lg shadow-lg bg-base-300 focus-within:outline focus-within:outline-3 focus-within:outline-primary"
  >
    <Icon
      name="ph:magnifying-glass-bold"
      size="2rem"
      class="text-gray-300"
    />
    <input
      type="text"
      class="w-full py-4 text-lg mx-2 text-white bg-transparent focus:outline-none placeholder:italic"
      name="search-cheat"
      placeholder="Search anything..."
    />
    <div class="flex gap-2">
      <kbd
        class="px-2 py-1 outline outline-1 outline-gray-500 text-sm font-bold text-gray-300 bg-gray-700 rounded"
      >
        CTRL
      </kbd>

      <kbd
        class="px-2 py-1 outline outline-1 outline-gray-500 text-sm font-bold text-gray-300 bg-gray-700 rounded"
      >
        K
      </kbd>
    </div>
  </label>
</template>
