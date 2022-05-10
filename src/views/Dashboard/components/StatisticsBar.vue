<script lang="ts" setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts/core'
import {
  GridComponent,
  TooltipComponent,
  PolarComponent,
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

type EChartsOption = echarts.EChartsCoreOption

echarts.use([
  GridComponent,
  TooltipComponent,
  PolarComponent,
  BarChart,
  CanvasRenderer,
])

function renderBar(option: EChartsOption) {
  const barDom: HTMLElement | null = document.getElementById('bar')
  const barChart = echarts.init(barDom as HTMLElement)
  barChart.setOption(option)
}

function renderPolarBar(option: EChartsOption) {
  const polarBarDom: HTMLElement | null = document.getElementById('polar-bar')
  const polarBarChart = echarts.init(polarBarDom as HTMLElement)
  polarBarChart.setOption(option)
}

const barOption: EChartsOption = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Market', 'HR', 'Developers', 'Design'],
    show: false,
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      name: 'Strength',
      data: [20, 32, 17, 34],
      type: 'bar',
      label: {
        show: true,
        color: '#787476',
        position: 'top',
      },
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
        borderWidth: 65,
        color: (item: { dataIndex: number }) => {
          const colorList = ['#FABE37', '#F6866A', '#59E6F6', '#7661E2']
          const ret = colorList[item.dataIndex]
          return ret
        },
      },
    },
  ],
  color: ['#FABE37', 'F6866A', '59E6F6', '7661E2'],
}

const polarBarOption: EChartsOption = {
  tooltip: {},
  polar: {
    radius: [10, '70%'],
  },
  angleAxis: {
    max: 1,
    startAngle: 0,
    show: false,
  },
  radiusAxis: {
    type: 'category',
    data: ['Inactive', 'Active', 'Total'],
    show: false,
  },
  series: {
    type: 'bar',
    data: [254 / 4000, 3000 / 4000, 3254 / 4000],
    coordinateSystem: 'polar',
    roundCap: true,
    itemStyle: {
      color: (item: { dataIndex: number }) => {
        const colorList = ['#7661E2', '#F6866A', '#FABE37']
        const ret = colorList[item.dataIndex]
        return ret
      },
    },
  },
}

const barXAxis = [
  {
    name: 'Marketing',
    color: '#FABE37',
  },
  {
    name: 'HR',
    color: '#F6866A',
  },
  {
    name: 'Developers',
    color: '#59E6F6',
  },
  {
    name: 'Design',
    color: '#7661E2',
  },
]

const pieAxis = [
  {
    name: 'Inactive',
    value: 254,
    color: '#7661E2',
  },
  {
    name: 'Active',
    value: 3000,
    color: '#F6866A',
  },
  {
    name: 'Total',
    value: 3254,
    color: '#FABE37',
  },
]

onMounted(() => {
  renderBar(barOption)
  renderPolarBar(polarBarOption)
})
</script>

<template>
  <div flex px-3xl justify-around>
    <div p-2em rounded-4 c-bar-border>
      <h3 class="text-1.125em lh-2.5em">Teams Strength</h3>

      <div id="bar" w-437px h-320px m--2em></div>

      <div grid grid-cols-2 grid-rows-2 grid-gap-1em>
        <div v-for="bar in barXAxis" :key="bar.name" flex items-center>
          <p
            rounded
            text-white
            text-center
            class="w-2em h-2em lh-2em"
            :style="{ 'background-color': bar.color }"
          >
            {{ bar.name[0] }}
          </p>
          <span ml-1em c-color-tip class="text-0.875em">{{ bar.name }}</span>
        </div>
      </div>
    </div>

    <div p-2em rounded-4 c-bar-border ml-1em>
      <div flex items-center justify-between>
        <h3 class="text-1.125em lh-2.5em">Employees</h3>
        <p c-color-tip text-xs>Apr 15 - May 15</p>
      </div>

      <div flex>
        <div>
          <div v-for="pie in pieAxis" :key="pie.name" mt-2em>
            <div flex items-center>
              <p
                rounded-50
                w-1em
                h-1em
                :style="{ 'background-color': pie.color }"
              ></p>
              <span ml-2 c-color-tip text-xs>{{ pie.name }}</span>
            </div>
            <p mt-1em class="text-1.375em">{{ pie.value }}</p>
          </div>
        </div>

        <div>
          <div id="polar-bar" w-280px h-280px></div>
        </div>
      </div>
    </div>
  </div>
</template>
