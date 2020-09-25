<template>
  <footer class="footer">
    <div class="to-top link-bounce" @click="scrollTopTop">
      <svg
        class="w-10 h-10"
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
        :key="index"
        :href="`https://${social.channel}.com/${social.handle}`"
      >
        <font-awesome :icon="['fab', `${social.channel}`]" />
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
  padding: 0 2rem;
  z-index: 100;
  mix-blend-mode: difference;
}
.to-top {
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  line-height: 0;
  padding: 1rem 0.5rem;
}
.social {
  display: flex;
  .channel {
    display: block;
    margin-right: 1rem;
    padding: 1rem 0.75rem;
    &:last-of-type {
      margin: 0;
    }
  }
}

.link-bounce {
  @apply border-transparent transition-all duration-500 ease-in-out;
  &:hover {
    @apply transform scale-150 -translate-y-2 border-transparent;
  }
}
</style>
