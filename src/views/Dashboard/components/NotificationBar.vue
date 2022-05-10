<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

interface INotification {
  name: string
  avatarUrl: string
  message: string
  time: string
}

const avatarUrls = [
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wv868h3ej20u011hgoa.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wg8m1zloj208a08adfy.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wg8bcupyj208a08ajrg.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wg7myx4sj208a08adfz.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23imw6qikj20b40b4wf5.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23imnx9juj20u00u010p.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23inq8p5hj20hm0hmgm7.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23iomdz7fj20rh0kmdgt.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23ioqlq34j20k00zkq4x.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23iouy0ejj20k00jjwfz.jpg',
]

const departments = ['HR', 'Market', 'Developers', 'Design', 'Sales']

const names = [
  'Chuck',
  'Jennifer',
  'Steve',
  'Elon',
  'Mark',
  'Paul',
  'John',
  'Jane',
  'Mary',
  'Bob',
]

const generateRandomAvatarUrl = () => {
  const randomIndex = Math.floor(Math.random() * avatarUrls.length)
  return avatarUrls[randomIndex]
}

const generateRandomDepartment = () => {
  const randomIndex = Math.floor(Math.random() * departments.length)
  return departments[randomIndex]
}

const generateRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length)
  return names[randomIndex]
}

const generateRandomNotification = () => {
  return {
    name: generateRandomName(),
    avatarUrl: generateRandomAvatarUrl(),
    message: `${generateRandomName()} has joined the ${generateRandomDepartment()}`,
    time: new Date().toLocaleString(),
  }
}

const generateNumberNotification = (num: number) => {
  for (let i = 0; i < num; i++) {
    notifications.value.push(generateRandomNotification())
  }
}

const notifications: Ref<INotification[]> = ref([])

onMounted(() => {
  generateNumberNotification(6)

  setInterval(() => {
    notifications.value.splice(0, 1)
    generateNumberNotification(1)
  }, 20 * 1000)
})
</script>

<template>
  <div flex-1>
    <div flex justify-between items-center my-1em>
      <p class="text-1.125em lh-2.5em font-bold c-color-heading">
        Notifications
      </p>
      <p class="text-0.875em lh-1.5em font-bold c-color-purple">View All</p>
    </div>

    <div
      v-for="notification in notifications"
      :key="notification.time"
      flex
      p-2
      mt-1em
      items-center
      c-bg-grey
      class="c-animate-slide-in-right"
    >
      <img
        :src="notification.avatarUrl"
        :alt="notification.name"
        w-36px
        h-36px
        rounded
      />
      <div ml-2>
        <p class="h-1rem text-0.75em lh-0.5rem align-top">
          {{ notification.message }}
        </p>
        <p class="h-0.875rem text-0.625em lh-1.2rem align-bottom c-color-tip">
          {{ notification.time }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.c-animate-slide-in-right {
  animation: slide-in-right 640ms cubic-bezier(0.26, 0.95, 0.4, 1.28) 1;
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
