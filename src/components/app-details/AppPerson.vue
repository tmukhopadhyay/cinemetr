<template>
    <section class="relative" v-if="isNotEmpty(person)">
        <figure class="poster-wrapper">
            <img class="poster" :src="backdropPath + person.combined_credits.cast[0].backdrop_path" />
            <section class="overlay"></section>
        </figure>
        <section class="site-width clearfix statistic">
            <img :src="imagePath + person.profile_path" class="pull-left snapshot" />
            <section class="pull-left metadata">
                <h2 class="title">{{person.name}}</h2>
                <p class="certification text-small text-bold">
                    <span class="item">BORN {{person.birthday | toDate}} IN {{person.place_of_birth}}</span>
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
                    <section class="table-row">
                        <span class="table-cell">MOVIE</span>
                        <span class="table-cell color-yellow">
                            <template v-for="(credit, index) in person.movie_credits.cast" v-if="index < 20">
                                {{credit.title}}<template v-if="index < 19">,</template>
                            </template>
                        </span>
                    </section>
                    <section class="table-row">
                        <span class="table-cell">TV</span>
                        <span class="table-cell color-yellow">
                            <template v-for="(credit, index) in person.tv_credits.cast" v-if="index < 20">
                                {{credit.name}}<template v-if="index < 19">,</template>
                            </template>
                        </span>
                    </section>
                </section>
            </section>
            <section class="pull-left rating-container">
                <section class="featured">
                    <p class="title">{{person.popularity.toFixed(1)}}</p>
                    <p class="subtitle">POPULARITY</p>
                </section>
                <section class="clearfix rating-list">
                    <section class="pull-left one-half rating">
                        <p class="title">{{person.tv_credits.cast.length}}</p>
                        <p class="subtitle">TV APPEARENCES</p>
                    </section>
                    <section class="pull-left one-half rating">
                        <p class="title">{{person.movie_credits.cast.length}}</p>
                        <p class="subtitle">MOVIES</p>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import PeopleService from '../../services/people.service'

    export default {
        name: 'appMovie',
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                backdropPath: Vue.config.BACKDROP_PATH,
                person: {}
            }
        },
        props: {
            id: Number | String,
            type: String
        },
        created () {
            PeopleService.getDetails(this.id, (data) => {
                this.person = data
            })
        }
    }
</script>

<style lang="scss" src="./app-details.scss" scoped></style>
