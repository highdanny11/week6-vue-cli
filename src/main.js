import { createApp } from 'vue'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
Object.keys(AllRules).forEach(rule => {
  if (rule !== 'default') {
    defineRule(rule, AllRules[rule])
  }
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW')
const app = createApp(App)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)
app.use(router)
app.use(Loading)
app.use(VueAxios, axios)
app.mount('#app')
