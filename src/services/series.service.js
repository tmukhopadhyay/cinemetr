import Vue from 'vue'
import DataService from './data.service'

export default {
    contructCards (series) {
        return series.map((show) => {
            return {
                id: show.id,
                poster: Vue.config.IMAGE_PATH + show.poster_path,
                title: show.name,
                hasTooltip: true,
                tooltipText: show.overview,
                labels: show.genre_ids.map((id) => {
                    let genre = Vue.options.methods.getGenreFromId(id)
                    genre.type = 'genre'
                    genre.link = {
                        name: 'AppSearch',
                        params: {
                            type: 'tv',
                            subtype: id
                        }
                    }
                    return genre
                }),
                hasRatings: true,
                rating: {
                    value: show.vote_average,
                    count: show.vote_count
                },
                type: 'show'
            }
        })
    },
    discover (showAll, genre, page, callback) {
        DataService.discover(Vue.config.SEARCH_SERIES, genre, page, (response) => {
            let series = response.results
            if (!showAll) {
                series = series.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(series), response.page, response.total_pages)
        })
    },
    getAiringToday (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_SERIES, Vue.config.SELECT_AIRING_TODAY, page, (response) => {
            let series = response.results
            if (!showAll) {
                series = response.results.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(series), response.page, response.total_pages)
        })
    },
    getOnTheAir (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_SERIES, Vue.config.SELECT_ON_THE_AIR, page, (response) => {
            let series = response.results
            if (!showAll) {
                series = response.results.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(series), response.page, response.total_pages)
        })
    },
    getPopularSeries (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_SERIES, Vue.config.SELECT_POPULAR, page, (response) => {
            let series = response.results
            if (!showAll) {
                series = series.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(series), response.page, response.total_pages)
        })
    },
    getTopRatedSeries (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_SERIES, Vue.config.SELECT_TOP_RATED, page, (response) => {
            let series = response.results
            if (!showAll) {
                series = response.results.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(series), response.page, response.total_pages)
        })
    },
    getDetails (id, callback) {
        DataService.getDetails(
            id,
            Vue.config.OMDB_SHOW_DETAILS,
            Vue.config.TMDB_SHOW_DETAILS,
            'alternative_titles%2Cchanges%2Ccontent_ratings%2Ccredits%2Cexternal_ids%2Cimages%2Ckeywords%2Csimilar%2Ctranslations%2Cvideos',
            (data) => { callback(data) }
        )
    },
    search (searchText, callback) {
        DataService.search(Vue.config.SEARCH_SERIES, searchText, (shows) => {
            callback(shows)
        })
    }
}
