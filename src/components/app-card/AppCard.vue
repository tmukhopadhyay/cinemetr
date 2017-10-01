<template>
    <figure class="card clearfix" @click="goToDetails(item)">
        <img :src="imagePath + item.poster_path" class="poster" />
        <section class="overlay"></section>
        <figcaption>
            <header>
                {{item.title || item.name}}
                <i class="fa fa-fw fa-info-circle color-yellow"
                    aria-hidden="true"
                    v-tooltip.right="item.overview"></i>
            </header>
            <p class="captions">
                <a href="#" class="bullet" v-for="genre in item.genre_ids" :key="genre.id">
                    {{genre | genreName}}
                </a>
            </p>
            <p class="rating clearfix">
                <i class="fa fa-star color-yellow" aria-hidden="true"></i>
                {{item.vote_average}} / 10 from {{item.vote_count | format}} users
            </p>
        </figcaption>
    </figure>
</template>

<script>
    export default {
        name: 'appCard',
        props: {
            imagePath: String,
            item: {
                type: Object,
                default: {}
            },
            type: String
        },
        methods: {
            goToDetails (item) {
                this.$router.push({
                    name: 'AppDetails',
                    params: {
                        id: item.id,
                        type: this.type
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>    
    .card {
        cursor: pointer;
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
        figcaption {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 15px;

            header {
                font-size: 14px;
                font-weight: 700;
                line-height: 18px;
                color: #FFF;
                text-transform: uppercase;
                margin-bottom: 10px;
            }
            .captions {
                margin-bottom: 10px;
            }
            .rating {
                font-size: 12px;
                color: #CCC;
                font-weight: 700;
            }
        }
    }
</style>
