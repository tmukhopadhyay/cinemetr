import Vue from 'vue'

Vue.mixin({
    methods: {
        isNotEmpty (obj) {
            return obj && Object.keys(obj).length !== 0
        },
        debounce (func, wait, immediate) {
            let timeout
            return function () {
                let context = this
                let args = arguments
                let later = function () {
                    timeout = null
                    if (!immediate) func.apply(context, args)
                }
                let callNow = immediate && !timeout
                clearTimeout(timeout)
                timeout = setTimeout(later, wait)
                if (callNow) func.apply(context, args)
            }
        },
        getGenreFromId (id) {
            let genre = window.genres.find(genre => genre.id === Number(id))
            if (genre) {
                return JSON.parse(JSON.stringify(genre))
            }
            return {}
        },
        getDefaultPoster (e) {
            e.target.src = '/static/images/default-poster.jpg'
        },
        getDefaultPerson (e) {
            e.target.src = '/static/images/default-person.png'
        },
        getDefaultBackdrop (e) {
            e.target.src = '/static/images/default-backdrop.svg'
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
