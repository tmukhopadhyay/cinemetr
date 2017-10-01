<template>
    <section>
        <img :src="imagePath + data.backdrop_path" class="backdrop" />
    </section>
</template>

<script>
    import Vue from 'vue'

    import DetailsService from '../../services/details.service'

    export default {
        name: 'appDetails',
        data () {
            return {
                imagePath: Vue.config.IMAGE_PATH,
                backdropPath: Vue.config.BACKDROP_PATH,
                data: {}
            }
        },
        props: {
            id: String,
            type: String
        },
        created () {
            DetailsService.getDetails(this.id, (data) => { this.data = data })
        }
    }
</script>

<style lang="scss" scoped>
    .backdrop {
        display: block;
        width: 100%;
    }
</style>
