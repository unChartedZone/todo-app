import Vue from 'vue';
import Router from 'vue-router';
import { auth } from './firebase';

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
      redirect: { name: 'todos', params: { id: '0' } },
    },
    {
      path: '/todos/:id',
      name: 'todos',
      component: Todos,
      meta: {
        requiresAuth: true,
      },
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
  console.log('Router, Current User: ', currentUser);
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  else next();
});

export default router;
