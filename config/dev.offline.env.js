var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    isOffline: true,
    BACKDROP_PATH: '"/static/images"',
    IMAGE_PATH: '"/static/images"',
    NODE_ENV: '"development"',
    OMDB_BASE_URL: '"/static/data/omdb-movie.json"',
    SEARCH_MOVIE: '"movies.json"',
    SEARCH_SERIES: '"series.json"',
    SHOW_DETAILS: '"show.json"',
    SELECT_NOW_PLAYING: '""',
    SELECT_UPCOMING: '""',
    SELECT_POPULAR: '""',
    TMDB_BASE_URL: '"/static/data/"',
    TMDB_MOVIE_DETAILS: '"tmdb-movie.json"'
})
