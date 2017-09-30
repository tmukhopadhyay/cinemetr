import Vue from 'vue'

export default Object.assign(Vue.config, {
    productionTip: process.env.NODE_ENV === 'production',
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
    IMAGE_PATH: process.env.IMAGE_PATH,
    SEARCH_MOVIE: process.env.SEARCH_MOVIE,
    SEARCH_SERIES: process.env.SEARCH_SERIES,
    SELECT_NOW_PLAYING: process.env.SELECT_NOW_PLAYING,
    SELECT_UPCOMING: process.env.SELECT_UPCOMING,
    SELECT_POPULAR: process.env.SELECT_POPULAR
})
