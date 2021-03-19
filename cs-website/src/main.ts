import { createApp } from 'vue'
import App from './App.vue'
import hljs from "highlight.js" 

createApp(App)
    .use(hljs.vuePlugin)
    .mount('#app')
