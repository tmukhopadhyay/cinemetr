<template>
    <section class="segment" :class="{background: background}">
        <h3 class="section-title">{{title}}</h3>
        <h3 class="site-width section-subtitle">
            {{subtitle}} <i class="fa fa-angle-down" aria-hidden="true"></i>
        </h3>
        <ul v-if="data.length" class="clearfix site-width cards">
            <li v-for="(item, index) in data" v-if="index < 8" :key="item.id" class="pull-left card-wrapper">
                <app-card :item="item" :image-path="imagePath"></app-card>
            </li>
        </ul>
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
            imagePath: String,
            title: String,
            subtitle: String
        }
    }
</script>

<style lang="scss" scoped>
    .segment {
        padding: 25px 0 30px;

        .cards {
            .card-wrapper {
                width: 25%;
            }
        }
        &.background {
            background-color: #F1F1F1;
        }
    }
</style>
