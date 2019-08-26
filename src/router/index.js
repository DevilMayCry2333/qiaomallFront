import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import GoodEdit from '@/components/GoodEdit'
import OrderDetail from '@/components/OrderDetail'
import CateEdit from '@/components/CateEdit'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/GoodEdit',
            name: 'GoodEdit',
            component: GoodEdit
        },
        {
            path: '/OrderDetail',
            name: 'OrderDetail',
            component: OrderDetail
        },
        {
            path: '/CateEdit',
            name: 'CateEdit',
            component: CateEdit
        }



    ],
    linkActiveClass: "active-router",
    linkExactActiveClass: "exact-router"
})