<template>
    <section class="carousel" v-if="data.length">
        <h3 class="section-title" v-if="title">{{title}}</h3>
        <h3 class="site-width section-subtitle">
            <template v-if="subtitle">{{subtitle}}</template>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <carousel-3d
            :autoplay="autoPlay"
            :controls-visible="true"
            :controls-prev-html="'&lt;i class=&quot;fa fa-chevron-circle-left&quot;&gt;&lt;/i&gt;'"
            :controls-next-html="'&lt;i class=&quot;fa fa-chevron-circle-right&quot;&gt;&lt;/i&gt;'"
            :disable3d="disable3d"
            :display="slideItems"
            :inverse-scaling="inverseScaling"
            :height="slideHeight"
            :width="slideWidth"
            :space="slideSpace"
            :start-index="startIndex">
                <slide v-for="(item, index) in data" :index="index" :key="item.id">
                    <figure>
                        <img :src="item.poster" @error="getDefaultPoster" />
                        <figcaption v-if="item.captions">
                            <p v-for="(caption, index) in item.captions" :key="index">{{caption}}</p>
                        </figcaption>
                    </figure>
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
            data: {
                type: Array,
                default: []
            },
            disable3d: {
                type: Boolean,
                default: false
            },
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
            startIndex: {
                type: Number,
                default: 0
            },
            title: String,
            subtitle: String
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

                figcaption {
                    font-size: 12px;
                    color: #FFF;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    border-top: 1px solid rgba(255, 255, 255, 0.4);
                    padding: 7px;
                    text-align: center;

                    p {
                        margin-top: 4px;

                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
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
