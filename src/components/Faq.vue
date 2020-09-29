<template>
  <section id="faq-section" class="grid justify-center bg-gray-200">
    <h2
      class="text-8xl tracking-wide font-display font-bold text-background my-32"
    >
      {{ data.faq.title | capitalizeHeading }}
    </h2>
    <div class="faq-list max-w-screen-md">
      <div
        v-for="(question, i) in data.faq.questions"
        :key="question[i]"
        @click="isOpen = !isOpen"
        :class="isOpen ? 'shadow-none' : 'shadow-solid-black'"
        class=" grid grid-cols-1fr-11fr
         bg-gray-300
         text-background cursor-pointer
         mb-6 mx-2 md:mx-0"
      >
        <span id="chevron" class="py-6 self-center">
          <Chevron
            :class="isOpen ? 'rotate-90' : 'rotate-0'"
            class=" transform w-6 md:w-10 h-6 md:h-10 mx-3"
          />
        </span>
        <span
          id="question"
          class="font-display font-bold text-xl md:text-3xl 
          self-center
        pr-6 py-3 "
        >
          {{ question[0] }}
        </span>
        <div
          :class="isOpen ? 'block' : 'hidden'"
          id="answer"
          class="bg-gray-100 col-span-2 
          py-4 
        grid grid-cols-1fr-11fr"
        >
          <span class="col-start-2 text-xl tracking-wide leading-loose pr-6 ">
            {{ question[1] }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from '@/data/theme.json'
import Chevron from '@/assets/chevron-right.svg'

export default {
  data() {
    return {
      data,
      isOpen: false,
    }
  },
  components: {
    Chevron,
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
