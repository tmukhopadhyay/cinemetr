<template>
    <section class="modal">
        <figure class="overlay" @click="show">
            <svg width="50px" height="50px" viewBox="0 0 50 50" class="play-icon">
                <title>Play Icon</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Video-Component-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="1">
                    <g id="Video-Player---Variations" transform="translate(-455.000000, -165.000000)">
                        <g id="Blue">
                            <g id="Vid-Player:-16:9-Ratio-@-460x259" transform="translate(250.000000, 60.000000)">
                                <g id="Play-Icon" transform="translate(205.000000, 105.000000)">
                                    <circle id="Mask" stroke="#E0BB06" stroke-width="2" cx="25" cy="25" r="24"></circle>
                                    <text id="" font-family="FontAwesome" font-size="32" font-weight="normal" fill="#E0BB06">
                                        <tspan x="15" y="37"></tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </figure>
        <modal name="modal"
            :adaptive="true"
            :height="476"
            :width="800">
            <app-carousel
                v-if="useCarousel"
                :data="data"
                :disable3d="true"
                :disableSubtitle="true"
                :slide-items="1"
                :slide-height="394"
                :slide-width="710"
                :video-slider="videoSlider">
            </app-carousel>
        </modal>
    </section>
</template>

<script>
    import Vue from 'vue'
    import VModal from 'vue-js-modal'
    import AppCarousel from '../app-carousel/AppCarousel'

    Vue.use(VModal)

    export default {
        name: 'appModal',
        components: {
            'app-carousel': AppCarousel
        },
        props: {
            data: Array | Object,
            useCarousel: {
                type: Boolean,
                default: false
            },
            videoSlider: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            show () {
                this.$modal.show('modal')
            },
            hide () {
                this.$modal.hide('modal')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.2);
            transition: background-color 0.4s;

            &:hover {
                background-color: rgba(0, 0, 0, 0.4);
            }
        }
    }
    .v--modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        z-index: 1001;
    }
</style>

