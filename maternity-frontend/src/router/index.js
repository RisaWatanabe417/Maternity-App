import Vue from "vue";
import VueRouter from "vue-router";
import TodoTitleList from "../views/TodoTitleList.vue";
import TodoDetailList from "../views/TodoDetailList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    component: TodoTitleList
  },
  {
    path: "/detail",
    name: "detail",
    component: TodoDetailList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
