<template>
  <header class="header">
    <g-link
      to="/"
      tag="h1"
      class="name"
      :class="{ first: data.first_letter_only }"
    >
      <span
        class="word"
        :class="{ 'first-line': index === 0 && multiLine }"
        v-for="(word, index) in siteName"
        :key="index"
      >
        <span class="first-letter" v-if="data.first_letter_only && word[0]">{{
          word[0]
        }}</span>
        <span class="letter" v-if="data.first_letter_only">{{
          word.slice(1)
        }}</span>
        <span v-if="!data.first_letter_only">{{ word }}</span>
      </span>
    </g-link>
    <div class="contact flex">
      <svg
        class="smiley w-6 h-6 mr-2 opacity-0 transition-opacity ease-in duration-150"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <a class="link" :href="`mailto:${data.email}`">say hi !</a>
      <!-- <DarkLightToggle /> -->
    </div>
  </header>
</template>

<script>
import data from '@/data/theme.json'
// import DarkLightToggle from '~/components/DarkLightToggle.vue'

export default {
  name: 'Header',
  data() {
    return {
      data,
    }
  },
  computed: {
    siteName() {
      return data.header_title.split(' ')
    },
    multiLine() {
      return this.siteName.length >= 1
    },
  },
  // components: {
  //   DarkLightToggle,
  // },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4rem 2rem 5rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 100;
  opacity: 1;
  mix-blend-mode: difference;
  transition: opacity 0.5s ease;
  &.hidden {
    opacity: 0;
  }
  .contact {
    &:hover {
      .smiley {
        @apply opacity-100;
      }
    }
  }
}
.name {
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  margin: 0;
  cursor: pointer;
  .word {
    margin-right: 0.5rem;
    &.first-line {
      display: block;
      margin-bottom: 0.5rem;
    }
    &:last-of-type {
      margin: 0;
    }
  }
  &.first {
    .letter {
      transition: opacity 0.15s ease;
      opacity: 0;
    }
    .first-letter {
      opacity: 1;
    }
    &:hover {
      .letter {
        opacity: 1;
      }
    }
  }
}
</style>
