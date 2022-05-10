<script lang="ts" setup>
const infoList = [
  {
    title: 'Top10',
    content: 'Position in Dribbble',
    tip: '20% increase from last week',
    color: 'c-bg-light-orange',
  },
  {
    title: '26',
    content: 'New Employees Onboarded',
    tip: '15% increase from last month',
    color: 'c-bg-light-purple',
  },
  {
    title: '500',
    content: 'New Clients Approached',
    tip: '5% increase from last week',
    color: 'c-bg-light-blue',
  },
]
</script>

<template>
  <div flex-1 flex flex-col justify-between>
    <div
      v-for="info in infoList"
      :key="info.color"
      p-1em
      b-rd-10px
      text-center
      transition-all-300
      hover:shadow-xl
      hover:cursor-pointer
      hover:translate-y--5px
      class="lh-1.4em"
      :class="info.color"
    >
      <h3 class="text-1.375em font-bold lh-1.6em">{{ info.title }}</h3>
      <p class="text-0.875em font-medium">{{ info.content }}</p>
      <p class="text-0.75em font-medium c-color-tip">{{ info.tip }}</p>
    </div>
  </div>
</template>
