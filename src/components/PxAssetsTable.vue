<template>
  <table class="w-full">
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder == 1, down: this.sortOrder == -1 }">
          <span class="underline cursor-pointer" @click="changeSortOrder"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            class="w-6 h-6"
            :src="`https://assets.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name"
          />
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <!-- 'to' lo usamos en v-bind para enlazar la url de destino al hacer click sobre le nombre.
           -->
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >
            <b>{{ a.name }}</b>
          </router-link>
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <!--  si el valor del porcentage tiene un '-', lo cambiamos de color con la funcion 'includes' -->
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ a.changePercent24Hr | percent }}
        </td>
        <!-- llamamos el metodo 'custom-click' del archivo 'PxButton.vue', luego enlazamos al metodo 'goToCoin()',en el parentesis ingresamos un valor dinamico como el id-->
        <td class="hidden sm:block">
          <px-button @custom-click="goToCoin(a.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton.vue";

// aqui se colocan los componentes que pueden usarse
export default {
  name: "PxAssetsTable",

  components: { PxButton },

  // los assets que contienen datos de las criptomonedas, las creamos para tener donde almacenar estos datos que usaremos
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },

  // si alguno de los elementos que estan en la lista de 'assets' coincide en su propiedad 'symbol' con lo que esta en la propiedad filter(bindiada al imput) devolvemos los elementos que coincidan.
  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;

      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    },
  },

  // pesos routher me permite acceder a la instancia del router utilizandolo principalmente para navegar a travez del codigo, empujando una nueva ruta dentro del stack de rutasl del router
  // El router-link internamnete utilizar el router.push. La diferencia es que una la utilizas en los templates/html y la otra es para navegacion programatica, pero ambas resuelven lo mismo.
  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },
    changeSortOrder() {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
