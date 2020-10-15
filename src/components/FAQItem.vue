<template>
  <article
    @click="toggleQuestionAnswer"
    :class="item.isOpen ? 'shadow-none' : 'shadow-solid-theme-black'"
    class=" grid grid-cols-1fr-11fr
         bg-gray-300
         cursor-pointer
         mb-6 mx-2 md:mx-0
         sm:max-w-screen-sm md:max-w-screen-md"
  >
    <span class="py-6 self-center">
      <Chevron
        :class="item.isOpen ? 'rotate-90' : 'rotate-0'"
        class="transition ease-out duration-200 
        transform w-8 md:w-12 h-8 md:h-12 mx-3"
      />
    </span>
    <span
      class="font-display font-bold text-2xl md:text-3xl 
          self-center leading-snug
        pr-6 py-4 "
    >
      {{ item.question }}
    </span>
    <div
      v-show="item.isOpen"
      class="bg-white col-span-2 
          pt-6 pb-10 space-y-6
        grid grid-cols-1fr-11fr
        text-lg md:text-xl tracking-wide leading-loose pr-6
        sm:max-w-screen-sm md:max-w-screen-md"
    >
      <p
        v-for="(answer, answerIndex) in item.answer"
        :key="`answer-${index}-${answerIndex}`"
        class="col-start-2 "
      >
        {{ answer }}
      </p>
    </div>
  </article>
</template>

<script>
import Chevron from '@/assets/chevron-right.svg'

export default {
  name: 'FAQItem',
  components: {
    Chevron,
  },
  methods: {
    toggleQuestionAnswer() {
      this.item.isOpen ? (this.item.isOpen = false) : (this.item.isOpen = true)
    },
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>
