var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    isOffline: true,
    BACKDROP_PATH: '"/static/images"',
    IMAGE_PATH: '"/static/images"',
    NODE_ENV: '"development"',
    OMDB_BASE_URL: '"/static/data/"',
    OMDB_MOVIE_DETAILS: '"omdb-movie.json"',
    OMDB_SHOW_DETAILS: '"omdb-show.json"',
    SEARCH: '""',
    SEARCH_MOVIE: '"movies.json"',
    SEARCH_SERIES: '"series.json"',
    SEARCH_PEOPLE: '"people.json"',
    SELECT_AIRING_TODAY: '""',
    SELECT_NOW_PLAYING: '""',
    SELECT_ON_THE_AIR: '""',
    SELECT_UPCOMING: '""',
    SELECT_POPULAR: '""',
    SELECT_TOP_RATED: '""',
    TMDB_BASE_URL: '"/static/data/"',
    TMDB_MOVIE_DETAILS: '"tmdb-movie.json"',
    TMDB_SHOW_DETAILS: '"tmdb-show.json"',
    TMDB_PERSON_DETAILS: '"person.json"'
})
