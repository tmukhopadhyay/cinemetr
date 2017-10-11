import Vue from 'vue'

export default {
    getData (type, subType, callback) {
        Vue.http.get(Vue.config.TMDB_BASE_URL + type + subType + '?api_key=' + Vue.config.TMDB_API_KEY + '&language=en-US&page=1')
            .then(data => {
                callback(data.body.results)
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
                    Vue.http.get(Vue.config.OMDB_BASE_URL + omdbType + '?movie_id=' + (data.body.imdb_id || data.body.external_ids.imdb_id))
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
    }
}
