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
                    <svg width="50px" height="50px" viewBox="0 0 50 50" class="play-icon" v-if="modalCarousel.length">
                        <title>Play Icon</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Video-Component-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="1">
                            <g id="Video-Player---Variations" transform="translate(-455.000000, -165.000000)">
                                <g id="Blue">
                                    <g id="Vid-Player:-16:9-Ratio-@-460x259" transform="translate(250.000000, 60.000000)">
                                        <g id="Play-Icon" transform="translate(205.000000, 105.000000)">
                                            <circle id="Mask" stroke="#E0BB06" stroke-width="2" cx="25" cy="25" r="24"></circle>
                                            <text id="" font-family="FontAwesome" font-size="32" font-weight="normal" fill="#E0BB06">
                                                <tspan x="15" y="37"></tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
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
                <section class="content-wrapper">
                    <figure class="one-fourth rail"
                        v-for="credit in tmdb.credits.cast"
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
                            <p class="subtitle" v-if="credit.character">as {{credit.character}}</p>
                        </figcaption>
                    </figure>
                    <figure class="one-fourth rail"
                        v-for="credit in tmdb.credits.crew"
                        :key="credit.credit_id">
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
