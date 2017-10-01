import Vue from 'vue'
import Router from 'vue-router'

import AppDashboard from '@/components/app-dashboard/AppDashboard'
import AppDetails from '@/components/app-details/AppDetails'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'AppDashboard',
        component: AppDashboard
    }, {
        path: '/:type/:id',
        name: 'AppDetails',
        component: AppDetails,
        props: true
    }]
})
