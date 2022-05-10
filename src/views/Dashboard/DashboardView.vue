<script lang="ts" setup>
import TheHead from '@/components/TheHead/TheHead.vue'
import StatisticsBar from './components/StatisticsBar.vue'
import TotalBar from './components/TotalBar.vue'
import NotificationBar from './components/NotificationBar.vue'
</script>

<template>
  <main flex-1>
    <TheHead />

    <div flex>
      <StatisticsBar />
      <TotalBar />
    </div>

    <div flex>
      <NotificationBar />
    </div>
  </main>
</template>
