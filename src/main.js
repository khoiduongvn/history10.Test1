import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import {createBootstrap} from 'bootstrap-vue-next/plugins/createBootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
createApp(App)
    .use(router)
    .use(createBootstrap())
    .mount('#app')
