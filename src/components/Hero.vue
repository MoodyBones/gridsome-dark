<template>
  <div class="max-w-screen-sm mx-auto pb-20">
    <h1 class="text-6xl" v-html="data.hero_title"></h1>
    <h2 class="text-2xl font-normal text-purple-300">
      {{ data.hero_subtitle1 }}
      <br />
      <br />
      {{ data.hero_subtitle2 }}
      <br />
      <br />
      {{ data.hero_subtitle3 }}
      <br />
    </h2>
  </div>
</template>

<script>
import data from '@/data/theme.json'

export default {
  name: 'Hero',
  data() {
    return {
      data,
    }
  },
}
</script>
