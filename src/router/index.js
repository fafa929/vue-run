import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
// import AxiosTest from '@/components/AxiosTest'

// import * as firebase from 'firebase/app'
// import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
      // meta: {
      //   requiresAuth: true,
      //   requiresGuest: true
      // }
    }
    // {
    //   path: '/axios',
    //   name: 'axios',
    //   component: AxiosTest
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   const isAuthenticated = firebase.auth().currentUser
//   if (requiresAuth && !isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
