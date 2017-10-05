<template>
    <section class="spinner-container" v-show="spinnerStatus">
        <spinner size="large"
            message="Loading..."
            line-fg-color="#C7A605"
            :speed="0.75"
            :spacing="255">
        </spinner>
    </section>
</template>

<script>
    import Spinner from 'vue-simple-spinner'

    export default {
        name: 'appSpinner',
        components: {
            'spinner': Spinner
        },
        data () {
            return {
                isVisible: true
            }
        },
        props: {
            spinnerStatus: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .spinner-container {
        padding: 200px 0;
        text-align: center;
    }
</style>
