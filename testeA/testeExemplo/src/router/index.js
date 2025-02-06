import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import DeviceDetails from '@/views/DeviceDetails.vue';
import { useMainStore } from '@/stores/store';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/details/:id', component: DeviceDetails, meta: { requiresAuth: true }, name: 'DeviceDetails' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const store = useMainStore();
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;