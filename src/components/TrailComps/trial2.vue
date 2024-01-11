<template>
  <div :class="'relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400'">
    <a :href="glink" target="_blank" class="relative">
      <div class="relative w-full aspect-video">
        <img :src="ilink" alt="Writey A.I" loading="lazy" class="rounded w-full h-full object-cover" />
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
          <h2 class="text-xl font-semibold">{{ pname }}</h2>
          <p class="font-medium text-sm">{{ subtitle }}</p>
        </div>
      </div>
    </a>

    <div class="flex flex-col justify-between gap-3 px-4 py-2">
      <p class="text-gray-600 two-lines">{{ desc }}</p>

      <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
        <li
          title="Pricing type"
          class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
        >
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <!-- Your SVG path here -->
          </svg>
          <span>Freemium</span>
        </li>
      </ul>

      <ul class="flex flex-wrap text-sm gap-2 my-1">
        <li v-for="tech in techUsed" :key="tech" class="flex items-center gap-2"><span>{{ tech }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    glink: {
      type: String,
      required: true,
    },
    ilink: {
      type: String,
      required: true,
    },
    pname: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    techUsed: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
