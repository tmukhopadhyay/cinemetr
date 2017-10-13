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
            e.target.src = '/static/images/default-poster.jpg'
        },
        getDefaultPerson (e) {
            e.target.src = '/static/images/default-person.png'
        },
        getDefaultBackdrop (e) {
            e.target.src = '/static/images/default-backdrop.jpg'
        },
        toDate (value) {
            if (!value) {
                return ''
            }

            const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ]
            const dateArr = value.split('-')
            return dateArr[2] + ' ' + months[Number(dateArr[1]) - 1] + ' ' + dateArr[0]
        }
    }
})
