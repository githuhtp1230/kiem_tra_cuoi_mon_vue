import { createRouter, createWebHistory } from "vue-router";
import KhoaHocPage from "./components/KhoaHoc/KhoaHocPage.vue";
import AboutPage from "./components/AboutPage.vue";

const routes = [
  { path: "/about", name: "about", component: AboutPage },
  { path: "/khoahoc", name: "khoahoc", component: KhoaHocPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
