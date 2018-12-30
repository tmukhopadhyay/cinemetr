<template>
    <section>
        <app-spinner :spinner-status="spinnerStatus"></app-spinner>
        <section class="relative" v-show="!spinnerStatus" v-if="isNotEmpty(omdb) && isNotEmpty(tmdb)">
            <figure class="poster-wrapper">
                <img class="poster" :src="backdropPath + tmdb.backdrop_path" @error="getDefaultBackdrop" />
                <section class="overlay"></section>
            </figure>
            <section class="site-width clearfix statistic">
                <figure class="pull-left snapshot">
                    <img :src="imagePath + tmdb.poster_path" @error="getDefaultPoster" />
                    <app-modal
                        v-if="modalCarousel.length"
                        :use-carousel="true"
                        :data="modalCarousel"
                        :video-slider="true">
                    </app-modal>
                </figure>
                <section class="pull-left metadata">
                    <h2 class="title">{{tmdb.title || tmdb.name}}</h2>
                    <p class="captions">
                        <router-link
                            v-for="genre in tmdb.genres"
                            :key="genre.id"
                            :to="{ name: 'AppSearch', params: { type: 'tv', subtype: genre.id } }"
                            class="bullet">
                                {{genre.name}}
                        </router-link>
                    </p>
                    <p class="certification text-small text-bold">
                        <span class="item">TV SERIES ({{omdb.Year}})</span>
                        <span class="item">{{tmdb.number_of_seasons}} SEASON(S) / {{tmdb.number_of_episodes}} EPISODE(S)</span>
                        <span class="item">{{omdb.Rated}}</span>
                    </p>
                    <section class="table credits text-small text-bold">
                        <section class="table-row" v-if="omdb.Writer">
                            <span class="table-cell">CREATOR(S)</span>
                            <span class="table-cell color-yellow">{{omdb.Writer}}</span>
                        </section>
                        <section class="table-row" v-if="omdb.Actors">
                            <span class="table-cell">STARS</span>
                            <span class="table-cell color-yellow">{{omdb.Actors}}</span>
                        </section>
                    </section>
                    <p class="overview">{{omdb.Plot}}</p>
                </section>
                <section class="pull-right rating-container">
                    <section class="featured">
                        <p class="title">{{omdb.imdbRating}}</p>
                        <p class="subtitle">{{omdb.imdbVotes}} USERS</p>
                        <i class="fa fa-star icon" aria-hidden="true"></i>
                    </section>
                    <section class="clearfix rating-list">
                        <section class="pull-left one-half rating">
                            <p class="title">{{tmdb.popularity.toFixed(1)}}</p>
                            <p class="subtitle">POPULARITY</p>
                        </section>
                        <section class="pull-left one-half rating">
                            <p class="title">{{omdb.Metascore}}</p>
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
                    <span class="text-regular">{{tmdb.overview}}</span>
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
            <section class="segment background" v-if="tmdb.credits.cast.length || tmdb.credits.crew.length">
                <h3 class="site-width section-title">CAST &amp; CREW</h3>
                <h3 class="site-width section-subtitle">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </h3>
                <section class="content-wrapper">
                    <figure class="one-fourth rail"
                        v-for="credit in cast"
                        :key="credit.credit_id">
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
                            <p class="subtitle" v-if="credit.character">As {{credit.character}}</p>
                            <p class="subtitle" v-if="credit.job">{{credit.job}}</p>
                        </figcaption>
                    </figure>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppModal from '../app-modal/AppModal'
    import AppSpinner from '../app-spinner/AppSpinner'
    import AppCarousel from '../app-carousel/AppCarousel'
    import AppSegment from '../app-segment/AppSegment'
    import SeriesService from '../../services/series.service'

    export default {
        name: 'appShow',
        components: {
            'app-modal': AppModal,
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
                cast: [],
                carouselData: [],
                similarShows: [],
                spinnerStatus: true,
                modalCarousel: []
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
                window.scroll(0, 0)
                this.spinnerStatus = true

                SeriesService.getDetails(this.id, (data) => {
                    if (data.tmdb.credits.cast && data.tmdb.credits.crew) {
                        const castObj = {}
                        data.tmdb.credits.cast.forEach(person => {
                            castObj[person.id] = person
                        })
                        data.tmdb.credits.crew.forEach(person => {
                            if (castObj[person.id]) {
                                let prefix = ''
                                if (!castObj[person.id].job) {
                                    castObj[person.id].job = ''
                                } else {
                                    prefix = ', '
                                }
                                castObj[person.id].job += prefix + person.job
                            } else {
                                castObj[person.id] = person
                            }
                        })
                        this.cast = Object.values(castObj).sort((a, b) => a.cast_id - b.cast_id)
                    }

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
                    this.similarShows = SeriesService.contructCards(this.tmdb.similar.results.slice(0, Vue.config.CARDS_PER_PAGE))
                    this.modalCarousel = this.tmdb.videos.results.map((video) => video)
                })
            }
        },
        watch: {
            '$route': 'getData'
        }
    }
</script>

<style lang="scss" src="./app-details.scss" scoped></style>
