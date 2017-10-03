import Vue from 'vue'
import DataService from './data.service'

export default {
    getPopularSeries (callback) {
        DataService.getData(Vue.config.SEARCH_SERIES, Vue.config.SELECT_POPULAR, (series) => { callback(series) })
    },
    getDetails (id, callback) {
        DataService.getDetails(
            id,
            Vue.config.OMDB_SHOW_DETAILS,
            Vue.config.TMDB_SHOW_DETAILS,
            'alternative_titles%2Cchanges%2Ccontent_ratings%2Ccredits%2Cexternal_ids%2Cimages%2Ckeywords%2Csimilar%2Ctranslations%2Cvideos',
            (data) => { callback(data) }
        )
    }
}
