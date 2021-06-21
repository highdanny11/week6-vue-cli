import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Products',
        component: () =>
          import('../views/Products.vue')
      },
      {
        path: 'Product/:id',
        component: () =>
          import('../views/Product.vue')
      },
      {
        path: 'CartsList',
        name: 'CartsList',
        component: () =>
          import('../views/CartsList.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import('../views/NotFound.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () =>
      import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () =>
      import('../views/Backstage/Manager.vue'),
    children: [
      {
        path: '',
        component: () =>
          import('../views/Backstage/products.vue')
      },
      {
        path: 'orderlist',
        component: () =>
          import('../views/Backstage/Orderlist.vue')
      },
      {
        path: 'coupons',
        component: () =>
          import('../views/Backstage/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
