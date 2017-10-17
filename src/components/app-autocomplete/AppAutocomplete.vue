<template>
    <section class="pull-left autocomplete">
        <section class="pull-left search-box">
            <input class="search"
                type="text"
                placeholder="Search a movie, a tv show or a person"
                v-model="searchText"
                @keyup="fetchData" />
            <i aria-hidden="true" class="icon-search fa fa-search"></i>
        </section>
        <section class="results" v-show="movies.length || shows.length || people.length">
            <section class="site-width clearfix">
                <nav class="pull-left one-third" v-if="movies.length">
                    <p class="title">Movies</p>
                    <figure class="clearfix" v-for="movie in movies.slice(0, 5)" :key="movie.id">
                        <router-link :to="{ name: 'AppMovie', params: { id: movie.id } }">
                            <img class="pull-left poster"
                                :src="imagePath + movie.poster_path"
                                @error="getDefaultPoster" />
                        </router-link>
                        <figcaption class="pull-left">
                            <p class="title">
                                <router-link :to="{ name: 'AppMovie', params: { id: movie.id } }">
                                    {{movie.title}}
                                </router-link>
                            </p>
                            <p class="captions">
                                <a href="#" class="bullet" v-for="id in movie.genre_ids" :key="id">
                                    {{getGenreFromId(id).name}}
                                </a>
                            </p>
                            <p class="rating">
                                <i class="fa fa-star color-yellow" aria-hidden="true"></i>
                                {{movie.vote_average}} / 10 from {{movie.vote_count | format}} users
                            </p>
                        </figcaption>
                    </figure>
                </nav>
                <nav class="pull-left one-third" v-if="shows.length">
                    <p class="title">TV Shows</p>
                    <figure class="clearfix" v-for="show in shows.slice(0, 5)" :key="show.id">
                        <router-link :to="{ name: 'AppShow', params: { id: show.id } }">
                            <img class="pull-left poster"
                                :src="imagePath + show.poster_path"
                                @error="getDefaultPoster" />
                        </router-link>
                        <figcaption class="pull-left">
                            <p class="title">
                                <router-link :to="{ name: 'AppShow', params: { id: show.id } }">
                                    {{show.name}}
                                </router-link>
                            </p>
                            <p class="captions">
                                <a href="#" class="bullet" v-for="id in show.genre_ids" :key="id">
                                    {{getGenreFromId(id).name}}
                                </a>
                            </p>
                            <p class="rating">
                                <i class="fa fa-star color-yellow" aria-hidden="true"></i>
                                {{show.vote_average}} / 10 from {{show.vote_count | format}} users
                            </p>
                        </figcaption>
                    </figure>
                </nav>
                <nav class="pull-left one-third" v-if="people.length">
                    <p class="title">People</p>
                    <figure class="clearfix" v-for="person in people.slice(0, 5)" :key="person.id">
                        <router-link :to="{ name: 'AppPerson', params: { id: person.id } }">
                            <img class="pull-left poster"
                                :src="imagePath + person.profile_path"
                                @error="getDefaultPerson" />
                        </router-link>
                        <figcaption class="pull-left">
                            <p class="title">
                                <router-link :to="{ name: 'AppPerson', params: { id: person.id } }">
                                    {{person.name}}
                                </router-link>
                            </p>
                            <p class="captions">
                                <router-link
                                    v-for="credit in person.known_for"
                                    :key="credit.id"
                                    :to="{ name: 'App' + credit.media_type.charAt(0).toUpperCase() + credit.media_type.slice(1), params: { id: credit.id } }"
                                    class="bullet">
                                        {{credit.title || credit.name}}
                                </router-link>
                            </p>
                        </figcaption>
                    </figure>
                </nav>
            </section>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'
    import _ from 'lodash'

    import MovieService from '../../services/movies.service'
    import SeriesService from '../../services/series.service'
    import PeopleService from '../../services/people.service'

    export default {
        name: 'appAutocomplete',
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                searchText: '',
                movies: [],
                shows: [],
                people: []
            }
        },
        created () {
            document.addEventListener('click', (e) => {
                if (!this.hasClass(this.parents(e.target), 'autocomplete')) {
                    this.resetSearch()
                }
            })
        },
        methods: {
            parents (el) {
                let current = el
                let list = []

                while (current.parentNode !== null && current.parentNode !== document.documentElement) {
                    list.push(current.parentNode)
                    current = current.parentNode
                }
                return list
            },
            hasClass (elemList, className) {
                let el = elemList.find((el) => el.className.indexOf(className) !== -1)
                return !!el
            },
            resetSearch () {
                this.searchText = ''
                this.movies = []
                this.shows = []
                this.people = []
            },
            fetchData: _.debounce(function () {
                this.movies = []
                this.shows = []
                this.people = []

                if (this.searchText) {
                    MovieService.search(this.searchText, (movies) => { this.movies = movies })
                    SeriesService.search(this.searchText, (shows) => { this.shows = shows })
                    PeopleService.search(this.searchText, (people) => {
                        this.people = people
                    })
                }
            }, 500)
        },
        watch: {
            '$route': 'resetSearch'
        }
    }
</script>

<style lang="scss" scoped>
    .autocomplete {
        .search-box {
            margin: 14px 0 14px 20px;
            position: relative;

            .search {
                font-size: 14px;
                padding: 8px 30px 8px 10px;
                min-width: 300px;
                border: 1px solid #CCC;
                background-color: #F1F1F1;
                color: #616161;
                outline: none;

                &::-webkit-input-placeholder {
                    color: #AAA;
                }
                &::-moz-placeholder {
                    color: #AAA;
                }
                &:-ms-input-placeholder {
                    color: #AAA;
                }
                &:-moz-placeholder {
                    color: #AAA;
                }
            }
            .icon-search {
                position: absolute;
                top: 8px;
                right: 8px;
                color: #616161;
            }
        }
        .results {
            background-color: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid #CCC;
            position: absolute;
            top: 65px;
            left: 0;
            width: 100%;
            padding: 15px 0;
            z-index: 1002;

            nav {
                .title {
                    font-size: 12px;
                    font-weight: 700;
                    color: #616161;
                    margin-bottom: 10px;
                }
                figure {
                    padding: 5px 0;

                    .poster {
                        display: block;
                        width: 12%;
                    }
                    figcaption {
                        width: 88%;
                        padding-left: 15px;

                        .title {
                            font-size: 12px;
                            font-weight: 700;
                            line-height: 14px;
                            color: #616161;
                            margin: -2px 0 0;

                            a {
                                color: inherit;
                                text-decoration: none;

                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                        }
                        .captions {
                            margin-top: 3px;
                        }
                        .rating {
                            font-size: 10px;
                            font-weight: 700;
                            line-height: 12px;
                            color: #888;
                            margin: 5px 0 0;
                        }
                    }
                }
            }
        }
    }
</style>
