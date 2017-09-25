<template>
    <section class="carousel" v-if="items.length">
        <h3 class="section-title" v-if="title">{{title}}</h3>
        <h3 class="site-width section-subtitle" v-if="subtitle">
            {{subtitle}}
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <carousel-3d
            :autoplay="autoPlay"
            :controls-visible="true"
            :controls-prev-html="'&lt;i class=&quot;fa fa-chevron-circle-left&quot;&gt;&lt;/i&gt;'"
            :controls-next-html="'&lt;i class=&quot;fa fa-chevron-circle-right&quot;&gt;&lt;/i&gt;'"
            :display="slideItems"
            :inverse-scaling="inverseScaling"
            :height="slideHeight"
            :width="slideWidth"
            :space="slideSpace">
                <slide v-for="(item, index) in items" :index="index" :key="item.id">
                    <figure>
                        <img :src="'https://image.tmdb.org/t/p/w185' + item.poster_path" />
                        <figcaption>{{item.title}}</figcaption>
                    </figure>
                    Slide {{index}} Content
                </slide>
        </carousel-3d>
    </section>
</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d'

    export default {
        name: 'appCarousel',
        components: {
            Carousel3d,
            Slide
        },
        data () {
            return {
                items: []
            }
        },
        props: {
            autoPlay: {
                type: Boolean,
                default: false
            },
            isDynamic: Boolean,
            inverseScaling: {
                type: Number,
                default: 300
            },
            slideItems: {
                type: Number,
                default: 5
            },
            slideHeight: {
                type: Number,
                default: 240
            },
            slideWidth: {
                type: Number,
                default: 360
            },
            slideSpace: {
                type: Number,
                default: 240
            },
            title: String,
            subtitle: String,
            url: String
        },
        created () {
            if (this.isDynamic) {
                this.$http.get(this.url)
                    .then(data => {
                        this.items = data.body.results
                    }, error => {
                        console.error(error)
                    })
            } else {
                this.items = []
            }
        }
    }
</script>

<style lang="scss">
    .carousel {
        padding: 20px 0;
        background-color: #27272E;

        .carousel-3d-container {
            .carousel-3d-slide {
                border-color: rgba(0, 0, 0, .6);
            }
            .carousel-3d-controls {
                .prev,
                .next {
                    font-size: 32px;
                    color: #777;
                }
            }
        }
    }
</style>
