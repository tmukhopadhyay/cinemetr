import Vue from 'vue'

export default {
    discover (type, genre, page, callback) {
        Vue.http.get(Vue.config.TMDB_BASE_URL + 'discover/' + type + '?api_key=' + Vue.config.TMDB_API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page + '&with_genres=' + genre)
            .then(data => {
                callback(data.body)
            }, error => {
                console.error(error)
                callback([])
            })
    },
    getData (type, subType, page, callback) {
        Vue.http.get(Vue.config.TMDB_BASE_URL + type + subType + '?api_key=' + Vue.config.TMDB_API_KEY + '&language=en-US&page=' + page)
            .then(data => {
                callback(data.body)
            }, error => {
                console.error(error)
                callback([])
            })
    },
    getDetails (id, omdbType, tmdbType, appendToResponse, callback) {
        let tmdbUrl = Vue.config.TMDB_BASE_URL + tmdbType + id + '?api_key=' + Vue.config.TMDB_API_KEY + '&language=en-US&append_to_response=' + appendToResponse

        if (Vue.config.isOffline) {
            tmdbUrl = Vue.config.TMDB_BASE_URL + tmdbType
        }
        Vue.http.get(tmdbUrl)
            .then(data => {
                if (omdbType !== null) {
                    let tmdbData = data.body
                    Vue.http.get(Vue.config.OMDB_BASE_URL + omdbType + '?apikey=' + Vue.config.OMDB_API_KEY + '&i=' + (data.body.imdb_id || data.body.external_ids.imdb_id))
                        .then(data => {
                            callback({
                                omdb: data.body,
                                tmdb: tmdbData
                            })
                        }, error => {
                            console.error(error)
                            callback({})
                        })
                } else {
                    callback(data.body)
                }
            }, error => {
                console.error(error)
                callback({})
            })
    },
    search (type, searchText, callback) {
        Vue.http.get(Vue.config.TMDB_BASE_URL + Vue.config.SEARCH + type + '?api_key=' + Vue.config.TMDB_API_KEY + '&query=' + searchText + '&language=en-US&page=1&include_adult=true')
            .then(data => {
                callback(data.body.results)
            }, error => {
                console.error(error)
                callback([])
            })
    }
}
