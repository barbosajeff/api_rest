<template>
  <div>
    <!-- Grafico -->
    <apexchart 
      type="line"
      height="400"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>


export default {
  name: "GraficoComponet",
  components: {  },

  props: {
    categories: { type: Array, default: () => [] },
    series: { type: Array, default: () => [] }
  },

  computed: {
    chartOptions() {
      return {
        chart: {
          id: "dados-diarios-arrecadacao",
          toolbar: { show: true }
        },
        xaxis: {
          categories: this.categories
        },
        yaxis: {
          labels: {
            formatter: (v) => v.toLocaleString("pt-BR")
          }
        },
        tooltip: {
          y: {
            formatter: (v) => v.toLocaleString("pt-BR")
          }
        }
      };
    }
  }
};
</script>