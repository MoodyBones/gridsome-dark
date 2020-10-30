// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/main.scss')
import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faCodepen,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import VueScrollTo from 'vue-scrollto'

config.autoAddCss = false
library.add(faGithub, faTwitter, faCodepen, faLinkedin, faSpotify)

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease',
  })
}
