<template>
  <div
    class="hero-grid-wrapper max-w-screen-xl mx-auto
    grid grid-cols-1 md:grid-cols-2 md:grid-rows-3"
  >
    <div
      class="hero-bg-wrapper relative
      row-start-1 col-start-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3
      sticky top-8 z-20 h-screen-90"
    >
      <div class="clip-path-purple opacity-25"></div>
    </div>
    <div
      class="flex items-center justify-center 
      row-start-1 col-start-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2
      sticky top-8 z-30
    "
    >
      <h1
        class="text-7xl md:text-8xl font-display font-bold tracking-tighter 
       w-min-content"
      >
        {{ data.hero_title }}
      </h1>
    </div>
    <div
      class="hero-image-wrapper 
      row-span-1 col-span-1 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3
      sticky top-8 z-30
      opacity-75
      max-w-sm p-24 md:p-16 md:pt-32
      mx-auto"
    >
      <g-image src="~/assets/hand-eva-goncalves.png" class="w-56 h-auto z-10">
      </g-image>
    </div>
    <div
      class="hero-copy-wrapper z-30 
      row-start-3 md:row-start-2 md:col-start-2 md:row-span-2
      bg-theme-black
      opacity-95 rounded-sm
      px-8 md:px-20 
      py-16 space-y-16
      "
    >
      <p
        v-for="(sub, i) in data.hero_subtitle"
        :key="sub[i]"
        class="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed"
      >
        {{ sub }}
      </p>
    </div>
  </div>
</template>

<script>
import data from '@/data/theme.json'

export default {
  name: 'Hero',
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
.hero-bg-wrapper {
  /* mix-blend-mode: difference; */

  background: radial-gradient(
      ellipse at top left,
      transparent,
      #cd84f1,
      #ffcccc,
      #ff4d4d,
      #ffaf40
    ),
    radial-gradient(
      ellipse at center,
      transparent,
      #cd84f1,
      #ffcccc,
      #ff4d4d,
      #ffaf40
    ),
    radial-gradient(
      ellipse at bottom right,
      #ffaf40,
      #ff4d4d,
      #ffcccc,
      #cd84f1,
      transparent
    );

  background-size: 300%;
  animation: bg-animation 10s infinite alternate;
}

.hero-image-wrapper {
  /* mix-blend-mode: difference; */
  animation: shimmy 3s infinite alternate;
}

@keyframes bg-animation {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

@keyframes shimmy {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -10px);
  }
  70% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
