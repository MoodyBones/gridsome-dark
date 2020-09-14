<template>
  <div
    class="max-w-screen-xl mx-auto pb-40 grid grid-cols-1 md:grid-cols-2 md:grid-flow-row gap-32"
  >
    <div
      class="hero-heading-wrapper flex items-center justify-center rounded-sm w-full row-span-1 col-span-1 md:row-span-2"
    >
      <h1
        class="text-4xl md:text-6xl font-mono font-black leading-none tracking-tight text-center text-gray-100 py-20"
        v-html="data.hero_title"
      ></h1>
    </div>
    <div
      class="hero-image-wrapper max-w-sm row-span-1 col-span-1 flex justify-center"
    >
      <g-image
        src="~/resources/hand-eva-goncalves.png"
        width="500"
        class="w-56 h-auto"
      >
      </g-image>
    </div>
    <div class="hero-subheading-wrapper row-span-2 col-span-1">
      <h2
        class="text-lg md:text-2xl max-w-sm font-mono font-normal text-gray-200 px-8 md:pl-0"
      >
        {{ data.hero_subtitle1 }}
        <br />
        <br />
        {{ data.hero_subtitle2 }}
        <br />
        <br />
        {{ data.hero_subtitle3 }}
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
  position: sticky;
  top: 0px;
  z-index: 50;
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
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
}

.hero-image-wrapper {
  animation: shimmy 5s infinite alternate;
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
