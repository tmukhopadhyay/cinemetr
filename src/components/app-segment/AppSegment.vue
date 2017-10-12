<template>
    <section class="segment" v-if="data.length" :class="{background: background}">
        <h3 class="section-title">{{title}}</h3>
        <h3 class="site-width section-subtitle">
            {{subtitle}} <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <nav class="clearfix site-width cards">
            <template v-for="(item, index) in data" v-if="index < 8">
                <app-card :item="item" :key="item.id"></app-card>
            </template>
        </nav>
    </section>
</template>

<script>
    import AppCard from '../app-card/AppCard'

    export default {
        name: 'appSegment',
        components: {
            'app-card': AppCard
        },
        props: {
            background: {
                type: Boolean,
                default: false
            },
            data: {
                type: Array,
                default: []
            },
            title: String,
            subtitle: String
        }
    }
</script>

<style lang="scss" scoped>
    .segment {
        padding: 25px 0 30px;

        .cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        &.background {
            background-color: #E6E6E6;
        }
    }
    @media screen and (max-width: 767px) {
        .segment {
            padding: 20px 0 0;
        }
    }
</style>
