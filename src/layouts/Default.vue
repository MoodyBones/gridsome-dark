<template>
  <div class="layout">
    <Header />
    <slot />
    <FooterFloating />
  </div>
</template>

<script>
import Header from '@/components/Header'
import FooterFloating from '@/components/FooterFloating'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
