import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [{

        path: '/Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {

        path: '/Home',
        component: () => import('../views/Home.vue')
      },
      {

        path: '/Trading',
        component: () => import('../views/Trading.vue'),                      
      },
      {

        path: '/TradingList',
        component: () => import('../views/TradingList.vue')
      },
      {
        path: '/TradingNew',
        component: () => import('../views/TradingNew.vue')
      },
      {

        path: '/Notifications',
        component: () => import('../views/Notifications.vue')
      },
      {

        path: '/MyData',
        component: () => import('../views/MyData.vue')
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router