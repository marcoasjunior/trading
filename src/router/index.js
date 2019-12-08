import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/Home',
        component: () => import('../views/Home.vue')
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/Trading',
        component: () => import('../views/Trading.vue')
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/Notifications',
        component: () => import('../views/Notifications.vue')
      }
      
]
  }
]

const router = new VueRouter({
  routes
})

export default router
