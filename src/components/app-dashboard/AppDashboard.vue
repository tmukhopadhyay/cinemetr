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
        <br/><br/>
        <h3 class="section-title">Movies</h3>
        <h3 class="site-width section-subtitle">
            Now Playing
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <ul v-if="nowPlayingMovies.length" class="clearfix site-width cards">
            <li v-for="(movie, index) in nowPlayingMovies" v-if="index < 6" :key="movie.id" class="pull-left card-wrapper">
                <app-card :item="movie" :image-path="imagePath"></app-card>
            </li>
        </ul>

        <br/><br/><br/>
        <h3 class="section-title">Tv shows</h3>
        <h3 class="site-width section-subtitle">
            Popular
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <ul v-if="popularSeries.length" class="clearfix site-width cards">
            <li v-for="(show, index) in popularSeries" v-if="index < 6" :key="show.id" class="pull-left card-wrapper">
                <app-card :item="show" :image-path="imagePath"></app-card>
            </li>
        </ul>
    </section>
</template>

<script>
    import Vue from 'vue'

    import AppCard from '../app-card/AppCard'
    import AppCarousel from '../app-carousel/AppCarousel'

    import MovieService from '../../services/movies.service'
    import SeriesService from '../../services/series.service'

    export default {
        name: 'appDashboard',
        components: {
            'app-card': AppCard,
            'app-carousel': AppCarousel
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

<style lang="scss" scoped>
    .cards {
        max-width: 1010px;
        margin: 0 auto;

        .card-wrapper {
            padding: 5px;
            width: 50%;
        }
    }
</style>
