<template>
  <div text-center p-3xl class="c-slide-bottom">
    <img w-300px h-200px src="@/assets/common/no-data.svg" alt="" />
    <p mt-1em c-color-tip class="text-1.5em">
      🎉 Cong, There is not tasks now !
    </p>
  </div>
</template>

<style>
.c-slide-bottom {
  animation: slide-bottom 1s ease-in-out;
}

@keyframes slide-bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
