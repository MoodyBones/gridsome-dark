<template>
  <section id="faq-section" class="grid justify-center bg-gray-200 pb-40">
    <h2
      class="text-8xl tracking-wide font-display font-bold text-background text-center my-24"
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
          self-center leading-snug
        pr-6 py-4 "
        >
          {{ question[0] }}
        </span>
        <div
          :class="isOpen ? 'block' : 'hidden'"
          id="answer"
          class="bg-gray-100 col-span-2 
          py-4 space-y-6
        grid grid-cols-1fr-11fr
        text-lg md:text-xl tracking-wide leading-loose pr-6"
        >
          <p class="col-start-2 ">
            {{ question[1] }}
          </p>
          <p v-if="question[2]" class="col-start-2">
            {{ question[2] }}
          </p>
          <p v-if="question[3]" class="col-start-2 ">
            {{ question[3] }}
          </p>
          <p v-if="question[4]" class="col-start-2 ">
            {{ question[4] }}
          </p>
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
