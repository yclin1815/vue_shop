import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'Products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true }
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ]
})
