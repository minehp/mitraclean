import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import HelloWorld from '@/components/HelloWorld';
import TemplatePage from '@/components/TemplatePage';
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TemplatePage',
      component: TemplatePage
    }
  ]
})
