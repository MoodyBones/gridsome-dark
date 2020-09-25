<template>
  <div class="text-3xl font-display">
    <span class="block">{{ message }}</span>
    <a class="text-primary font-bold" href="`${link}${contact}`"
      ><span v-html="rightArrow"></span><span class="">{{ contact }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'WorkTogether',
  data() {
    return {
      message: 'Want to work together?',
      contact: 'jones.mel@gmail.com',
      link: 'mailto:',
      rightArrow:
        '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>',
    }
  },
}
</script>
