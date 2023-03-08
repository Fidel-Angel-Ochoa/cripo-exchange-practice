<template>
  <main>
    <!-- Vue cambia de Pascal case a Kebap case -->
    <px-header :links="links" />

    <!-- nos permite establecer cual es el codigo html que sera ira reemplazando a medida que cambie la ruta-->
    <!-- siempre se va a mostar el 'header0' y acontnuacion lo que contenga la etiqueta 'router-view', que puede ser la tabla, los detalles de la moneda, etc.-->
    <router-view class="container px-5 sm:px-25 py-20 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "app",
  components: { PxHeader },

  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETC",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
