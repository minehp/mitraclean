import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import AboutUsPage from '@/components/AboutUsPage';
import ServicesPage from '@/components/ServicesPage';
import ContactPage from '@/components/ContactPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mitraclean/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/mitraclean/about-us',
      name: 'About Us',
      component: AboutUsPage
    },
    {
      path: '/mitraclean/services',
      name: 'Services',
      component: ServicesPage
    },
    {
      path: '/mitraclean/contact',
      name: 'Contact',
      component: ContactPage
    },
  ],
  mode: 'history'
})
