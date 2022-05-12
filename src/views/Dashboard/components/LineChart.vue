<script lang="ts" setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type {
  GridComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import type { LineSeriesOption } from 'echarts/charts'

echarts.use([
  GridComponent,
  TooltipComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
])

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption | TooltipComponentOption
>

function renderLineChart(option: EChartsOption) {
  const lineChartDom: HTMLElement | null = document.getElementById('line-chart')
  const lineChart = echarts.init(lineChartDom as HTMLElement)
  lineChart.setOption(option)
}

const option: EChartsOption = {
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: [
      'Dec 2021',
      'Jan 2022',
      'Feb 2022',
      'Mar 2022',
      'Apr 2022',
      'May 2022',
    ],
    axisLine: { show: false },
    axisTick: { show: false },
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Achieved',
      data: [4, 5, 6, 7, 8, 10],
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        color: '#FB896B',
        width: 5,
        shadowColor: '#FB896B',
        shadowOffsetY: 5,
        shadowBlur: 20,
        cap: 'round',
      },
    },
    {
      name: 'Target',
      data: [2, 4, 9, 6, 6, 4],
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        color: '#6956E5',
        width: 5,
        shadowColor: '#6956E5',
        shadowOffsetY: 5,
        shadowBlur: 20,
        cap: 'round',
      },
    },
  ],
  color: ['#FB896B', '#6956E5'],
}

const lineCategories = [
  {
    name: 'Achieved',
    color: '#FB896B',
  },
  {
    name: 'Target',
    color: '#6956E5',
  },
]

onMounted(() => {
  renderLineChart(option)
})
</script>

<template>
  <div w-866px mt-2em px-3xl>
    <div
      p-2em
      rounded-4
      c-bar-border
      transition-all-300
      hover:cursor-pointer
      hover:shadow-2xl
      hover:translate-y--5px
    >
      <div flex items-center justify-between>
        <h3 class="text-1.125em lh-2.5em">Project Deliveries</h3>
        <div flex items-center>
          <div
            v-for="lineCategory in lineCategories"
            :key="lineCategory.name"
            flex
            mx-1em
          >
            <p
              w-1em
              h-1em
              rounded-1em
              :style="{ 'background-color': lineCategory.color }"
            ></p>
            <span class="text-0.875em ml-0.5em c-color-tip">{{
              lineCategory.name
            }}</span>
          </div>
        </div>
      </div>
      <div id="line-chart" w-742px h-375px></div>
    </div>
  </div>
</template>
