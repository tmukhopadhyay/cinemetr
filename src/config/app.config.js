import Vue from 'vue'

Object.assign(Vue.config, {
    productionTip: process.env.NODE_ENV === 'production',
    isOffline: process.env.isOffline,
    API_KEY: process.env.API_KEY,
    BACKDROP_PATH: process.env.BACKDROP_PATH,
    BASE_URL: process.env.BASE_URL,
    IMAGE_PATH: process.env.IMAGE_PATH,
    SEARCH_MOVIE: process.env.SEARCH_MOVIE,
    MOVIE_DETAILS: process.env.MOVIE_DETAILS,
    SEARCH_SERIES: process.env.SEARCH_SERIES,
    SELECT_NOW_PLAYING: process.env.SELECT_NOW_PLAYING,
    SELECT_UPCOMING: process.env.SELECT_UPCOMING,
    SELECT_POPULAR: process.env.SELECT_POPULAR
})
