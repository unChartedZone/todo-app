import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from './views/Home.vue';
import Todos from './views/Todos.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos,
    },
  ],
});

export default router;
