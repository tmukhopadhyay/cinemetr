// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VTooltip from 'v-tooltip'

import App from './App'
import router from './router'

import './config/app.config'
import './filters/app.filters'
import './mixins/app.mixins'

Vue.use(VueResource)
Vue.use(VTooltip)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
