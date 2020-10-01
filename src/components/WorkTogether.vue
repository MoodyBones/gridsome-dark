<template>
  <div class="text-xl md:text-2xl font-display text-center">
    <span class="block">{{ message }}</span>
    <a class="text-primary font-bold" href="`${link}${contact}`"
      ><RightArrow class="inline mr-4" />
      <span class="">{{ contact }}</span>
    </a>
  </div>
</template>

<script>
import RightArrow from '@/assets/right-arrow.svg'

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
    RightArrow,
  },
}
</script>
