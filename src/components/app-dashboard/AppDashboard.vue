<template>
    <section>
        <app-spinner :spinner-status="spinnerStatus"></app-spinner>
        <section v-if="!spinnerStatus">
            <app-carousel
                :data="upcomingMovies"
                :inverse-scaling="150"
                :slide-items="9"
                :slide-height="276"
                :slide-width="185"
                :slide-space="190"
                title="Movies"
                subtitle="Coming Soon">
            </app-carousel>
            <app-segment
                :background="false"
                :data="nowPlayingMovies"
                title="Movies"
                subtitle="Now Playing">
            </app-segment>
            <app-segment
                :background="true"
                :data="popularSeries"
                title="Tv shows"
                subtitle="Airing Today">
            </app-segment>
            <app-segment
                :background="false"
                :data="popularPeople"
                title="People"
                subtitle="Popular">
            </app-segment>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppCarousel from '../app-carousel/AppCarousel'
    import AppSegment from '../app-segment/AppSegment'
    import AppSpinner from '../app-spinner/AppSpinner'

    import MovieService from '../../services/movies.service'
    import SeriesService from '../../services/series.service'
    import PeopleService from '../../services/people.service'

    export default {
        name: 'appDashboard',
        components: {
            'app-carousel': AppCarousel,
            'app-segment': AppSegment,
            'app-spinner': AppSpinner
        },
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                upcomingMovies: [],
                nowPlayingMovies: [],
                popularSeries: [],
                popularPeople: [],
                spinnerStatus: true
            }
        },
        created () {
            MovieService.getUpcomingMovies(true, 2, (movies) => { this.upcomingMovies = movies })
            MovieService.getNowPlayingMovies(false, 1, (movies) => { this.nowPlayingMovies = movies })
            SeriesService.getAiringToday(false, 1, (series) => { this.popularSeries = series })
            PeopleService.getPopularPeople(false, 1, (people) => {
                this.popularPeople = people
                this.spinnerStatus = false
            })
        }
    }
</script>
