var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    BASE_URL: '"/static/data/"',
    IMAGE_PATH: '"/static/images"',
    NODE_ENV: '"development"',
    SEARCH_MOVIE: '"movies.json"',
    SEARCH_SERIES: '"series.json"',
    SELECT_NOW_PLAYING: '""',
    SELECT_UPCOMING: '""',
    SELECT_POPULAR: '""'
})
