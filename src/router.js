import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue'
import CountryDetails from './views/CountryDetails.vue'

const routes = [
  {
    path: '/:countryID',
    name: 'details',
    component: CountryDetails
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
];

export default createRouter({
  history: createWebHistory('/'),
  routes
  
});