<template>
  <div class="bg-theme-purple">
    <div
      class="hero-grid-wrapper container max-w-screen-xl mx-auto
    grid grid-cols-1 md:grid-cols-2 md:grid-rows-3"
    >
      <div
        class="hero-bg-wrapper bg-theme-purple
      row-start-1 col-start-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3
      sticky top-0 z-20 h-screen-90"
      ></div>
      <div
        class="flex flex-col items-end justify-center pt-32 pb-20
      row-start-1 col-start-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2
      sticky top-0 z-30
      text-6xl font-display font-bold
    "
      >
        <h1
          class="bg-theme-orange w-min-content 
          p-6 sm:p-10 lg:p-10 md:mr-6 shadow-sm rounded
          transform -rotate-2 z-10 mr-4
          transition-all ease-out duration-300
          opacity-90 md:hover:opacity-100 md:hover:rotate-0"
        >
          {{ data.hero_title[0] }}
        </h1>
        <h1
          class="bg-pink-200 text-theme-red text-center 
          p-20 md:mr-6 rounded-full shadow-sm
          transform rotate-2 mr-2
          transition-all ease-out duration-300
          opacity-90 md:hover:opacity-100 md:hover:rotate-0"
        >
          {{ data.hero_title[1] }}
          <br />
          {{ data.hero_title[2] }}
          <br />
          {{ data.hero_title[3] }}
          <br />
          {{ data.hero_title[4] }}
        </h1>
      </div>
      <div
        class="hero-image-wrapper 
      row-start-1 col-start-1 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3
      sticky top-0 z-30 h-screen-80
      flex justify-start items-start md:justify-start md:items-end"
      >
        <div class="w-32 md:w-64 h-auto animate-wiggle ml-6 mt-32 md:ml-0">
          <g-image
            src="~/assets/hand-eva-goncalves.png"
            class="w-full h-auto z-10 opacity-90"
            immediate="true"
          >
          </g-image>
        </div>
      </div>
      <div
        class="hero-text-wrapper z-30 
      row-start-3 md:row-start-2 md:col-start-2 md:row-span-2
      bg-theme-black
      opacity-95 rounded
      px-8 md:px-20 
      py-20 space-y-16
      "
      >
        <p
          v-for="(sub, i) in data.hero_subtitle"
          :key="sub[i]"
          class="text-2xl md:text-3xl text-purple-100 font-light leading-relaxed"
        >
          {{ sub }}
        </p>
        <p
          class="text-2xl md:text-3xl text-purple-100 font-light leading-relaxed "
        >
          Any time you want,
          <a
            :href="`mailto:${data.email}`"
            class="
            transition-colors ease-out duration-200
            underline md:hover:text-theme-purple"
          >
            say hi!
          </a>
        </p>
      </div>
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
  /* background-color: var(--theme-purple); */
  /* background: radial-gradient(
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
  background-position: left; */
  /* transform: translate3d(s-100px, 0, 0); */

  /* animation: bg-animation 10s infinite alternate; */
  /* perspective: 1000px;
  backface-visibility: hidden; */
}

.hero-image-wrapper {
  /* mix-blend-mode: difference; */
  /* animation: shimmy 6s 3 alternate; */
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
  backface-visibility: hidden;
}

.hero-text-wrapper {
  clip-path: polygon(0 0px, 100% 40px, 100% 100%, 0 100%);
  p:first-child {
    @apply text-5xl;
  }
}

@keyframes bg-animation {
  100% {
    /* transform: translate3d(100px, 0, 0); */
    background-position: right;
  }
}

@keyframes shimmy {
  20% {
    transform: translate3d(0, -20px, 0);
  }
  50% {
    transform: rotate(-20deg);
  }
  80% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
