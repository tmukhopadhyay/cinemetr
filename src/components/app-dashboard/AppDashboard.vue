<template>
    <section>
        <app-carousel
            :data="upcomingMovies"
            :inverse-scaling="150"
            :image-path="imagePath"
            :slide-items="9"
            :slide-height="278"
            :slide-width="185"
            :slide-space="190"
            title="Movies"
            subtitle="Coming Soon">
        </app-carousel>
        <app-segment
            :background="false"
            :data="nowPlayingMovies"
            :image-path="imagePath"
            title="Movies"
            subtitle="Now Playing">
        </app-segment>
        <app-segment
            :background="true"
            :data="popularSeries"
            :image-path="imagePath"
            title="Tv shows"
            subtitle="Popular">
        </app-segment>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppCarousel from '../app-carousel/AppCarousel'
    import AppSegment from '../app-segment/AppSegment'

    import MovieService from '../../services/movies.service'
    import SeriesService from '../../services/series.service'

    export default {
        name: 'appDashboard',
        components: {
            'app-carousel': AppCarousel,
            'app-segment': AppSegment
        },
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                upcomingMovies: [],
                nowPlayingMovies: [],
                popularSeries: []
            }
        },
        created () {
            MovieService.getUpcomingMovies((movies) => { this.upcomingMovies = movies })
            MovieService.getNowPlayingMovies((movies) => { this.nowPlayingMovies = movies })
            SeriesService.getPopularSeries((series) => { this.popularSeries = series })
        }
    }
</script>
