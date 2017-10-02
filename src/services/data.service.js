import Vue from 'vue'

export default {
    getData (type, subType, callback) {
        Vue.http.get(Vue.config.BASE_URL + type + subType + '?api_key=' + Vue.config.API_KEY + '&language=en-US&page=1')
            .then(data => {
                callback(data.body.results)
            }, error => {
                console.error(error)
                callback([])
            })
    },
    getDetails (id, type, callback) {
        let url = Vue.config.BASE_URL + type + id + '?api_key=' + Vue.config.API_KEY + '&language=en-US&append_to_response=alternative_titles%2Cchanges%2Ccredits%2Cimages%2Ckeywords%2Creleases%2Creviews%2Csimilar%2Ctranslations%2Cvideos'
        if (Vue.config.isOffline) {
            url = Vue.config.BASE_URL + type
        }
        Vue.http.get(url)
            .then(data => {
                callback(data.body)
            }, error => {
                console.error(error)
                callback({})
            })
    }
}
