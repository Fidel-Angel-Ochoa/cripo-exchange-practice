import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router); // esta funcion nos permite incorporar plugins, esta funcionalidad 'use' que nos permite ir agregregando componentes a medida que lo nesecitemos

// este Router que creamos representa la configuracion de nuestra 'single page aplication'
// estas son las cosas basicas que nesecitas para configurar una nueva ruta
export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },
    {
      // ':' indica que 'id' es un parametro
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
  ],
});
