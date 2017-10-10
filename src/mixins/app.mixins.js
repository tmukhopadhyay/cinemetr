import Vue from 'vue'

Vue.mixin({
    methods: {
        isNotEmpty (obj) {
            return obj && Object.keys(obj).length !== 0
        },
        getGenreFromId (id) {
            return window.genres.find(genre => genre.id === id) || {}
        },
        getDefaultPoster (e) {
            e.target.src = '/static/images/default-poster.png'
        }
    }
})
