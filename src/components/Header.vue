<template>
  <header
    class="header z-50 flex justify-between items-start px-5 sm:px-10 py-6"
  >
    <g-link
      to="/"
      tag="h1"
      class="name font-mono lowercase tracking-wide"
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
    <div class="contact flex pt-2">
      <Smiley
        class="smiley w-8 h-8 mr-3 opacity-0 transition-opacity ease-in duration-150"
      />
      <a class="link uppercase" :href="`mailto:${data.email}`">say hi !</a>
      <!-- <DarkLightToggle /> -->
    </div>
  </header>
</template>

<script>
import data from '@/data/theme.json'
import Smiley from '@/assets/smiley.svg'

export default {
  name: 'Header',
  data() {
    return {
      data,
    }
  },
  components: {
    Smiley,
  },
  computed: {
    siteName() {
      return data.header_title.split(' ')
    },
    multiLine() {
      return this.siteName.length >= 1
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
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
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
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
