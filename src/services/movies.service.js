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
                    genre.link = {
                        name: 'AppSearch',
                        params: {
                            type: 'movie',
                            subtype: id
                        }
                    }
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
    discover (showAll, genre, page, callback) {
        DataService.discover(Vue.config.SEARCH_MOVIE, genre, page, (response) => {
            let movies = response.results
            if (!showAll) {
                movies = movies.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(movies), response.page, response.total_pages)
        })
    },
    getNowPlayingMovies (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_NOW_PLAYING, page, (response) => {
            let movies = response.results
            if (!showAll) {
                movies = movies.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(movies), response.page, response.total_pages)
        })
    },
    getUpcomingMovies (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_UPCOMING, page, (response) => {
            let movies = response.results
            if (!showAll) {
                movies = response.results.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(movies), response.page, response.total_pages)
        })
    },
    getPopularMovies (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_POPULAR, page, (response) => {
            let movies = response.results
            if (!showAll) {
                movies = response.results.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(movies), response.page, response.total_pages)
        })
    },
    getTopRatedMovies (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_MOVIE, Vue.config.SELECT_TOP_RATED, page, (response) => {
            let movies = response.results
            if (!showAll) {
                movies = response.results.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(movies), response.page, response.total_pages)
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
    },
    search (searchText, callback) {
        DataService.search(Vue.config.SEARCH_MOVIE, searchText, (movies) => {
            callback(movies)
        })
    }
}
