<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheSideBar from '../TheSideBar/TheSideBar.vue'
</script>

<template>
  <main w-1440px mx-auto flex bg-white>
    <TheSideBar />
    <RouterView />
  </main>
</template>
