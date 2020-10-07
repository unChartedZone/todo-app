/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import { auth } from './firebase';
import store from './store';

// Views
import Home from './views/Home.vue';
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
      name: 'home',
      component: Home,
    },
    {
      path: '/todos/:id',
      name: 'todos',
      component: Todos,
      meta: {
        requiresAuth: true,
      },
      async beforeEnter(to, from, next) {
        await store.dispatch('loadCollections');
        next();
      },
    },
    {
      path: '/todos',
      redirect: { name: 'todos', params: { id: '0' } },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/dev',
      name: 'dev',
      component: Dev,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { currentUser } = auth;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  else if ((to.name === 'login' || to.name === 'home') && currentUser) {
    next({ name: 'todos', params: { id: '0' } });
  } else next();
});

export default router;
