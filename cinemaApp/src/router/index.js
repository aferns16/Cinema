import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Principal from "../views/Principal.vue";
import Pelicula from "../views/Pelicula.vue";
import Entradas from "../views/Entradas.vue";
import Compra from "../views/Compra.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Principal",
        component: Principal
      },
      {
        path: "/pelicula",
        name: "Pelicula",
        component: Pelicula
      },
      {
        path: "/entradas",
        name: "Entradas",
        component: Entradas
      },
      {
        path: "/compra",
        name: "Compra",
        component: Compra
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
