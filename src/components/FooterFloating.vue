<template>
  <footer
    class="footer px-2 md:px-8 flex items-center justify-between
  "
  >
    <div
      class="to-top link-bounce icon-circle bg-theme-red"
      @click="scrollTopTop"
    >
      <svg
        class="w-6 h-6 opacity-90"
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
        class="channel link-bounce"
        v-for="(social, index) in data.social"
        :key="`${social.channel}-${index}`"
        :href="
          `https://${social.urlStart}${social.channel}.com/${social.handle}`
        "
      >
        <div class="icon-circle bg-theme-red">
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
  bottom: 1rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 100;
}
.to-top {
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  line-height: 0;
  padding: 0 0.5rem;
}
.social {
  display: flex;
  .channel {
    display: block;
    padding: 0 0.5rem;
    &:last-of-type {
      padding-right: 0;
    }
    svg {
      @apply w-5 h-5 opacity-90 transition-all duration-500 ease-in-out;
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

.icon-circle {
  @apply transition-all duration-500 ease-in-out;
  @apply flex items-center justify-center w-12 h-12 rounded-full opacity-95 md:opacity-80 md:hover:opacity-100 shadow-sm text-theme-white;
}
</style>
