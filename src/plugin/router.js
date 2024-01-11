// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// import Home from
// import {  } from "";
// import Home from './views/Home.viu'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/credit', name: 'about', component: () => import('../components/Containers/CreditsContainer.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router