<template>
  <div
    class="max-w-screen-lg mx-auto pb-40
    grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 bg-secondary"
  >
    <div
      class="hero-heading-wrapper 
      row-span-1 col-span-1 md:row-span-1 md:col-span-1
      sticky top-0 z-20
      opacity-50 rounded-sm w-full
      flex items-center justify-center"
    >
      <h1
        class="text-5xl md:text-6xl font-display font-bold text-center text-opacity-75 text-gray-900 p-24 leading-none"
      >
        {{ data.hero_title }}
      </h1>
    </div>
    <div
      class="hero-image-wrapper 
      row-span-1 col-span-1 
      sticky top-0 z-30
      opacity-75
      max-w-sm p-16
      mx-auto"
    >
      <g-image src="~/assets/hand-eva-goncalves.png" class="w-56 h-auto z-20">
      </g-image>
    </div>
    <WorkTogether
      class="md:col-start-1 md:col-span-1 md:row-start-3 z-0 bg-background py-48 px-6"
    />
    <div
      class=" z-30 
      row-start-3 row-span-3 md:row-start-2 md:col-start-2
      bg-gray-200 text-gray-800 
      opacity-95
      px-6 md:px-16 
      py-16 space-y-16
      "
    >
      <p
        v-for="(sub, i) in data.hero_subtitle"
        :key="sub[i]"
        class="text-2xl md:text-3xl text-opacity-75 leading-relaxed"
      >
        {{ sub }}
      </p>
    </div>
  </div>
</template>

<script>
import data from '@/data/theme.json'
import WorkTogether from '@/components/WorkTogether.vue'

export default {
  name: 'Hero',
  components: {
    WorkTogether,
  },
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
/*
styles for text with bg image clip
  background-image: radial-gradient(
    circle at top right,
    #845ec2,
    #465db1,
    #ff6f91,
    #ff9671,
    #ffc75f,
    #f9f871
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 400%;
  animation: bg-animation 20s infinite alternate;
*/

.hero-heading-wrapper {
  /* background-image: radial-gradient(
    circle at top right,
    #2f3542,
    #ced6e0,
    #57606f,
    #dfe4ea,
    #747d8c,
    #a4b0be
  ); */
  mix-blend-mode: difference;
  /* background-image: radial-gradient(
    circle at top right,
    #fab1a0,
    #ff7675,
    #fd79a8
  ); */
  background-image: radial-gradient(
    circle at top right,
    #845ec2,
    #465db1,
    #ff6f91,
    #ff9671,
    #ffc75f,
    #f9f871
  );
  background-size: 400%;
  animation: bg-animation 20s infinite alternate;
  h1 {
    width: min-content;
    /* text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); */
  }
}

.hero-image-wrapper {
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
