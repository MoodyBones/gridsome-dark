<template>
  <footer
    class="footer px-2 md:px-8
  "
  >
    <div class="to-top link-bounce" @click="scrollTopTop">
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        ></path>
      </svg>
    </div>
    <div class="social">
      <a
        class="channel link-bounce text-theme-red z-0"
        v-for="(social, index) in data.social"
        :key="index"
        :href="`https://${social.channel}.com/${social.handle}`"
      >
        <div
          class="flex items-center justify-center w-12 h-12 bg-theme-red rounded-full opacity-90 shadow-sm"
        >
          <font-awesome :icon="['fab', `${social.channel}`]" />
        </div>
      </a>
    </div>
  </footer>
</template>

<script>
import data from '@/data/theme.json'

export default {
  data() {
    return {
      data,
    }
  },
  methods: {
    scrollTopTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss">
.footer {
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 100;
  /* mix-blend-mode: difference; */
}
.to-top {
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  line-height: 0;
  padding: 0.5rem 0.25rem;
}
.social {
  display: flex;
  .channel {
    display: block;
    margin-right: 1rem;
    padding: 0.5rem 0.25rem;
    &:last-of-type {
      margin: 0;
    }
    svg {
      @apply w-6 h-6 text-theme-black opacity-90 transition-all duration-500 ease-in-out;
    }
  }
}

.link-bounce {
  @apply transition-all duration-500 ease-in-out;
  &:hover {
    @apply transform scale-110 -translate-y-2;
    svg {
      @apply opacity-100;
    }
  }
}
</style>
