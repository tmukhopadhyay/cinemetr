import Vue from 'vue'

Object.assign(Vue.config, {
    productionTip: process.env.NODE_ENV === 'production',
    isOffline: process.env.isOffline,
    BACKDROP_PATH: process.env.BACKDROP_PATH,
    IMAGE_PATH: process.env.IMAGE_PATH,
    OMDB_API_KEY: process.env.OMDB_API_KEY,
    OMDB_BASE_URL: process.env.OMDB_BASE_URL,
    SEARCH_MOVIE: process.env.SEARCH_MOVIE,
    SEARCH_SERIES: process.env.SEARCH_SERIES,
    SHOW_DETAILS: process.env.SHOW_DETAILS,
    SELECT_NOW_PLAYING: process.env.SELECT_NOW_PLAYING,
    SELECT_UPCOMING: process.env.SELECT_UPCOMING,
    SELECT_POPULAR: process.env.SELECT_POPULAR,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_BASE_URL: process.env.TMDB_BASE_URL,
    TMDB_MOVIE_DETAILS: process.env.TMDB_MOVIE_DETAILS
})
