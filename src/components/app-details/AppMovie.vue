<template>
    <section>
        <app-spinner :spinner-status="spinnerStatus"></app-spinner>
        <section class="relative" v-show="!spinnerStatus" v-if="isNotEmpty(omdb) && isNotEmpty(tmdb)">
            <figure class="poster-wrapper">
                <img class="poster" :src="backdropPath + tmdb.backdrop_path" />
                <section class="overlay"></section>
            </figure>
            <section class="site-width clearfix statistic">
                <img :src="imagePath + tmdb.poster_path" class="pull-left snapshot" />
                <section class="pull-left metadata">
                    <h2 class="title">{{tmdb.title}} ({{omdb.Year}})</h2>
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
            <app-segment
                :background="true"
                :data="similarMovies"
                title="Movies"
                subtitle="You May Like">
            </app-segment>
            <section class="segment">
                <h3 class="site-width section-title">CAST &amp; CREW</h3>
                <h3 class="site-width section-subtitle">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </h3>
                <section class="content-wrapper clearfix">
                    <section class="pull-left one-fourth rail" v-for="credit in tmdb.credits.cast">
                        <figure class="pull-left">
                            <img class="pull-left poster"
                                :src="imagePath + credit.profile_path"
                                @error="getDefaultPoster" />
                            <figcaption class="pull-left">
                                <p class="title">{{credit.name}}</p>
                                <p class="subtitle">as {{credit.character}}</p>
                            </figcaption>
                        </figure>
                    </section>
                    <section class="pull-left one-fourth rail" v-for="credit in tmdb.credits.crew">
                        <figure class="pull-left">
                            <img class="pull-left poster"
                                :src="imagePath + credit.profile_path"
                                @error.once="getDefaultPoster" />
                            <figcaption class="pull-left content">
                                <p class="title">{{credit.name}}</p>
                                <p class="subtitle">{{credit.job}}</p>
                            </figcaption>
                        </figure>
                    </section>
                </section>
            </section>
            <section class="segment background" v-if="tmdb.reviews.results.length">
                <h3 class="site-width section-title">USER REVIEWS</h3>
                <h3 class="site-width section-subtitle">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </h3>
                <section class="site-width feed" v-for="review in tmdb.reviews.results" :key="review.id">
                    <p class="title">By {{review.author}}</p>
                    <p class="content">{{review.content}}</p>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppSpinner from '../app-spinner/AppSpinner'
    import AppSegment from '../app-segment/AppSegment'
    import MovieService from '../../services/movies.service'

    export default {
        name: 'appMovie',
        components: {
            'app-spinner': AppSpinner,
            'app-segment': AppSegment
        },
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                backdropPath: Vue.config.BACKDROP_PATH,
                omdb: {},
                tmdb: {},
                similarMovies: [],
                spinnerStatus: true
            }
        },
        props: {
            id: Number | String,
            type: String
        },
        created () {
            this.getData()
        },
        methods: {
            getData () {
                this.spinnerStatus = true
                MovieService.getDetails(this.id, (data) => {
                    this.spinnerStatus = false
                    this.omdb = data.omdb
                    this.tmdb = data.tmdb
                    this.similarMovies = MovieService.contructCards(this.tmdb.similar.results)
                })
            },
            getDefaultPoster (e) {
                e.target.src = '/static/images/default-poster.jpg'
            }
        },
        watch: {
            '$route': 'getData'
        }
    }
</script>

<style lang="scss" src="./app-details.scss" scoped></style>
