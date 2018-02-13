import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import ('vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#E6EE9C',
    secondary: '#F0F4C3',
    accent: '#8c9eff',
    error: '#b71c1c',
    fontColor: '#4E342E',
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
