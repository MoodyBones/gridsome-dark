<template>
  <section id="faq-section" class="grid justify-center bg-gray-200 pb-40">
    <h2
      class="text-8xl tracking-wide font-display font-bold text-background text-center my-24"
    >
      {{ data.faq.title | capitalizeHeading }}
    </h2>
    <FAQItem
      v-for="(item, index) in data.faq.questionList"
      :key="`key-${index}`"
      :item="item"
      :index="index"
    >
    </FAQItem>
  </section>
</template>

<script>
import data from '@/data/theme.json'
import FAQItem from '@/components/FAQItem'

export default {
  name: 'FAQSection',
  components: {
    FAQItem,
  },
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
