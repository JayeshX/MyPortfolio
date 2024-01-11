<template>
    <div class="bg-[#fbfcf8] dark:bg-[#121212]">
      <div class="flex items-end justify-between">
        <h4 class="font-body font-semibold uppercase text-black dark:text-[#fbfbf8]">{{ text }}</h4>
        <h3 class="font-body text-xl font-bold text-black dark:text-[#fbfbf8]">{{ percentage }}%</h3>
      </div>
      <div class="mt-2 h-3 w-full rounded-full bg-gray-400 dark:bg-white">
        <div class="h-3 rounded-full bg-[#5844ac]" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      percentage: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 100
      }
    }
  };
  </script>
  