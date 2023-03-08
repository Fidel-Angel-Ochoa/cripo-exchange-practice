import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"; // el @ es un truco para usa esta linea en cualquier componente o archivo en la carpeta para importar tailwind sin nesecidad de especificar directorio.
import Chartkick from "vue-chartkick";
import { Chart } from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router"; // importamos para usar lo que creamos en router
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter("dollar", dollarFilter); // llamamos la funcion filter de Vue, le decimos el nombre que le pondremos(dollar) y que se ejecutara (la fucion 'dollarFilter'). Basicamente estamos registrando dentro de 'filter' nuestro filtro para poder usarlo. para poder usarlo en algun valor colocamos '| nombre-del-filtro'
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

// agregamos router a nuestra aplicacion, esto nos permitira tener un componente cambiante en nuestra aplicacion
// si el nombre de la variable es igual al de la propiedad podemos simplificar y escribirlo una vez
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
