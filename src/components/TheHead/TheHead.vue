<script lang="ts" setup>
const getGrettingText = () => {
  const date = new Date()
  const hours = date.getHours()

  if (hours >= 7 && hours < 12) {
    return 'Good morning Chuck'
  } else if (hours >= 12 && hours < 18) {
    return 'Good afternoon Chuck'
  } else if (hours >= 18 && hours < 24) {
    return 'Good evening Chuck'
  } else {
    return 'Good morning Chuck'
  }
}
</script>

<template>
  <div flex p-3xl items-center justify-between>
    <div>
      <h3 class="text-1.625em" c-color-heading lh-40px>
        {{ getGrettingText() }}
      </h3>
      <p class="text-0.875em" c-color-tip lh-20px>Hope you have a good day</p>
    </div>

    <div flex items-center>
      <i
        i-mdi-bell-outline
        class="w-2em h-2em block mx-2em transition-all-300 hover:cursor-pointer hover:translate-y--3px"
      ></i>
      <img
        w-50px
        h-50px
        b-rd-50px
        transition-all-300
        hover:cursor-pointer
        hover:shadow-xl
        hover:translate-y--3px
        src="https://tva1.sinaimg.cn/large/e6c9d24ely1h1wv868h3ej20u011hgoa.jpg"
        alt=""
      />
    </div>
  </div>
</template>
