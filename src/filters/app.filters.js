import Vue from 'vue'

Vue.filter('truncate', (value, maxLength) => {
    if (!value) {
        return ''
    } else if (value.length <= maxLength) {
        return value
    }
    return value.substr(0, maxLength) + '...'
})

Vue.filter('genreName', (value) => {
    if (!value) {
        return ''
    }
    let genreObj = window.genres.find(genre => genre.id === value)
    if (genreObj) {
        return genreObj.name
    }
    return ''
})

Vue.filter('format', (value) => {
    if (!value) {
        return ''
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})
