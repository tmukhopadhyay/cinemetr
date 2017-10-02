<template>
    <section>
        <figure class="poster-wrapper" :style="{ backgroundImage: 'url(' + imagePath + tmdb.backdrop_path + ')' }">
            <section class="site-width clearfix statistic">
                <img :src="imagePath + tmdb.poster_path" class="pull-left snapshot" />
                <section class="pull-left metadata">
                    <h2 class="title">{{tmdb.title || tmdb.name}}</h2>
                    <p class="captions">
                        <a href="#" class="bullet" v-for="genre in tmdb.genres" :key="genre.id">
                            {{genre.name}}
                        </a>
                    </p>
                    <p class="certification text-small text-bold color-yellow">
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
            <section class="overlay"></section>
        </figure>
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

<style lang="scss" scoped>
    .poster-wrapper {
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        height: 450px;
        margin-bottom: 200px;

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
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.6) 70%,
                rgba(255, 255, 255, 1) 100%)
        }
    }
    .statistic {
        position: absolute;
        bottom: -146px;
        left: 50%;
        margin-left: -500px;
        z-index: 1000;

        .snapshot {
            width: 20%;
        }
        .metadata {
            color: #333;
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
                text-transform: uppercase;

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
                    bottom: -9px;
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
