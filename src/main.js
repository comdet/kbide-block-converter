import Vue from 'vue'
import App from "./App.vue";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import 'font-awesome/css/font-awesome.css'
Vue.config.productionTip = false

import ConvertPage from './ConvertPage'

Vue.use(Vuetify,{
  customProperties: true,
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'fa4',
});

Vue.component('convert-page', ConvertPage);

new Vue({
  render: h => h(App),
}).$mount("#app");