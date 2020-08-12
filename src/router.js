import Vue from 'vue';
import Router from 'vue-router';

// Views
import Todos from './views/Todos.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Dev from './views/Dev.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/dev',
      name: 'Dev',
      component: Dev,
    },
  ],
});

export default router;
