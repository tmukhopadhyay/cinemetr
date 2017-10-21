import Vue from 'vue'

Object.assign(Vue.config, {
    productionTip: process.env.NODE_ENV === 'production',
    isOffline: process.env.isOffline,
    BACKDROP_PATH: process.env.BACKDROP_PATH,
    CARDS_PER_PAGE: 8,
    IMAGE_PATH: process.env.IMAGE_PATH,
    OMDB_API_KEY: process.env.OMDB_API_KEY,
    OMDB_BASE_URL: process.env.OMDB_BASE_URL,
    OMDB_MOVIE_DETAILS: process.env.OMDB_MOVIE_DETAILS,
    OMDB_SHOW_DETAILS: process.env.OMDB_SHOW_DETAILS,
    SEARCH: process.env.SEARCH,
    SEARCH_MOVIE: process.env.SEARCH_MOVIE,
    SEARCH_SERIES: process.env.SEARCH_SERIES,
    SEARCH_PEOPLE: process.env.SEARCH_PEOPLE,
    SELECT_AIRING_TODAY: process.env.SELECT_AIRING_TODAY,
    SELECT_NOW_PLAYING: process.env.SELECT_NOW_PLAYING,
    SELECT_UPCOMING: process.env.SELECT_UPCOMING,
    SELECT_ON_THE_AIR: process.env.SELECT_ON_THE_AIR,
    SELECT_POPULAR: process.env.SELECT_POPULAR,
    SELECT_TOP_RATED: process.env.SELECT_TOP_RATED,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_BASE_URL: process.env.TMDB_BASE_URL,
    TMDB_MOVIE_DETAILS: process.env.TMDB_MOVIE_DETAILS,
    TMDB_SHOW_DETAILS: process.env.TMDB_SHOW_DETAILS,
    TMDB_PERSON_DETAILS: process.env.TMDB_PERSON_DETAILS
})
