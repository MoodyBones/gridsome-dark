<template>
  <div
    class="text-3xl md:text-4xl text-gray-500 font-display text-center
  flex flex-col items-center space-y-4 opacity-95"
  >
    <Smiley class="w-16 h-16" />
    <span class="block">{{ message }}</span>
    <a class="text-primary uppercase font-bold" href="`${link}${contact}`">
      {{ contact }}
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
