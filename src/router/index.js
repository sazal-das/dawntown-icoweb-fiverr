import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/modals',
            name: 'Modals',
            component: () => import('../views/Modals.vue')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('../views/Profile.vue')
        }
    ]
})