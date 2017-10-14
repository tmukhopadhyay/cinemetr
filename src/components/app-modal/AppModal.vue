<template>
    <section class="modal">
        <figure class="overlay" @click="show"></figure>
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

