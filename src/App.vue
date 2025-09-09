<template>
  <div class="p-6">

    <!-- Titulo--> 
    <div>
        <h2 class="text-2xl font-bold mb-4"> Dados diarios de Arrecadação</h2>
    </div>


     <!-- Filtro --> 
    <div class="flex gap-4 mb-6">

      <div>

        <label for="dateInicial" class="block font-medium"> Data Inicial</label>
        <input 
          id="dateInitial"
          type="date"
          v-model="dateInitial"
          class="border px-2 py-1 rounded"
        
        />
        
      </div>

      <div>

        <label for="dateFinal" class="block font-medium"> Data Final</label>
        <input 
          id="dateFinal"
          type="date"
          v-model="dateFinal"
          class="border px-2 py-1 rounded"  
        
        />
        
      </div>

      <button 
        @click="filtrarData" class="bg-blue-600 text-white px-4 py-2 rounded">
          Atualizar
      </button>

    </div>


  <!-- Componente -->  
  <GraficoComponet  :categories="categories" :series="series"/>  

  </div>
</template>

<script>
import GraficoComponet from "./components/GraficoComponet.vue"

export default {
  name: "App",
  components: { GraficoComponet },

  data() {
    return {
      dateInitial: "2025-09-08",
      dateFinal: "2025-09-08",
      categories: [],
      series: []
    };
  },

  methods: {

    //filtrar por datas
    async filtrarData() {
      try {
        const response = await fetch(
          "https://polvo-api.consensotec.com.br/polvo-chart-rest-api/chart",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chartID: "dadosDiariosArrecadacao",
              accountID: 16,
              userID: 24,
              payload: {
                dateInitial: this.dateInitial,
                dateFinal: this.dateFinal,
                companyIsMunicipal: false,
                isContabil: false,
              },
            }),
          }
        );

        const data = await response.json();

        // Atualiza os dados do gráfico
        this.categories = data?.categories ?? [];
        this.series = data?.series ?? [];
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    }
  },

  mounted() {
    
    // Chama a API assim que o componente montar
    this.fetchChartData();
  }
};
</script>

