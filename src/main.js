import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.scss'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)

app.use(autoAnimatePlugin)

app.mount('#app')
