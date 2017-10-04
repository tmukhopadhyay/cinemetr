<template>
    <figure class="card clearfix" @click="goToDetails(item)">
        <img :src="item.poster" class="poster" />
        <section class="overlay"></section>
        <figcaption>
            <header>
                {{item.title}}
                <i v-if="item.hasTooltip"
                    class="fa fa-fw fa-info-circle color-yellow"
                    aria-hidden="true"
                    v-tooltip.right="item.tooltipText"></i>
            </header>
            <p class="captions">
                <a href="#" class="bullet" v-for="label in item.labels" :key="label.id">
                    {{label.name}}
                </a>
            </p>
            <p v-if="item.hasRatings" class="rating clearfix">
                <i class="fa fa-star color-yellow" aria-hidden="true"></i>
                {{item.rating.value}} / 10 from {{item.rating.count | format}} users
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
                    name: 'App' + item.type.charAt(0).toUpperCase() + item.type.slice(1),
                    params: {
                        id: item.id
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
