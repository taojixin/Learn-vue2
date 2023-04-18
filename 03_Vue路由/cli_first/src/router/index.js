//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

import Message from '../components/Message'

// 路由的懒加载
// const Home = () => import('../components/Home');
// const About = () => import('../components/About');
// const User = () => import('../components/User');


// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // 重定向 路由的默认路径
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    // 懒加载
    // component: () => import('../components/Home')
    children: [
      {
        path: '/message',
        component: Message
      },
      {
        path: '/count',
        component: () => import('../components/Count'),
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/profile',
    component: () => import('../components/Profile'),
  }
]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 3.将router对象传入Vue实例
export default router