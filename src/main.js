import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery'
import ''

const app = createApp(App)
app.use(router).mount('#app')
