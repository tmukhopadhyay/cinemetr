import Vue from 'vue'
import DataService from './data.service'

export default {
    contructCards (movies) {
        return movies.map((movie) => {
            return {
                id: movie.id,
                poster: Vue.config.IMAGE_PATH + movie.poster_path,
                title: movie.title,
                hasTooltip: true,
                tooltipText: movie.overview,
                labels: movie.genre_ids.map((id) => {
                    let genre = Vue.options.methods.getGenreFromId(id)
                    genre.type = 'genre'
                    return genre
                }),
                hasRatings: true,
                rating: {
                    value: movie.vote_average,
                    count: movie.vote_count
                },
                type: 'movie'
            }
        })
    },
    getNowPlayingMovies (callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_NOW_PLAYING, (movies) => {
            callback(this.contructCards(movies))
        })
    },
    getUpcomingMovies (callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_UPCOMING, (movies) => {
            callback(this.contructCards(movies))
        })
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
