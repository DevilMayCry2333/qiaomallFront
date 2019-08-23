import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import GoodEdit from '@/components/GoodEdit'
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
        }
    ],
    linkActiveClass: "active-router",
    linkExactActiveClass: "exact-router"
})