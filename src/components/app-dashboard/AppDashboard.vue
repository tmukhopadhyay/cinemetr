<template>
    <section>
        <app-carousel
            :is-dynamic="true"
            :inverse-scaling="150"
            :slide-items="9"
            :slide-height="278"
            :slide-width="185"
            :slide-space="190"
            title="Movies"
            subtitle="Coming Soon"
            url="https://api.themoviedb.org/3/movie/upcoming?api_key=0312d542ff3bc63a78d6647fe5727160&language=en-US&page=1">
        </app-carousel>
        <br/><br/>
        <h3 class="section-title">Movies</h3>
        <h3 class="site-width section-subtitle">
            Now Playing
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <ul v-if="movies.length" class="clearfix site-width cards">
            <li v-for="(movie, index) in movies" v-if="index<9" :key="movie.id" class="pull-left card-wrapper">
                <app-card :item="movie"></app-card>
            </li>
        </ul>

        <br/><br/><br/>
        <h3 class="section-title">Tv shows</h3>
        <h3 class="site-width section-subtitle">
            Popular
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <ul v-if="series.length" class="clearfix site-width cards">
            <li v-for="(show, index) in series" v-if="index<9" :key="show.id" class="pull-left card-wrapper">
                <app-card :item="show"></app-card>
            </li>
        </ul>
    </section>
</template>

<script>
    import AppCard from '../app-card/AppCard'
    import AppCarousel from '../app-carousel/AppCarousel'

    export default {
        name: 'appDashboard',
        components: {
            'app-card': AppCard,
            'app-carousel': AppCarousel
        },
        data () {
            return {
                a: 1,
                movies: [],
                series: []
            }
        },
        created () {
            this.$http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0312d542ff3bc63a78d6647fe5727160&language=en-US&page=1')
                .then(data => {
                    this.movies = data.body.results
                }, error => {
                    console.error(error)
                })

            this.$http.get('https://api.themoviedb.org/3/tv/popular?api_key=0312d542ff3bc63a78d6647fe5727160&language=en-US&page=1')
                .then(data => {
                    this.series = data.body.results
                }, error => {
                    console.error(error)
                })
        }
    }
</script>

<style lang="scss" scoped>
    .cards {
        max-width: 1010px;
        margin: 0 auto;

        .card-wrapper {
            padding: 5px;
            width: 33.33%;
        }
    }
</style>
