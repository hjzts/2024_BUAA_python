<template>
    <v-container>
        <line-chart :chart-data="chartData" :options="chartOptions"></line-chart>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, PointElement);

export default defineComponent({
    name: 'LineBarChart',
    components: {
        LineChart: Line,
    },
    setup() {
        const chartData = ref({
            labels: ['2024-07-01', '2024-07-02', '2024-07-03'],
            datasets: [
                {
                    type: 'line',
                    label: 'Score Line',
                    data: [85, 90, 78],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    type: 'bar',
                    label: 'Score Bar',
                    data: [85, 90, 78],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                },
            ],
        });

        const chartOptions = ref({
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        });

        return {
            chartData,
            chartOptions,
        };
    },
});
</script>
  
<style scoped>
.v-container {
    height: 400px;
}
</style>