<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="p-4xl text-center c-slide-bottom">
    <div>
      <img w-500px src="@/assets/common/404.svg" alt="" />
    </div>

    <div mt-5em>
      <button
        @click="router.push('/')"
        px-2em
        py-1em
        rounded-1em
        border-none
        c-bg-purple
        text-white
        font-bold
        transition-all-300
        hover:cursor-pointer
        hover:shadow-xl
        hover:translate-y--5px
      >
        Back to dashboard
      </button>
    </div>
  </div>
</template>
