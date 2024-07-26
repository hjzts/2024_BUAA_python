<template>
        <v-chart class="chart " :option="option" style="max-width: 400px;height: 300px;"/>
</template>

<script lang="ts" setup name="UserEvaluation">
    import { use } from "echarts/core";
    import { CanvasRenderer } from "echarts/renderers";
    import { PieChart,BarChart,LineChart  } from "echarts/charts";
    import {GridComponent} from "echarts/components"
    import {
        TitleComponent,
        TooltipComponent,
        LegendComponent
    } from "echarts/components";
    import VChart, { THEME_KEY } from "vue-echarts";
    import type { UserEvaluation } from "@/types";

    use([
        CanvasRenderer,
        PieChart,
        BarChart,
        LineChart,
        TitleComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent
    ]);

    let userEvaluation:UserEvaluation = {
        score:[50, 60, 45, 80, 100],
        time:["2024-07-21", "2024-07-22", "2024-07-23", "2024-07-24", "2024-07-25"]
    }

    const option = {
        title: {
            text: '用户能力图',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Line', 'Bar'],
        },
        xAxis: {
            type: 'category',
            data: userEvaluation.time,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Line',
                type: 'line',
                data: userEvaluation.score,
            },
            {
                name: 'Bar',
                type: 'bar',
                data: userEvaluation.score,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            },

        ],
    }
</script>

<style scoped>
</style>