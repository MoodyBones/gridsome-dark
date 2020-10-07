<template>
  <footer class="bg-theme-red relative">
    <div class="clip-path-purple opacity-25"></div>
    <div
      class="social grid grid-cols-1 md:grid-cols-5
      col-gap-10 row-gap-10
      p-16 md:p-36
      max-w-screen-lg mx-auto 
    "
    >
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
          <span class="tracking-wide leading-relaxed">
            {{ social.text }}
          </span>
          <span class="text-xl capitalize tracking-wide pt-2">
            {{ social.channel }}
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import data from '@/data/theme.json'

export default {
  name: 'NewFooter',
  data() {
    return {
      data,
    }
  },
}
</script>
