<script lang="ts" setup>
const meetingsList = [
  {
    ID: '1',
    time: '9:00',
    lastTime: '10:00',
    date: '2022-05-10',
    title: 'About Vue.js',
    location: 'Office A-401',
    participator: '@John, @Jane, @Jack',
  },
  {
    ID: '2',
    time: '9:00',
    lastTime: '10:00',
    date: '2022-05-11',
    title: 'Vite && Webpack',
    location: 'Office A-401',
    participator: '@John, @Jane, @Jack',
  },
  {
    ID: '3',
    time: '9:00',
    lastTime: '10:00',
    date: '2022-05-12',
    title: 'TypeScript Discussion',
    location: 'Office A-402',
    participator: '@John, @Jane, @Jack',
  },
]
</script>

<template>
  <div p-3xl class="pt-0">
    <div
      v-for="meeting in meetingsList"
      :key="meeting.ID"
      class="c-slide-bottom"
      mt-2em
      p-2em
      c-color-heading
      c-bg-grey
      rounded-1em
      transition-all-300
      hover:shadow-xl
      hover:cursor-pointer
      hover:translate-y--2px
    >
      <div flex items-center justify-between>
        <p class="text-1.25em font-bold">{{ meeting.title }}</p>
        <p class="flex items-center c-color-tip">
          <span class="i-mdi-clock-time-three-outline w-1.5em h-1.5em"></span>
          <span class="ml-0.5em">
            {{ meeting.date }} {{ meeting.time }} ~{{ meeting.lastTime }}
          </span>
        </p>
      </div>

      <div flex items-center mt-2em>
        <p class="flex font-bold items-center">
          <span
            i-mdi-navigation-variant-outline
            class="w-1.5em h-1.5em c-color-purple"
          ></span>
          <span class="ml-0.5em">{{ meeting.location }}</span>
        </p>
        <p class="ml-5em c-color-purple text-0.8em font-bold font-italic">
          participator: {{ meeting.participator.split(', ').join(' ') }}
        </p>
      </div>
    </div>
  </div>
</template>
