import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PageView from '../views/PageView.vue'


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
      path: '/page',
      name: 'page',
      component: PageView,
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
