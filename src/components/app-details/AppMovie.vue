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
                    <h2 class="title">{{tmdb.title}} ({{omdb.Year}})</h2>
                    <p class="captions">
                        <router-link
                            v-for="genre in tmdb.genres"
                            :key="genre.id"
                            :to="{ name: 'AppSearch', params: { type: 'movie', subtype: genre.id } }"
                            class="bullet">
                                {{genre.name}}
                        </router-link>
                    </p>
                    <p class="certification text-small text-bold">
                        <span class="item">{{omdb.Released}} ({{omdb.Country}})</span>
                        <span class="item">{{omdb.Rated}}</span>
                        <span class="item" v-if="omdb.Runtime">{{omdb.Runtime}}</span>
                    </p>
                    <section class="table credits text-small text-bold">
                        <section class="table-row" v-if="omdb.Director">
                            <span class="table-cell">DIRECTOR(S)</span>
                            <span class="table-cell color-yellow">{{omdb.Director}}</span>
                        </section>
                        <section class="table-row" v-if="omdb.Writer">
                            <span class="table-cell">WRITER(S)</span>
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
                            <p class="title">{{tomatoMeter}}</p>
                            <p class="subtitle">TOMATO METER</p>
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
            <app-segment
                :background="false"
                :data="similarMovies"
                title="Movies"
                subtitle="You May Like">
            </app-segment>
            <section class="segment background" :class="{'background': !tmdb.reviews.results.length}">
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
            <section class="segment" v-if="tmdb.reviews.results.length">
                <h3 class="site-width section-title">USER REVIEWS</h3>
                <h3 class="site-width section-subtitle">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </h3>
                <section class="site-width feed text-regular" v-for="review in tmdb.reviews.results" :key="review.id">
                    <p class="title">By {{review.author}}</p>
                    <p class="content">{{review.content}}</p>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppModal from '../app-modal/AppModal'
    import AppSpinner from '../app-spinner/AppSpinner'
    import AppSegment from '../app-segment/AppSegment'
    import MovieService from '../../services/movies.service'

    export default {
        name: 'appMovie',
        components: {
            'app-modal': AppModal,
            'app-spinner': AppSpinner,
            'app-segment': AppSegment
        },
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                backdropPath: Vue.config.BACKDROP_PATH,
                omdb: {},
                tmdb: {},
                cast: [],
                similarMovies: [],
                spinnerStatus: true,
                modalCarousel: [],
                tomatoMeter: 'N/A'
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

                MovieService.getDetails(this.id, (data) => {
                    if (data.tmdb.credits.cast && data.tmdb.credits.crew) {
                        const castMap = new Map()
                        data.tmdb.credits.cast.forEach(person => {
                            castMap.set(person.id, person)
                        })
                        data.tmdb.credits.crew.forEach(person => {
                            if (castMap.has(person.id)) {
                                let prefix = ''
                                if (!castMap.get(person.id).job) {
                                    castMap.get(person.id).job = ''
                                } else {
                                    prefix = ', '
                                }
                                castMap.get(person.id).job += prefix + person.job
                            } else {
                                castMap.set(person.id, person)
                            }
                        })
                        this.cast = Array.from(castMap.values())
                    }

                    this.spinnerStatus = false
                    this.omdb = data.omdb
                    this.tmdb = data.tmdb
                    this.similarMovies = MovieService.contructCards(this.tmdb.similar.results.slice(0, Vue.config.CARDS_PER_PAGE))
                    this.modalCarousel = this.tmdb.videos.results.map((video) => video)

                    let tomatoRating = this.omdb.Ratings.find((rating) => rating.Source === 'Rotten Tomatoes')
                    if (tomatoRating) {
                        this.tomatoMeter = tomatoRating.Value
                    }
                })
            }
        },
        watch: {
            '$route': 'getData'
        }
    }
</script>

<style lang="scss" src="./app-details.scss" scoped></style>
