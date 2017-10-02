<template>
    <section>
        <figure class="poster-wrapper">
            <img :src="imagePath + data.backdrop_path" class="poster" />
            <section class="overlay"></section>
        </figure>
        <section class="site-width clearfix statistic">
            <img :src="imagePath + data.poster_path" class="pull-left snapshot" />
            <section class="pull-left metadata">{{data.title || data.name}}</section>
            <section class="pull-left rating">{{data.vote_average}}</section>
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
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.6) 70%,
                rgba(255, 255, 255, 1) 100%)
        }
    }
    .statistic {
        position: relative;
        top: -200px;
        
        .snapshot {
            width: 20%;
        }
        .metadata {
            width: 60%;
        }
        .rating {
            width: 20%;
        }
    }
</style>
