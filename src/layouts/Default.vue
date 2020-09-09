<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=Open+Sans:wght@400;600;800&display=swap');

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Open Sans', sans-serif;
  }
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background-color: #131313;
  color: white;
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1.5px solid transparent;
  padding-bottom: 0.25rem;
  transition: border 0.15s ease;
  &:hover {
    border-bottom: 1.5px solid currentColor;
  }
}

h1,
h2,
h3,
h4 {
  font-family: 'IBM Plex Mono', monospace;
}
</style>
