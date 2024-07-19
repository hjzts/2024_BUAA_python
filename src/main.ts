import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


import App from './App.vue'
import router from './router/index'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
