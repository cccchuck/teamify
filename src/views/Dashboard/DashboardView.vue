<script lang="ts" setup>
import TheHead from '@/components/TheHead/TheHead.vue'
import StatisticsBar from './components/StatisticsBar.vue'
import TotalBar from './components/TotalBar.vue'
import LineChart from './components/LineChart.vue'
import NotificationBar from './components/NotificationBar.vue'
</script>

<template>
  <div flex>
    <StatisticsBar />
    <TotalBar />
  </div>

  <div flex>
    <LineChart />
    <NotificationBar />
  </div>
</template>
