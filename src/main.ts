import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faLock,
  faBolt,
  faLayerGroup,
  faCalendarAlt,
  faTasks,
  faFileAlt,
  faCalculator,
  faImage,
  faVideo,
  faCloud,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCubes,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faLock,
  faBolt,
  faLayerGroup,
  faCalendarAlt,
  faTasks,
  faFileAlt,
  faCalculator,
  faImage,
  faVideo,
  faCloud,
  faChartLine,
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
