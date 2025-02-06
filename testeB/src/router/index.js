import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
      meta: {
        requiresAuth: true,
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if(to.meta.requiresAuth && !isAuthenticated) {
    next({path: "/login", query: {from: to.path}});
  }
  else {
    next();
  }

  next();
});

export default router
