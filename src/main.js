// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import VueResource from 'vue-resource'
import VTooltip from 'v-tooltip'
import VueLazyLoad from 'vue-lazyload'
import VueTouch from 'vue-touch'

import App from './App'
import router from './router'

import './config/app.config'
import './filters/app.filters'
import './mixins/app.mixins'

Vue.use(VueResource)
Vue.use(VueRx, Rx)
Vue.use(VTooltip)
Vue.use(VueLazyLoad)
Vue.use(VueTouch, { name: 'v-touch' })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
