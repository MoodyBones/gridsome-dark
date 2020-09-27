<template>
  <section class="faq grid justify-center">
    <h2 class="text-6xl tracking-wide">
      {{ data.faq.title | capitalizeHeading }}
    </h2>
    <div class="faq-list">
      <div class="faq-item"></div>
      <div class="faq-item"></div>
      <div class="faq-item"></div>
      <div class="faq-item"></div>
    </div>
  </section>
</template>

<script>
import data from '@/data/theme.json'

export default {
  data() {
    return {
      data,
    }
  },
  filters: {
    capitalizeHeading: function(value) {
      if (!value) return ''
      value = value.toString()
      const startWord = value.slice(0, -1)
      const lastLetter = value.slice(-1)
      return startWord.toUpperCase() + lastLetter
    },
  },
}
</script>
