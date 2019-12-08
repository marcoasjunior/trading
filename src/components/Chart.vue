<template>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
            <ChartCard :cardProps='card' />

            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ChartCard from '../components/ChartCard'

export default {
    name: 'Chart',
        data() {
            return {
                cards: [{
                        title: 'Economia',
                        src: 'https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:[%27January%27,%27February%27,%27March%27,%27April%27,%20%27May%27],datasets:[{label:%27Dogs%27,data:[50,60,70,180,190]},{label:%27Cats%27,data:[100,200,300,400,500]}]}}',
                        flex: 12
                    },
                    {
                        title: 'Vendas',
                        src: 'https://www.excel-easy.com/smi/data-analysis/charts.png',
                        flex: 6
                    },
                    {
                        title: 'Participantes',
                        src: 'https://landing.moqups.com/img/content/charts-graphs/pie-donut-charts/simple-pie-chart/simple-pie-chart-1600.png',
                        flex: 6
                    }
                ],

            }
        },
        components: {
            ChartCard
        }
    }
</script>
