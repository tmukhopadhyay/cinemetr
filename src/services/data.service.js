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
    }
}
