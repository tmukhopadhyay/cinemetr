<template>
    <section>
        <app-spinner :spinner-status="spinnerStatus"></app-spinner>
        <section v-show="!spinnerStatus" v-if="isNotEmpty(person)">
            <section class="relative">
                <figure class="poster-wrapper">
                    <img class="poster" :src="backdropPath + personBackground" @error="getDefaultBackdrop" />
                    <section class="overlay"></section>
                </figure>
                <section class="site-width clearfix statistic">
                    <img :src="imagePath + person.profile_path" class="pull-left snapshot" @error="getDefaultPerson" />
                    <section class="pull-left metadata">
                        <h2 class="title">{{person.name}}</h2>
                        <p class="certification text-small text-bold">
                            <span class="item" v-if="person.birthday">BORN {{person.birthday | toDate}} IN {{person.place_of_birth}}</span>
                            <span class="item" v-if="person.deathday">DIED {{person.deathday | toDate}}</span>
                        </p>
                        <p class="certification text-small text-bold">
                            <a class="item" v-if="person.external_ids.twitter_id" :href="'https://twitter.com/' + person.external_ids.twitter_id" target="_blank">
                                <i class="fa fa-twitter-square fa-2x color-twitter" aria-hidden="true"></i>
                            </a>
                            <a class="item" v-if="person.external_ids.facebook_id" :href="'https://facebook.com/' + person.external_ids.facebook_id" target="_blank">
                                <i class="fa fa-facebook-square fa-2x color-facebook" aria-hidden="true"></i>
                            </a>
                            <a class="item" v-if="person.external_ids.instagram_id" :href="'https://instagram.com/' + person.external_ids.instagram_id" target="_blank">
                                <i class="fa fa-instagram fa-2x color-instagram" aria-hidden="true"></i>
                            </a>
                        </p>
                        <section class="table credits text-small text-bold">
                            <section class="table-row" v-if="person.movie_credits.cast.length || person.movie_credits.crew.length">
                                <span class="table-cell">MOVIES</span>
                                <span class="table-cell color-yellow">
                                    <template
                                        v-for="(credit, index) in person.movie_credits.cast.concat(person.movie_credits.crew)"
                                        v-if="index < 20">
                                        <router-link
                                            :to="{ name: 'AppMovie', params: { id: credit.id } }"
                                            :key="credit.id"
                                            class="color-yellow">
                                            {{credit.title}}</router-link><template v-if="index < 19">, </template>
                                    </template>
                                </span>
                            </section>
                            <section class="table-row" v-if="person.tv_credits.cast.length || person.tv_credits.crew.length">
                                <span class="table-cell">TV</span>
                                <span class="table-cell color-yellow">
                                    <template v-for="(credit, index) in person.tv_credits.cast.concat(person.tv_credits.crew)" v-if="index < 20">
                                        <router-link
                                            :to="{ name: 'AppShow', params: { id: credit.id } }"
                                            :key="credit.id"
                                            class="color-yellow">
                                            {{credit.name}}</router-link><template v-if="index < 19">, </template>
                                    </template>
                                </span>
                            </section>
                        </section>
                    </section>
                    <section class="pull-right rating-container">
                        <section class="featured">
                            <p class="title">{{person.popularity.toFixed(1)}}</p>
                            <p class="subtitle">POPULARITY</p>
                        </section>
                        <section class="clearfix rating-list">
                            <section class="pull-left one-half rating">
                                <p class="title">{{person.tv_credits.cast.concat(person.tv_credits.crew).length}}</p>
                                <p class="subtitle">TV</p>
                            </section>
                            <section class="pull-left one-half rating">
                                <p class="title">{{person.movie_credits.cast.concat(person.movie_credits.crew).length}}</p>
                                <p class="subtitle">MOVIES</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section class="segment background" v-if="person.biography">
                <section class="site-width clearfix">
                    <h3 class="section-title">BIOGRAPHY</h3>
                    <h3 class="section-subtitle">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </h3>
                    <span class="text-regular">{{person.biography}}</span>
                </section>
            </section>
            <app-lightbox
                :data="lightboxData"
                :items="5"
                title="Photos"
                v-if="lightboxData.length">
            </app-lightbox>
            <section class="segment">
                <h3 class="site-width section-title">FILMOGRAPHY</h3>
                <h3 class="site-width section-subtitle">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </h3>
                <section class=" content-wrapper">
                    <figure class="one-third rail"
                        v-for="credit in cast"
                        :key="credit.credit_id">
                        <router-link :to="{ name: 'App' + credit.media_type.charAt(0).toUpperCase() + credit.media_type.slice(1), params: { id: credit.id } }">
                            <img class="pull-left poster"
                                :src="imagePath + credit.poster_path"
                                @error="getDefaultPoster" />
                        </router-link>
                        <figcaption class="pull-left">
                            <p class="title">
                                <router-link :to="{ name: 'App' + credit.media_type.charAt(0).toUpperCase() + credit.media_type.slice(1), params: { id: credit.id } }">
                                    {{credit.title || credit.name}}
                                </router-link>
                            </p>
                            <p class="subtitle" v-if="credit.character">As {{credit.character}}</p>
                            <p class="subtitle" v-if="credit.job">{{credit.job}}</p>
                            <p class="captions">
                                <router-link
                                    v-for="id in credit.genre_ids"
                                    :key="id"
                                    :to="{ name: 'AppSearch', params: { type: credit.media_type, subtype: id } }"
                                    class="bullet">
                                        {{getGenreFromId(id).name}}
                                </router-link>
                            </p>
                            <p class="rating clearfix">
                                <i class="fa fa-star color-yellow" aria-hidden="true"></i>
                                {{credit.vote_average}} / 10 from {{credit.vote_count | format}} users
                            </p>
                        </figcaption>
                    </figure>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppSpinner from '../app-spinner/AppSpinner'
    import AppLightbox from '../app-lightbox/AppLightbox'
    import PeopleService from '../../services/people.service'

    export default {
        name: 'appMovie',
        components: {
            'app-lightbox': AppLightbox,
            'app-spinner': AppSpinner
        },
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                backdropPath: Vue.config.BACKDROP_PATH,
                person: {},
                cast: [],
                personBackground: '',
                lightboxData: [],
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
                window.scroll(0, 0)
                this.spinnerStatus = true

                PeopleService.getDetails(this.id, (data) => {
                    if (data.combined_credits.cast && data.combined_credits.crew) {
                        const castObj = {}
                        data.combined_credits.cast.forEach(item => {
                            castObj[item.id] = item
                        })
                        data.combined_credits.crew.forEach(item => {
                            if (castObj[item.id]) {
                                let prefix = ''
                                if (!castObj[item.id].job) {
                                    castObj[item.id].job = ''
                                } else {
                                    prefix = ', '
                                }
                                castObj[item.id].job += prefix + item.job
                            } else {
                                castObj[item.id] = item
                            }
                        })
                        this.cast = Object.values(castObj).sort((a, b) => b.popularity - a.popularity)
                    }

                    this.spinnerStatus = false
                    this.person = data
                    this.lightboxData = this.person.images.profiles.concat(this.person.tagged_images.results)
                    this.personBackground = this.person.tagged_images.results.find((image) => image.aspect_ratio > 1.5)
                        ? this.person.tagged_images.results.find((image) => image.aspect_ratio > 1.5).file_path
                        : ''
                })
            }
        },
        watch: {
            '$route': 'getData'
        }
    }
</script>

<style lang="scss" src="./app-details.scss" scoped></style>
