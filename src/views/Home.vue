<template>
  <!-- es una especie de contenedor -->
  <!-- 'v-bind' puede acotarse al poner solo ':' -->
  <div>
    <!-- 'bounce-loader' carga la animacion que indica que la pagina se esta cargando.Usamos un v-if para que la tabla se cargue cuando 'isLoading' cambie su valor.-->
    <bounce-loader :loading="isLoading" :color="`#68d391`" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: { PxAssetsTable },

  // creamos una propiedad donde guardar los assets que nos devuelve la api
  // 'isLoading' es usado para decirle cuando se muestra la animacion de la pagina cargandose
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  // created se ejecuta cuando se crea el componente para poder setear el array de assets
  // devolvemos la lista de assets y asignamos la lista a nuestro array
  // 'isLoading' se modificara cuando se cree el componente de 'home'
  // usar '.finally()' garantiza que aunque existe un error al crear el componente 'home' la modificacion a 'isLoading' se ejecutara.
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
