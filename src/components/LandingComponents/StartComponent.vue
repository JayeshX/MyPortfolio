<script setup>
import SocialContainer from '../Containers/SocialContainer.vue';

</script>

<template>
    <div class="h-screen flex justify-center items-center" id="start-me">
        <div
            class="backdrop-blur flex justify-center items-center bg-white/50 dark:bg-black/60 py-12 lg:px-20 px-8 rounded-lg shadow-lg flex dark:shadow-gray-900 lg:items-start flex-col items-center text-center">
            
            
            <!-- Your Name -->
            <h2 class=" text-4xl text-center my-2 lg:font-medium font-bold lg:text-5xl dark:text-gray-200">
                JAYESH KIRTANE
            </h2>
            <!-- White Line -->
            <div class="bg-black h-2 w-16 my-2 rounded-full dark:bg-white"></div>
            <!-- Designation -->
            <p class="xl:text-2xl text-center text-gray-600 dark:text-gray-400 text-sm">
                FULLSTACK Developer
            </p>
            <!-- Socials Icons -->
            <SocialContainer/>
        </div>
    </div>
  </template>
