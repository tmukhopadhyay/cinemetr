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
    getDetails (id, type, callback) {
        let tmdbUrl = Vue.config.TMDB_BASE_URL + type + id + '?api_key=' + Vue.config.TMDB_API_KEY + '&language=en-US&append_to_response=alternative_titles%2Cchanges%2Ccredits%2Cimages%2Ckeywords%2Creleases%2Creviews%2Csimilar%2Ctranslations%2Cvideos'
        let omdbUrl = Vue.config.OMDB_BASE_URL + '&apikey=' + Vue.config.OMDB_API_KEY

        if (Vue.config.isOffline) {
            tmdbUrl = Vue.config.TMDB_BASE_URL + type
            omdbUrl = Vue.config.OMDB_BASE_URL + '?apikey=' + Vue.config.OMDB_API_KEY
        }
        Vue.http.get(tmdbUrl)
            .then(data => {
                let tmdbData = data.body

                omdbUrl += '&i=' + data.body.imdb_id

                Vue.http.get(omdbUrl)
                    .then(data => {
                        callback({
                            omdb: data.body,
                            tmdb: tmdbData
                        })
                    }, error => {
                        console.error(error)
                        callback({})
                    })
            }, error => {
                console.error(error)
                callback({})
            })
    }
}
