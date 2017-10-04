import Vue from 'vue'
import Router from 'vue-router'

import AppDashboard from '@/components/app-dashboard/AppDashboard'
import AppMovie from '@/components/app-details/AppMovie'
import AppShow from '@/components/app-details/AppShow'
import AppPerson from '@/components/app-details/AppPerson'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'AppDashboard',
        component: AppDashboard
    }, {
        path: '/movie/:id',
        name: 'AppMovie',
        component: AppMovie,
        props: true
    }, {
        path: '/show/:id',
        name: 'AppShow',
        component: AppShow,
        props: true
    }, {
        path: '/person/:id',
        name: 'AppPerson',
        component: AppPerson,
        props: true
    }]
})
