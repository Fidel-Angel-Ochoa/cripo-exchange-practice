<template>
  <!-- hace que el header tome todo el ancho de la pantalla y le aplique un shadow-->
  <header class="shadow w-screen">
    <nav>
      <!-- en este nav class utlizamos clases de flex para ubicar los elementos centrados y justificados, tambien agregamos color de fondo-->
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <!-- recordar que html se hace un parseo tipo kebap case, divide las palabras con guiones.-->
          <px-icon class="mr-2" />
          <!-- Aqui establecemos el tipo de fuente, tamaño de texto -->
          <!-- Las rutas las establecimos en el archivo 'router.js' de alli tomamos los nombres y los parametros que nesecitamos para conectar la ruta que desamos acceder. Esta es la manera dinamica
               'router-link' automaticamente hace que al dar clic en el elemento nos dirijamos a la ruta especificada, sin nesecidad de agregar 'v-on'-->
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >Platzi Exchange</router-link
          >
        </div>
        <!-- utilidades de responsive, sm:block significa que aplicara la clase bloc primero a los tamaños small(sm), tailwind es movil first, luego sera en tamaño mediano y despues grande, dependiendo de que dispositivo abra la pagina -->
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              {{ l.title }}</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "PxHeader",
  components: { PxIcon },

  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
