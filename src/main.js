// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import VueResource from 'vue-resource'

import App from './App'
import router from './router'
import './config/app.config'

Vue.use(VueResource)
Vue.use(VueRx, Rx)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})

Vue.filter('truncate', (value, maxLength) => {
    if (!value) {
        return ''
    } else if (value.length <= maxLength) {
        return value
    }
    return value.substr(0, maxLength) + '...'
})

Vue.filter('genreName', (value) => {
    if (!value) {
        return ''
    }
    let genreObj = window.genres.find(genre => genre.id === value)
    if (genreObj) {
        return genreObj.name
    }
    return ''
})
