<template>
  <div
    class="text-3xl md:text-4xl text-gray-500 font-display text-center
  flex flex-col items-center space-y-4 opacity-95"
  >
    <Smiley class="w-16 h-16" />
    <span class="block">{{ message }}</span>
    <a class="opacity-50 uppercase font-bold" href="`${link}${contact}`">
      <span class="">
        {{ contact }}
      </span>
    </a>
  </div>
</template>

<script>
import Smiley from '@/assets/smiley.svg'

export default {
  name: 'WorkTogether',
  data() {
    return {
      message: 'Want to work together?',
      contact: 'jones.mel@gmail.com',
      link: 'mailto:',
    }
  },
  components: {
    Smiley,
  },
}
</script>

<style lang="scss" scoped>
a {
  span {
    background: radial-gradient(
      circle at top right,
      #cd84f1,
      #ffcccc,
      #ff4d4d,
      #ffaf40
    );

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    background-size: 200%;
    animation: bg-animation 20s infinite alternate;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
}
@keyframes bg-animation {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
</style>
