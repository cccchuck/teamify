<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navListA = [
  {
    name: 'dashboard',
    title: 'Dashboard',
    icon: 'i-mdi-view-dashboard-outline',
  },
  {
    name: 'teams',
    title: 'Teams',
    icon: 'i-mdi-apple-keyboard-command',
  },
  {
    name: 'employees',
    title: 'Employees',
    icon: 'i-mdi-account-outline',
  },
  {
    name: 'projects',
    title: 'Projects',
    icon: 'i-mdi-briefcase-outline',
  },
]
const navListB = [
  {
    name: 'meetings',
    title: 'Meetings',
    icon: 'i-mdi-phone-outline',
  },
  {
    name: 'tasks',
    title: 'Tasks',
    icon: 'i-mdi-folder-outline',
  },
  {
    name: 'settings',
    title: 'Settings',
    icon: 'i-mdi-cog-outline',
  },
]

const goto = (name: string) => {
  router.push({ name })
}
</script>

<template>
  <aside
    w-290px
    px-36px
    py-48px
    min-h-100vh
    flex
    flex-col
    justify-between
    c-bg-grey
    c-color-nav
    text-lg
  >
    <div>
      <div flex items-center pb-5em>
        <img w-32px h-32px src="@/assets/logo.svg" alt="Teamify" />
        <p ml-1rem font-bold c-color-purple class="text-1.375em">Teamify</p>
      </div>

      <div
        v-for="nav in navListA"
        :key="nav.name"
        @click="goto(nav.name)"
        :class="{
          'c-color-purple': $route.name === nav.name,
          'font-bold': $route.name === nav.name,
        }"
        h-60px
        lh-60px
        flex
        items-center
        transition-all-300
        hover:c-color-purple
        hover:cursor-pointer
      >
        <i :class="nav.icon" block w-24px h-24px></i>
        <span class="ml-1em" text-lg>{{ nav.title }}</span>
      </div>

      <div my-25px h-1px c-bg-light-grey></div>

      <div
        v-for="nav in navListB"
        :key="nav.name"
        @click="goto(nav.name)"
        :class="{
          'c-color-purple': $route.name === nav.name,
          'font-bold': $route.name === nav.name,
        }"
        h-60px
        lh-60px
        flex
        items-center
        transition-all-300
        hover:c-color-purple
        hover:cursor-pointer
      >
        <i :class="nav.icon" block w-24px h-24px></i>
        <span class="ml-1em" text-lg>{{ nav.title }}</span>
      </div>
    </div>

    <div flex flex-col items-center h-160px px-1em b-rd-2 c-bg-light-purple>
      <div class="light"></div>
      <button
        px-4
        py-2
        c-color-purple
        bg-white
        border-none
        b-rd-2
        transition-all-300
        translate-y--15px
        hover:cursor-pointer
        hover:translate-y--20px
      >
        Share Your Thoughts
      </button>
    </div>
  </aside>
</template>

<style>
.light {
  position: relative;
  top: -36px;
  width: 150px;
  height: 155px;
  background-color: #6956e5;
  mask: url('@/assets/dashboard/share.svg');
  -webkit-mask-image: url('@/assets/dashboard/share.svg');
}
</style>
