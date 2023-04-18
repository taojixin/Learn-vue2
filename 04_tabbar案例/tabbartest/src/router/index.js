import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/Home')
const Category = () => import('../view/category/Category')
const Shopcart = () => import('../view/shopcart/Shopcart')
const Profile = () => import('../view/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
// 这里的bug找了好久，只能是routes而不是routers，因为routes是一个配置
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


// 3.导出router
export default router