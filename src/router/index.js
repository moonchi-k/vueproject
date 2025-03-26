import { createRouter, createWebHistory } from "vue-router";
import Info from "../components/info.vue";

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
