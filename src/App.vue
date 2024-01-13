

<template>
  
  <div class="min-h-screen bg-[url('./assets/imgback/day.png')] bg-cover bg-no-repeat bg-fixed dark:bg-[url('./assets/imgback/night.png')]">
    <NavBar/>
  <RouterView/>
  <FootComponent/>
</div>
</template>


<script setup>
import {RouterView} from 'vue-router'
import NavBar from './components/Navbar/NavBar.vue';
import FootComponent from './components/Footer/FootComponent.vue';

</script>

<style>
html.dark{
  color-scheme: dark;
}
</style>