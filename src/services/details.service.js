import Vue from 'vue'
import DataService from './data.service'

export default {
    getDetails (id, callback) {
        DataService.getDetails(id, Vue.config.MOVIE_DETAILS, (data) => { callback(data) })
    }
}
