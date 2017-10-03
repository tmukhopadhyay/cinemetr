import Vue from 'vue'
import DataService from './data.service'

export default {
    getNowPlayingMovies (callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_NOW_PLAYING, (movies) => { callback(movies) })
    },
    getUpcomingMovies (callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_UPCOMING, (movies) => { callback(movies) })
    },
    getDetails (id, callback) {
        DataService.getDetails(
            id,
            Vue.config.OMDB_MOVIE_DETAILS,
            Vue.config.TMDB_MOVIE_DETAILS,
            'alternative_titles%2Cchanges%2Ccredits%2Cimages%2Ckeywords%2Creleases%2Creviews%2Csimilar%2Ctranslations%2Cvideos',
            (data) => { callback(data) }
        )
    }
}
