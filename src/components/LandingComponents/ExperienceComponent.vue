<script setup>
import { ref } from 'vue';
const projects = ref([
  {
    cname: 'Stoffspot',
    jtitle: 'Junior. Full Stack Developer',
    dt: 'May. 2023 - Dec. 2023',
    desc: ["Developed a website on Next.js with Node, and a professional Git/GitHub workflow."," Improved website performance and speed through optimization techniques."],
  },

]);
</script>

<template>
    <div class=" bg-[#fbfcf8] p-8  dark:bg-[#121212]">
        <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl dark:text-[#fbfcf8] ">
        My Experience
      </h2>
      <div class="flex flex-wrap mt-12 dark:bg-[#121212] ">
        <div class="bg-white rounded-md shadow-xl mb-4 px-4 py-3 dark:bg-[#303030]" v-for="(project, index) in projects" :key="index">
            <h3 class="text-grey-600 dark:text-white">{{ project.cname }}</h3>
          <p class="job-title">{{ project.jtitle }}</p>
          <p class="date">{{ project.dt }}</p>
          <ul >
                <!-- Iterate over the techUsed array and display each tech item as a list item -->
                <li v-for="(tech, techIndex) in project.desc" :key="techIndex">{{ tech }}</li>
            </ul>
        </div>
        <!-- <div class="experience-item">
          <h3>Company XYZ</h3>
          <p class="job-title">Web Developer</p>
          <p class="date">June 2020 - Present</p>
          <ul>
            <li></li>
            <li>Collaborated with cross-functional teams for project success.</li>
            <li>Implemented new features and optimized existing codebase.</li>
          </ul>
        </div> -->
        
        <!-- Add more experience items as needed -->
        
      </div>
    </div>
  </template>
  
