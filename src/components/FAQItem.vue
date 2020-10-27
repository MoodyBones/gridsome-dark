<template>
  <article
    @click="toggleQuestionAnswer"
    :class="item.isOpen ? 'shadow-none' : 'shadow-solid-theme-black'"
    class=" grid grid-cols-1fr-11fr
         bg-gray-300
         cursor-pointer
         mb-12 mx-3 md:mx-0
         sm:max-w-screen-sm md:max-w-screen-md"
  >
    <span class="py-6 self-center">
      <Chevron
        :class="item.isOpen ? 'rotate-90' : 'rotate-0'"
        class="transition ease-in-out duration-200 
        transform w-10 md:w-12 h-10 md:h-12 mx-4"
      />
    </span>
    <span
      class="font-display font-bold text-2xl md:text-3xl 
          self-center leading-snug
        pr-4 md:pr-6 py-5 md:py-6 "
    >
      {{ item.question }}
    </span>
    <transition name="fade">
      <div
        v-show="item.isOpen"
        :class="[item.isOpen ? '' : blurClass, bkClass]"
        class="bg-white col-span-2 
          pt-8 pb-10 space-y-6
        grid grid-cols-1fr-11fr
        text-lg md:text-2xl tracking-wide leading-loose pr-6 md:pr-12
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
    </transition>
  </article>
</template>

<script>
import Chevron from '@/assets/chevron-right.svg'

export default {
  name: 'FAQItem',
  components: {
    Chevron,
  },
  data() {
    return {
      bkClass: 'bk',
      blurClass: 'blur',
    }
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

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.25s ease-out;
}
.fade-leave-active {
  transition: opacity 0.25s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bk {
  transition: all 0.1s ease-out;
}

.blur {
  filter: blur(2px);
  opacity: 0.4;
}
</style>
