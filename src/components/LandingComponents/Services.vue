
<template>
  <div  class="bg-[#fbfcf8] dark:bg-[#121212] p-8 text-center">
    <div class="container py-16 md:py-20 p-8 bg-[#fbfcf8] dark:bg-[#121212]" id="services">
  <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
    Here's what I'm good at
  </h2>
  <h3 class="pt-6 text-center font-header text-xl font-medium text-black dark:text-gray-200 sm:text-2xl lg:text-3xl">
    The Services I can Provide
  </h3>

  <div class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3 ">
    <!-- web-development -->
    <div class="group rounded px-8 py-12 bg-[#f5fbff] dark:bg-[#1e1e1e] shadow-xl dark:shadow-[#cb1b28] hover:bg-[#5844ac] dark:hover:bg-[#cb1b28]">
      <div class="mx-auto flex items-center justify-center h-24 w-24 text-center xl:h-28 xl:w-28">
        <div class="hidden group-hover:block">
          <img v-if="isDark" src="../../assets/services/wd-white.svg" alt="development icon">
          <img v-else src="../../assets/services/wd-white.svg" alt="development icon">
        </div>
        <div class="block group-hover:hidden">
          <img v-if="isDark" src="../../assets/services/wd-red.svg" alt="development icon">
          <img v-else src="../../assets/services/wd-black.svg" alt="development icon">
        </div>
      </div>
      <div class="text-center">
        <h3 class="pt-8 text-lg font-semibold uppercase underline text-primary group-hover:text-[#FFFF00] lg:text-xl">
          WEB DEVELOPMENT
        </h3>
        <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Proficient in web development languages such as HTML, CSS, and JavaScript. Experienced in building dynamic and responsive web applications using frameworks like React.js and Next.js. Skilled in utilizing design tools like Tailwind, and proficient in website builders like WIX and Webflow.
        </p>
      </div>
    </div>
    <!-- mobile development -->
    <div class="group rounded px-8 py-12 bg-[#f5fbff] dark:bg-[#1e1e1e] shadow-xl dark:shadow-[#cb1b28] hover:bg-[#5844ac] dark:hover:bg-[#cb1b28]">
      <div class="mx-auto flex items-center justify-center h-24 w-24 text-center xl:h-28 xl:w-28">
        <div class="hidden group-hover:block">
          <img v-if="isDark" src="../../assets/services/md-white.svg" alt="development icon">
          <img v-else src="../../assets/services/md-white.svg" alt="development icon">
        </div>
        <div class="block group-hover:hidden">
          <img v-if="isDark" src="../../assets/services/md-red.svg" alt="development icon">
          <img v-else src="../../assets/services/md-black.svg" alt="development icon">
        </div>
      </div>
      <div class="text-center">
        <h3 class="pt-8 text-lg font-semibold uppercase underline text-primary group-hover:text-[#FFFF00] lg:text-xl">
          Mobile Applications Development
        </h3>
        <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Skilled in mobile app development using languages like Flutter. Proficient in creating cross-platform mobile applications with a focus on user-friendly interfaces and seamless user experiences. Experienced with Android Studio for native Android app development.
        </p>
      </div>
    </div>
    <!-- cross-platform -->
    <div class="group rounded px-8 py-12 bg-[#f5fbff] dark:bg-[#1e1e1e] shadow-xl dark:shadow-[#cb1b28] hover:bg-[#5844ac] dark:hover:bg-[#cb1b28]">
      <div class="mx-auto flex items-center justify-center h-24 w-24 text-center xl:h-28 xl:w-28">
        <div class="hidden group-hover:block ">
          <img v-if="isDark" src="../../assets/services/cp-white.svg" alt="development icon">
          <img v-else src="../../assets/services/cp-white.svg" alt="development icon">
        </div>
        <div class="block group-hover:hidden">
          <img v-if="isDark" src="../../assets/services/cp-red.svg" alt="development icon">
          <img v-else src="../../assets/services/cp-black.svg" alt="development icon">
        </div>
      </div>
      <div class="text-center">
        <h3 class="pt-8 text-lg font-semibold uppercase underline text-primary group-hover:text-[#FFFF00] lg:text-xl">
          Cross-Platform
        </h3>
        <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Familiar with cross-platform development, utilizing technologies like React-Native,Flutter for building applications that run on both iOS and Android platforms. Proficient in creating consistent and efficient user experiences across different devices.
        </p>
      </div>
    </div>
    <!-- data handling -->
    <div class="group rounded px-8 py-12 bg-[#f5fbff] dark:bg-[#1e1e1e] shadow-xl dark:shadow-[#cb1b28] hover:bg-[#5844ac] dark:hover:bg-[#cb1b28]">
      <div class="mx-auto flex items-center justify-center h-24 w-24 text-center xl:h-28 xl:w-28">
        <div class="hidden group-hover:block">
          <img v-if="isDark" src="../../assets/services/dh-white.svg" alt="development icon">
          <img v-else src="../../assets/services/dh-white.svg" alt="development icon">
        </div>
        <div class="block group-hover:hidden">
          <img v-if="isDark" src="../../assets/services/dh-red.svg" alt="development icon">
          <img v-else src="../../assets/services/dh-black.svg" alt="development icon">
        </div>
      </div>
      <div class="text-center">
        <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-[#FFFF00] lg:text-xl">
          DataBase Handling
        </h3>
        <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Skilled in working with databases, including SQL, MongoDB, Firebase. Experienced in database design, optimization, and handling data for web and mobile applications. Proficient in managing data with a focus on security and efficiency.
        </p>
      </div>
    </div>
    <!-- machine-learning -->
    <div class="group rounded px-8 py-12 bg-[#f5fbff] dark:bg-[#1e1e1e] shadow-xl dark:shadow-[#cb1b28] hover:bg-[#5844ac] dark:hover:bg-[#cb1b28]">
      <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div class="hidden group-hover:block">
          <img v-if="isDark" src="../../assets/services/ml-white.svg" alt="development icon">
          <img v-else src="../../assets/services/ml-white.svg" alt="development icon">
        </div>
        <div class="block group-hover:hidden">
          <img v-if="isDark" src="../../assets/services/ml-red.svg" alt="development icon">
          <img v-else src="../../assets/services/ml-black.svg" alt="development icon">
        </div>
      </div>
      <div class="text-center">
        <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-[#FFFF00] lg:text-xl">
          Machine learning
        </h3>
        <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Knowledgeable in machine learning technologies and tools such as PyTorch. Experienced in implementing machine learning algorithms for tasks such as data analysis, pattern recognition, and predictive modeling. Proficient in utilizing libraries like TensorFlow, scikit-learn, and Pandas for machine learning projects.
        </p>
      </div>
    </div>
    
  </div>
</div>
</div>
</template>
<script setup>
import { useDark } from '@vueuse/core'

const isDark = useDark();

</script>