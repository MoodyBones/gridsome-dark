<template>
  <div
    class="max-w-screen-xl mx-auto pb-40 md:pr-24 
    grid grid-cols-1 md:grid-cols-3 md:grid-flow-row gap-12"
  >
    <div
      class="hero-heading-wrapper 
      row-span-1 col-span-1 md:row-span-2 md:col-span-2
      sticky top-0 z-30
      opacity-50 rounded-sm w-full
      flex items-center justify-center"
    >
      <h1
        class="text-6xl lg:text-9xl font-mono font-black text-center text-opacity-75 text-gray-900 p-24"
        v-html="data.hero_title"
      ></h1>
    </div>
    <div
      class="hero-image-wrapper 
      row-span-1 col-span-1 
      sticky top-0 z-20
      opacity-75
      max-w-sm p-16
      mx-auto"
    >
      <g-image src="~/assets/hand-eva-goncalves.png" class="w-56 h-auto z-20">
      </g-image>
    </div>
    <div
      class="hero-subheading-wrapper z-50 
      row-span-3 md:col-start-3 lg:col-span-1
      rounded-sm bg-gray-100 text-gray-900 
      opacity-95
      px-4 py-10 md:px-10 
      flex justify-center"
    >
      <h2
        class="text-lg md:text-xl max-w-sm font-mono font-normal text-opacity-75"
      >
        {{ data.hero_subtitle1 }}
        <br />
        <br />
        {{ data.hero_subtitle2 }}
        <br />
        <br />
        {{ data.hero_subtitle3 }}
        <br />
        <br />
        {{ data.hero_subtitle4 }}
      </h2>
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
  background-image: radial-gradient(
    circle at top right,
    #2f3542,
    #ced6e0,
    #57606f,
    #dfe4ea,
    #747d8c,
    #a4b0be
  );
  mix-blend-mode: difference;
  /* background-image: radial-gradient(
    circle at top right,
    #fab1a0,
    #ff7675,
    #fd79a8
  ); */
  /* background-image: radial-gradient(
    circle at top right,
    #845ec2,
    #465db1,
    #ff6f91,
    #ff9671,
    #ffc75f,
    #f9f871
  ); */
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

.hero-subheading-wrapper {
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
