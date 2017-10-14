<template>
    <section>
        <app-spinner :spinner-status="spinnerStatus"></app-spinner>
        <section class="relative" v-show="!spinnerStatus" v-if="isNotEmpty(omdb) && isNotEmpty(tmdb)">
            <figure class="poster-wrapper">
                <img class="poster" :src="backdropPath + tmdb.backdrop_path" />
                <section class="overlay"></section>
            </figure>
            <section class="site-width clearfix statistic">
                <img :src="imagePath + tmdb.poster_path" class="pull-left snapshot" @error="getDefaultPoster" />
                <section class="pull-left metadata">
                    <h2 class="title">{{tmdb.title || tmdb.name}}</h2>
                    <p class="captions">
                        <a href="#" class="bullet" v-for="genre in tmdb.genres" :key="genre.id">
                            {{genre.name}}
                        </a>
                    </p>
                    <p class="certification text-small text-bold">
                        <span class="item">TV SERIES</span>
                        <span class="item">{{tmdb.number_of_seasons}} SEASON(S) / {{tmdb.number_of_episodes}} EPISODE(S)</span>
                        <span class="item">{{omdb.content_rating}}</span>
                    </p>
                    <section class="table credits text-small text-bold">
                        <section class="table-row">
                            <span class="table-cell">CREATOR(S)</span>
                            <span class="table-cell color-yellow">{{omdb.writers.join(', ')}}</span>
                        </section>
                        <section class="table-row">
                            <span class="table-cell">STARS</span>
                            <span class="table-cell color-yellow">{{omdb.stars.join(', ')}}</span>
                        </section>
                    </section>
                    <p class="overview">{{omdb.description}}</p>
                </section>
                <section class="pull-left rating-container">
                    <section class="featured">
                        <p class="title">{{omdb.rating}}</p>
                        <p class="subtitle">{{omdb.rating_count}} USERS</p>
                        <i class="fa fa-star icon" aria-hidden="true"></i>
                    </section>
                    <section class="clearfix rating-list">
                        <section class="pull-left one-half rating">
                            <p class="title">{{tmdb.popularity.toFixed(1)}}</p>
                            <p class="subtitle">POPULARITY</p>
                        </section>
                        <section class="pull-left one-half rating">
                            <p class="title">N/A</p>
                            <p class="subtitle">METASCORE</p>
                        </section>
                    </section>
                </section>
            </section>
            <section class="segment background">
                <section class="site-width clearfix">
                    <h3 class="section-title">STORYLINE</h3>
                    <h3 class="section-subtitle">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </h3>
                    <span class="text-regular">{{omdb.storyline}}</span>
                </section>
            </section>
            <app-carousel
                :data="carouselData"
                :disable3d="true"
                :inverse-scaling="150"
                :slide-items="5"
                :slide-height="282"
                :slide-width="190"
                :slide-space="202"
                :start-index="2"
                title="Seasons">
            </app-carousel>
            <app-segment
                :background="false"
                :data="similarShows"
                title="Shows"
                subtitle="You May Like">
            </app-segment>
            <section class="segment background">
                <h3 class="site-width section-title">CAST &amp; CREW</h3>
                <h3 class="site-width section-subtitle">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </h3>
                <section class="content-wrapper clearfix">
                    <section class="pull-left one-fourth rail"
                        v-for="credit in tmdb.credits.cast"
                        :key="credit.credit_id">
                        <figure class="pull-left">
                            <router-link :to="{ name: 'AppPerson', params: { id: credit.id } }">
                                <img class="pull-left poster"
                                    :src="imagePath + credit.profile_path"
                                    @error="getDefaultPerson" />
                            </router-link>
                            <figcaption class="pull-left">
                                <p class="title">
                                    <router-link :to="{ name: 'AppPerson', params: { id: credit.id } }">
                                        {{credit.name}}
                                    </router-link>
                                </p>
                                <p class="subtitle" v-if="credit.character">as {{credit.character}}</p>
                            </figcaption>
                        </figure>
                    </section>
                    <section class="pull-left one-fourth rail"
                        v-for="credit in tmdb.credits.crew"
                        :key="credit.credit_id">
                        <figure class="pull-left">
                            <router-link :to="{ name: 'AppPerson', params: { id: credit.id } }">
                                <img class="pull-left poster"
                                    :src="imagePath + credit.profile_path"
                                    @error.once="getDefaultPerson" />
                            </router-link>
                            <figcaption class="pull-left content">
                                <p class="title">
                                    <router-link :to="{ name: 'AppPerson', params: { id: credit.id } }">
                                        {{credit.name}}
                                    </router-link>
                                </p>
                                <p class="subtitle">{{credit.job}}</p>
                            </figcaption>
                        </figure>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppSpinner from '../app-spinner/AppSpinner'
    import AppCarousel from '../app-carousel/AppCarousel'
    import AppSegment from '../app-segment/AppSegment'
    import SeriesService from '../../services/series.service'

    export default {
        name: 'appShow',
        components: {
            'app-carousel': AppCarousel,
            'app-segment': AppSegment,
            'app-spinner': AppSpinner
        },
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                backdropPath: Vue.config.BACKDROP_PATH,
                omdb: {},
                tmdb: {},
                carouselData: [],
                similarShows: [],
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
                SeriesService.getDetails(this.id, (data) => {
                    this.spinnerStatus = false
                    this.omdb = data.omdb
                    this.tmdb = data.tmdb

                    this.carouselData = this.tmdb.seasons.slice(1).map((season) => {
                        return {
                            poster: this.imagePath + season.poster_path,
                            captions: [
                                'SEASON ' + season.season_number + ' / ' + season.episode_count + ' EPISODES',
                                this.toDate(season.air_date)
                            ]
                        }
                    })
                    this.similarShows = SeriesService.contructCards(this.tmdb.similar.results)
                })
            }
        },
        watch: {
            '$route': 'getData'
        }
    }
</script>

<style lang="scss" src="./app-details.scss" scoped></style>
