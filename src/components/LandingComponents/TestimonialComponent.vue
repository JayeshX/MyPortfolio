<script setup>
import { ref } from 'vue';
const projects = ref([
  {
    cname: 'Company XYZ',
    jtitle: 'Web Developer',
    dt: 'June 2020 - Present',
    desc: ["Developed and maintained responsive web applications.", "Implemented new features and optimized existing codebase."],
  },
  {
    cname: 'Company XYZ',
    jtitle: 'Web Developer',
    dt: 'June 2020 - Present',
    desc: ["Flutter", "Node", "MongoDB", "PyTorch"],
  },

]);
</script>

<template>
    <div class="bg-[#fbfcf8] p-8  dark:bg-[#121212]">
      <div class="experience-list">
        <div class="experience-item" v-for="(project, index) in projects" :key="index">
            <h3>{{ project.cname }}</h3>
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
  
  <style scoped>
  .experience-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .header h2 {
    color: #333;
  }
  
  .header p {
    color: #666;
  }
  
  .experience-list {
    display: flex;
    flex-direction: column;
  }
  
  .experience-item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
  }
  
  .experience-item h3 {
    color: #3498db;
  }
  
  .job-title {
    color: #555;
    margin-bottom: 10px;
  }
  
  .date {
    color: #777;
  }
  </style>
  