import Vue from 'vue';
import Router from 'vue-router';
import VueHead from 'vue-head'
import HomePage from '@/components/HomePage';
import AboutUsPage from '@/components/AboutUsPage';
import ServicesPage from '@/components/ServicesPage';
import ContactPage from '@/components/ContactPage';

Vue.use(VueHead)
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUsPage
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesPage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage
    },
  ],
  mode: 'history'
})
