import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  {
    path: '/child',
    component: () => import('../views/child.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/name',
    components: {
      default: () => import('../views/About.vue'),
      parent: () => import('../views/parent.vue'),
      child: () => import('../views/child.vue')
    }
  },
  {
    path: '/test',
    redirect: '/'
  },
  {
    path: '*',
    component: () => import('../views/error_page.vue')
  }
]

const router = new VueRouter({
  routes
})

const HAS_LOGINED = true
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // to: 要去的页面对象
  // from: 离开的页面对象
  // next: 确认执行跳转
  if (to.path === '/login') {
    if (HAS_LOGINED) {
      next('/')
    } else {
      console.log('已经进入了login页面')
      next()
    }
  } else {
    if (HAS_LOGINED) next()
    else next('/login')
  }
})

export default router
