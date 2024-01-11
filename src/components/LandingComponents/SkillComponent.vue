<template>
    <div id="skill-me" class="bg-[#fbfcf8] dark:bg-[#121212] p-8 text-center">
      <h2 class="text-4xl font-bold text-black mb-4 font-serif dark:text-white">My Skills</h2>
      <hr class="my-2 border-b-2 border-gray-300 w-16 mx-auto">
  
      <p class="text-gray-700 mb-6 font-serif dark:text-gray-200">
        I have expertise in various programming languages and technologies. Here are some of my key skills:
      </p>
  
      <div class="flex flex-wrap justify-center md:space-x-8">
        <!-- Left container -->
        <div class="w-full sm:w-1/2 lg:w-2/5 ">
          <SkillColor :text="'Python'" :percentage="85" />
          <SkillColor :text="'Dart'" :percentage="70" />
          <SkillColor :text="'Java'" :percentage="80" />
          <SkillColor :text="'JavaScript'" :percentage="75" />
          <!-- Add two more skills on the left side -->
        </div>
  
        <!-- Right container -->
        <div class="w-full sm:w-1/2 lg:w-2/5 ">
          <!-- Add four skills on the right side -->
          <SkillColor :text="'C++'" :percentage="65" />
          <SkillColor :text="'SQL'" :percentage="70" />
          <SkillColor :text="'BASH'" :percentage="65" />
          <SkillColor :text="'PHP'" :percentage="75" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
//   import SkillColor from '@/path-to-your-components/SkillColor.vue';
     import SkillColor from '../Containers/SkillColor.vue';
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
  