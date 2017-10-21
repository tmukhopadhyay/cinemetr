<template>
    <section>
        <app-spinner :spinner-status="spinnerStatus"></app-spinner>
        <app-segment
            :background="false"
            :data="results"
            :title="title"
            :subtitle="subtitle">
        </app-segment>
        <section class="site-width clearfix" v-show="!spinnerStatus">
            <paginate
                :page-count="pages"
                :page-class="'pull-left page'"
                :prev-text="'Prev'"
                :prev-class="'pull-left page prev'"
                :next-text="'Next'"
                :next-class="'pull-left page next'"
                :click-handler="getData"
                :container-class="'paginate pull-right'">
            </paginate>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'
    import Paginate from 'vuejs-paginate'

    import AppCard from '../app-card/AppCard'
    import AppSegment from '../app-segment/AppSegment'
    import AppSpinner from '../app-spinner/AppSpinner'

    import MovieService from '../../services/movies.service'
    import SeriesService from '../../services/series.service'
    import PeopleService from '../../services/people.service'

    export default {
        name: 'appSearch',
        components: {
            'app-card': AppCard,
            'app-segment': AppSegment,
            'app-spinner': AppSpinner,
            'paginate': Paginate
        },
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                results: [],
                page: 1,
                pages: 0,
                spinnerStatus: true,
                title: '',
                subtitle: '',
                serviceMap: {
                    movie: {
                        context: MovieService,
                        title: 'MOVIES',
                        popular: {
                            subtitle: 'Popular',
                            method: MovieService.getPopularMovies
                        },
                        top_rated: {
                            subtitle: 'Top Rated',
                            method: MovieService.getTopRatedMovies
                        },
                        discover: {
                            subtitle: '',
                            method: MovieService.discover
                        }
                    },
                    tv: {
                        context: SeriesService,
                        title: 'TV SHOWS',
                        airing_today: {
                            subtitle: 'Airing Today',
                            method: SeriesService.getAiringToday
                        },
                        on_the_air: {
                            subtitle: 'On The Air',
                            method: SeriesService.getOnTheAir
                        },
                        popular: {
                            subtitle: 'Popular',
                            method: SeriesService.getPopularSeries
                        },
                        top_rated: {
                            subtitle: 'Top Rated',
                            method: SeriesService.getTopRatedSeries
                        },
                        discover: {
                            subtitle: '',
                            method: SeriesService.discover
                        }
                    },
                    person: {
                        context: PeopleService,
                        title: 'PEOPLE',
                        popular: {
                            subtitle: 'Popular',
                            method: PeopleService.getPopularPeople
                        }
                    }
                }
            }
        },
        props: {
            subtype: Number | String,
            type: String
        },
        created () {
            this.getData(this.page)
        },
        methods: {
            getData (pageNum) {
                window.scroll(0, 0)

                this.results = []
                this.spinnerStatus = true

                let service = this.serviceMap[this.type]
                let subtype = isNaN(Number(this.subtype)) ? this.subtype : 'discover'
                this.title = service.title
                this.subtitle = service[subtype].subtitle

                let paramArr = []
                paramArr.push(true)
                if (!isNaN(Number(this.subtype))) {
                    paramArr.push(this.subtype)
                }
                paramArr.push(pageNum)
                paramArr.push((movies, page, pages) => {
                    this.spinnerStatus = false
                    this.results = movies
                    this.page = page
                    this.pages = pages
                })

                service[subtype].method.apply(service.context, paramArr)
            }
        },
        watch: {
            '$route': 'getData'
        }
    }
</script>
