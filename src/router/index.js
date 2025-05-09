// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
