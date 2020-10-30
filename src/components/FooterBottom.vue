<template>
  <footer class="bg-theme-red relative">
    <div class="clip-path-triangle-left bg-theme-purple opacity-25"></div>
    <div
      class="container p-16 pb-32 md:py-40
      grid grid-cols-1 md:grid-cols-5 md:auto-rows-auto
      gap-y-20 md:gap-x-16 lg:gap-x-20
      lg:max-w-screen-xl mx-auto 
    "
    >
      <div
        class="z-20"
        v-for="(social, index) in data.social"
        :key="`${social.channel}-${index}`"
      >
        <a
          class="link-list-footer"
          :href="
            `https://${social.urlStart}${social.channel}.com/${social.handle}`
          "
        >
          <div class="icon-circle">
            <span class="icon block text-2xl py-3">
              <font-awesome class="" :icon="['fab', `${social.channel}`]" />
            </span>
          </div>
          <span class="text-footer">
            {{ social.text }}
          </span>
          <span class="heading-footer">
            {{ social.channel }}
          </span>
        </a>
      </div>
      <div
        class="z-20 md:row-start-2"
        v-for="(item, index) in data.footer"
        :key="`${item.name}-${index}`"
        :class="item.layoutWide ? 'md:col-span-4 -col-end-1' : 'col-span-1'"
      >
        <a class="link-list-footer" :href="item.url">
          <span class="text-footer">
            {{ item.text }}
          </span>
          <span class="heading-footer">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import data from '@/data/theme.json'
import HeartSVG from '@/assets/heart.svg'

export default {
  name: 'FooterBottom',
  components: {
    HeartSVG,
  },
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  @apply antialiased text-theme-white;
}

.heading-footer {
  @apply font-display text-2xl capitalize tracking-wider pt-4;
}

.text-footer {
  @apply text-lg tracking-wide leading-relaxed text-center md:text-left;
}
.link-list-footer {
  @apply flex flex-col items-center md:items-start;
  .icon {
    transform: translate3d(
      0,
      0,
      0
    ); // this tells it to be hardware accelerated from the beginning
    perspective: 1000px; // this will hardware accelerate
    backface-visibility: hidden;
    @apply transition-all duration-500 ease-out scale-90;
  }
  &:hover {
    .icon-circle {
      @apply transform opacity-90 scale-110 -translate-y-1;
    }
  }
}

.icon-circle {
  transform: translate3d(
    0,
    0,
    0
  ); // this tells it to be hardware accelerated from the beginning
  perspective: 1000px; // this will hardware accelerate
  backface-visibility: hidden;
  @apply transition-all duration-500 ease-in-out;
  @apply border-2 flex items-center justify-center w-12 h-12 rounded-full mb-3 opacity-75;
}
</style>
