import Vue from 'vue'
import DataService from './data.service'

export default {
    getPopularSeries (callback) {
        DataService.getData(Vue.config.SEARCH_SERIES, Vue.config.SELECT_POPULAR, (series) => { callback(series) })
    },
    getDetails (id, callback) {
        DataService.getDetails(id, Vue.config.SHOW_DETAILS, (data) => { callback(data) })
    }
}
