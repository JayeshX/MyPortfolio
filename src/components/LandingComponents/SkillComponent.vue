<template>
    <div id="skill-me" class="bg-[#fbfcf8] dark:bg-[#151515] p-8 text-center">
      <hr class="my-2 border-b-2 border-gray-800 dark:border-[#cb1b28]  w-17 mx-auto">
      <br>
      <h2 class="text-4xl font-bold text-black mb-4 font-serif dark:text-white">My Skills</h2>
      <hr class="my-2 border-b-2 border-gray-600 w-16 mx-auto">
  
      <p class="text-gray-700 mb-6 font-serif dark:text-gray-200">
        I have expertise in various programming languages and technologies. Here are some of my key skills:
      </p>
      <SkillsDark/>
    </div>
  </template>
  
  <script setup>
//   import SkillColor from '@/path-to-your-components/SkillColor.vue';
     import SkillColor from '../Containers/SkillColor.vue';
import SkillsDark from '../Containers/SkillsDark.vue';
  </script>
  
  <style scoped>
  #skillme {
    background-color: #f7f7f7;
  }
  
  /* Font styles for the "My Skills" heading */
  #skillme h2 {
    font-family: 'YourBeautifulFont', sans-serif;
  }
  
  /* Font styles for the paragraph */
  #skillme p {
    font-family: 'AnotherBeautifulFont', sans-serif;
  }
  
  /* Your component-specific styles go here */

  </style>