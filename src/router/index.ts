import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Articles from "../views/Articles.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Articles,
  },
  {
    path: "/article-view/:id",
    name: "articleView",
    component: () => import("../views/ArticleView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
