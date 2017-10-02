<template>
    <section>
        <img :src="imagePath + data.backdrop_path" class="backdrop" />
    </section>
</template>

<script>
    import Vue from 'vue'

    import SeriesService from '../../services/series.service'

    export default {
        name: 'appShow',
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
            SeriesService.getDetails(this.id, (data) => { this.data = data })
        }
    }
</script>

<style lang="scss" scoped>
    .backdrop {
        display: block;
        width: 100%;
    }
</style>
