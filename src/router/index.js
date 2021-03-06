import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Home,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "details" */ '../views/details/details.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/about/about.vue'),
  },
  {
    path: '/podcasts/:category?',
    name: 'podcasts',
    component: () =>
      import(
        /* webpackChunkName: "list-all-podcast" */ '../views/list-all-podcasts/list-all-podcasts.vue'
      ),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () =>
      import(
        /* webpackChunkName: "list-all-favorites" */ '../views/list-all-favorites/list-all-favorites.vue'
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
