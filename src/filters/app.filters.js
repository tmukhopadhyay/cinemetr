import Vue from 'vue'

Vue.filter('truncate', (value, maxLength) => {
    if (!value) {
        return ''
    } else if (value.length <= maxLength) {
        return value
    }
    return value.substr(0, maxLength) + '...'
})

Vue.filter('format', (value) => {
    if (!value) {
        return ''
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.filter('toDate', (value) => {
    if (!value) {
        return ''
    }

    const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ]
    const dateArr = value.split('-')
    return dateArr[2] + ' ' + months[Number(dateArr[1])] + ' ' + dateArr[0]
})
