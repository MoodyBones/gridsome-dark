<template>
  <div
    class="max-w-screen-xl mx-auto pb-40
    grid grid-cols-1 md:grid-cols-2 md:grid-rows-4"
  >
    <div
      class="hero-heading-wrapper 
      row-span-1 col-span-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3
      sticky top-8 z-20
      opacity-25 rounded-sm w-full
      flex items-center justify-start"
    >
      <h1
        class="pl-32 text-7xl md:text-8xl font-display font-bold text-background py-24 leading-10 tracking-tighter"
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
      <g-image src="~/assets/hand-eva-goncalves.png" class="w-56 h-auto z-20">
      </g-image>
    </div>
    <WorkTogether
      class="md:col-start-1 md:col-span-1 md:row-start-3 z-50 bg-background py-48 px-6"
    />
    <div
      class=" z-30 
      row-start-3 row-span-3 md:row-start-2 md:col-start-2
      bg-background
      opacity-95
      px-6 md:px-16 
      py-16 space-y-16
      "
    >
      <p
        v-for="(sub, i) in data.hero_subtitle"
        :key="sub[i]"
        class="text-xl md:text-2xl text-gray-500 leading-relaxed"
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
  mix-blend-mode: difference;

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
  h1 {
    width: min-content;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
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
