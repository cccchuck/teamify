<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheSideBar from '../TheSideBar/TheSideBar.vue'
import TheHead from '../TheHead/TheHead.vue'
</script>

<template>
  <main w-1440px mx-auto flex bg-white>
    <TheSideBar />
    <main flex-1>
      <TheHead />
      <RouterView />
    </main>
  </main>
</template>
