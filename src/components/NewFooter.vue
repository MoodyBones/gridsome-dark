<template>
  <footer class="bg-theme-red relative">
    <div class="clip-path-purple opacity-25"></div>
    <div
      class="container p-16 md:py-40
      grid grid-cols-1 md:grid-cols-5 md:grid-rows-2
      col-gap-10 row-gap-20
      lg:max-w-screen-xl mx-auto 
    "
    >
      <div
        class="z-20"
        v-for="(social, index) in data.social"
        :key="`${social.channel}-${index}`"
      >
        <a
          class="flex flex-col items-start pointer link-bounce-footer"
          :href="
            `https://${social.urlStart}${social.channel}.com/${social.handle}`
          "
        >
          <span class="icon block text-3xl py-3">
            <font-awesome class="" :icon="['fab', `${social.channel}`]" />
          </span>
          <span class="text-lg-footer">
            {{ social.text }}
          </span>
          <span class="heading-2xl-footer">
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
        <a class="flex flex-col pointer link-bounce-footer" :href="item.url">
          <span class="text-lg-footer">
            {{ item.text }}
          </span>
          <span class="heading-2xl-footer">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>
    <!-- <div
      v-for="(value, index) in data.footerText"
      :key="index"
      class="z-20 max-w-screen-lg mx-auto text-3xl"
    >
      {{ value[0] }}
    </div> -->
    <!--       "icon": "<svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"></path></svg>"
 -->
  </footer>
</template>

<script>
import data from '@/data/theme.json'
import HeartSVG from '@/assets/heart.svg'

export default {
  name: 'NewFooter',
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
.heading-2xl-footer {
  @apply font-display text-2xl capitalize tracking-wide pt-2;
}

.text-lg-footer {
  @apply text-lg tracking-wide leading-relaxed;
}
.link-bounce-footer {
  .icon {
    @apply transition-all duration-500 ease-out;
  }
  &:hover {
    .icon {
      @apply transform scale-110 -translate-y-2;
    }
  }
}
</style>
