import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },

  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue")
  },

  {
    path: "/pokemon/:name",
    name: "Detail",
    props: true,
    component: () => import("../views/Details.vue")
  }
];

const router = new VueRouter({
  routes
});
export default router;
