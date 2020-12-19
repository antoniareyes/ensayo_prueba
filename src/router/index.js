import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/home'],
    meta:{
      login: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
 
  {
      path: '/curso/:id',
      name: 'Curso',
      component: () => import(/* webpackChunkName: "about" */ '../views/Curso.vue'),
      meta:{
        login: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
      meta:{
        login: true
      }
    },
    {
      path: '/admin',
      name: 'Administrador',
      component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
      meta:{
        login: true
      }
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser

  let authRequired = to.matched.some(route => route.meta.login)
  if(!user && authRequired){
    next('/login')
  } else {
    next()
  }
})


export default router
