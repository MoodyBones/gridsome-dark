<template>
  <footer class="bg-theme-red relative">
    <div class="clip-path-purple opacity-25"></div>
    <div
      class="social grid grid-cols-1 grid-rows-footer-6 md:grid-cols-5 md:grid-rows-1
      col-gap-10 row-gap-10
      p-16 md:p-36
      max-w-screen-lg mx-auto 
    "
    >
      <div class="z-20">
        <a
          class="flex flex-col pointer link-bounce-footer"
          :href="data.thanks.illustration.url"
        >
          <span class="block pt-3 pb-4">
            <HeartSVG class="w-10 h-10" />
          </span>
          <span class="text-lg tracking-wide leading-relaxed">
            {{ data.thanks.illustration.text }}
          </span>
          <span class="text-2xl capitalize tracking-wide pt-2">
            {{ data.thanks.illustration.name }}
          </span>
        </a>
      </div>
      <div
        class="z-20"
        v-for="(social, index) in data.social"
        :key="`${social.channel}-${index}`"
      >
        <a
          class="flex flex-col pointer link-bounce-footer"
          :href="
            `https://${social.urlStart}${social.channel}.com/${social.handle}`
          "
        >
          <span class=" block text-3xl py-3">
            <font-awesome class="" :icon="['fab', `${social.channel}`]" />
          </span>
          <span class="text-lg tracking-wide leading-relaxed">
            {{ social.text }}
          </span>
          <span class="text-2xl capitalize tracking-wide pt-2">
            {{ social.channel }}
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
