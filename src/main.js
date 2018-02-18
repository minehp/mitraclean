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
    fontColor: '#4E342E',
    titleColor: '#00796B'
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
