<template>
    <section class="relative" v-if="isNotEmpty(omdb) && isNotEmpty(tmdb)">
        <figure class="poster-wrapper">
            <img class="poster" :src="backdropPath + tmdb.backdrop_path" />
            <section class="overlay"></section>
        </figure>
        <section class="site-width clearfix statistic">
            <img :src="imagePath + tmdb.poster_path" class="pull-left snapshot" />
            <section class="pull-left metadata">
                <h2 class="title">{{tmdb.title || tmdb.name}}</h2>
                <p class="captions">
                    <a href="#" class="bullet" v-for="genre in tmdb.genres" :key="genre.id">
                        {{genre.name}}
                    </a>
                </p>
                <p class="certification text-small text-bold">
                    <span class="item">{{omdb.Released}} ({{omdb.Country}})</span>
                    <span class="item">{{omdb.Rated}}</span>
                    <span class="item">{{omdb.Runtime}}</span>
                </p>
                <section class="table credits text-small text-bold">
                    <section class="table-row">
                        <span class="table-cell">DIRECTOR</span>
                        <span class="table-cell color-yellow">{{omdb.Director}}</span>
                    </section>
                    <section class="table-row">
                        <span class="table-cell">WRITERS</span>
                        <span class="table-cell color-yellow">{{omdb.Writer}}</span>
                    </section>
                </section>
                <p class="overview">{{tmdb.overview}}</p>
            </section>
            <section class="pull-left rating-container">
                <section class="featured">
                    <p class="title">{{omdb.imdbRating}}</p>
                    <p class="subtitle">{{omdb.imdbVotes}} USERS</p>
                    <i class="fa fa-star icon" aria-hidden="true"></i>
                </section>
                <section class="clearfix rating-list">
                    <section class="pull-left one-half rating">
                        <p class="title">
                            <template v-for="rating in omdb.Ratings" v-if="rating.Source === 'Rotten Tomatoes'">
                                {{rating.Value}}
                            </template>
                        </p>
                        <p class="subtitle">ROTTEN TOMATOES</p>
                    </section>
                    <section class="pull-left one-half rating">
                        <p class="title">{{omdb.Metascore}}</p>
                        <p class="subtitle">METASCORE</p>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import MovieService from '../../services/movies.service'

    export default {
        name: 'appMovie',
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                backdropPath: Vue.config.BACKDROP_PATH,
                omdb: {},
                tmdb: {}
            }
        },
        props: {
            id: Number | String,
            type: String
        },
        created () {
            MovieService.getDetails(this.id, (data) => {
                this.omdb = data.omdb
                this.tmdb = data.tmdb
            })
        }
    }
</script>

<style lang="scss" src="./app-details.scss" scoped></style>
