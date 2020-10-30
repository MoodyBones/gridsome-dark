<template>
  <section id="faq-section" class=" bg-gray-200 py-56 sm:px-10">
    <div
      class="container mx-auto
    grid justify-center"
    >
      <h2
        class="text-7xl md:text-8xl tracking-wide font-display font-bold text-center md:text-left mb-24"
      >
        {{ data.faq.title | capitalizeHeading }}
        <span class="inline-block">
          <ChatSVG
            class="icon-faq transition-transform ease-out duration-300
          transform w-16 h-16 md:w-20 md:h-20"
          />
        </span>
      </h2>
      <FAQItem
        v-for="(item, index) in data.faq.questionList"
        :key="`key-${index}`"
        :item="item"
        :index="index"
      >
      </FAQItem>
    </div>
  </section>
</template>

<script>
import data from '@/data/theme.json'
import FAQItem from '@/components/FAQItem'
import ChatSVG from '@/assets/chat.svg'

export default {
  name: 'FAQSection',
  components: {
    FAQItem,
    ChatSVG,
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

<style lang="scss" scoped>
.icon-faq {
  perspective: 1000px; // this will hardware accelerate
  backface-visibility: hidden;
}

#faq-section:hover {
  .icon-faq {
    @apply md:scale-125;
  }
}
</style>
