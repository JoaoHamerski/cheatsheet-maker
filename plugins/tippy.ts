import VueTippy, { setDefaultProps } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTippy)

  setDefaultProps({
    theme: 'custom',
    duration: 200,
  })
})
