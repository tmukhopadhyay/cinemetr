<template>
    <section>
        <figure class="poster-wrapper">
            <img :src="imagePath + data.backdrop_path" class="poster" />
            <section class="overlay"></section>
        </figure>
        <section class="site-width clearfix statistic">
            <img :src="imagePath + data.poster_path" class="pull-left snapshot" />
            <section class="pull-left metadata">
                <h2 class="title">{{data.title || data.name}}</h2>
                <p class="captions">
                    <a href="#" class="bullet" v-for="genre in data.genres" :key="genre.id">
                        {{genre.name}}
                    </a>
                </p>
                <p v-for="(country, index) in data.releases.countries"
                    v-if="index < 1"
                    :key="country.iso_3166_1"
                    class="certification text-small color-yellow">
                        <span class="item">{{country.release_date | toDate}} ({{country.iso_3166_1}})</span>
                        <span class="item">{{country.certification}}</span>
                        <span class="item">{{data.runtime}} MIN</span>
                </p>
                <section class="table credits text-small text-bold">
                    <section class="table-row">
                        <span class="table-cell">DIRECTOR</span>
                        <span class="table-cell color-yellow">
                            <template v-for="person in data.credits.crew" v-if="person.job === 'Director'">
                                {{person.name}}
                            </template>
                        </span>
                    </section>
                    <section class="table-row">
                        <span class="table-cell">WRITERS</span>
                        <span class="table-cell color-yellow">
                            <template v-for="(person, index) in data.credits.crew" v-if="person.department === 'Writing'">
                                {{person.name}}<template v-if="index < (data.credits.crew.length - 1)">, </template>
                            </template>
                        </span>
                    </section>
                </section>
                <p class="overview">{{data.overview}}</p>
            </section>
            <section class="pull-left rating-container">
                <section class="featured">
                    <p class="title">{{data.vote_average}}</p>
                    <p class="subtitle">{{data.vote_count | format}} USERS</p>
                    <i class="fa fa-star icon" aria-hidden="true"></i>
                </section>
                <section class="clearfix rating-list">
                    <section class="pull-left one-half rating">
                        <p class="title">90%</p>
                        <p class="subtitle">ROTTEN TOMATOES</p>
                    </section>
                    <section class="pull-left one-half rating">
                        <p class="title">78</p>
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
                data: {}
            }
        },
        props: {
            id: Number | String,
            type: String
        },
        created () {
            MovieService.getDetails(this.id, (data) => { this.data = data })
        }
    }
</script>

<style lang="scss" scoped>
    .poster-wrapper {
        position: relative;

        .poster {
            display: block;
            width: 100%;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.2) 50%,
                rgba(0, 0, 0, 0.6) 70%,
                rgba(0, 0, 0, 1) 100%)
        }
    }
    .statistic {
        position: relative;
        top: -157px;

        .snapshot {
            width: 20%;
        }
        .metadata {
            color: #DDD;
            width: 60%;
            padding: 0 20px;

            .title {
                font-size: 30px;
                font-weight: 300;
                line-height: 24px;
                margin-bottom: 15px;
            }
            .captions {
                margin-bottom: 10px;
            }
            .certification {
                .item {
                    margin-right: 20px;
                }
            }
            .credits {
                margin: 15px 0;
            }
            .overview {
                font-size: 14px;
                line-height: 20px;
                color: #616161;
                margin-top: 25px;
            }
        }
        .rating-container {
            width: 20%;
            text-align: center;

            .featured {
                background-color: #C7A605;
                padding: 30px 0;
                position: relative;

                .title {
                    font-size: 56px;
                    font-weight: 300;
                    letter-spacing: -3px;
                    margin-bottom: 15px;
                }
                .subtitle {
                    font-size: 12px;
                    font-weight: 700;
                }
                .icon {
                    position: absolute;
                    bottom: -7px;
                    left: 50%;
                    margin-left: -7px;
                }
            }
            .rating {
                background-color: #AE9204;
                padding: 24px 10px;

                .title {
                    font-size: 24px;
                    margin-bottom: 5px;
                }
                .subtitle {
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 12px;
                }
                &:first-child {
                    background-color: #E0BB06;
                    padding: 18px 10px;
                }
            }
        }
    }
</style>
