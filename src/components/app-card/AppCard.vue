<template>
    <figure class="card clearfix">
        <img :src="imagePath + item.poster_path" class="pull-left poster" />
        <figcaption class="pull-left">
            <header>{{item.title || item.name}}</header>
            <hr class="divider" />
            <p>
                <span class="bullet" v-for="genre in item.genre_ids" :key="genre.id">
                    {{genre | genreName}}
                </span>
            </p>
            <hr class="divider" />
            <p class="rating">
                <i class="fa fa-star color-yellow" aria-hidden="true"></i>
                {{item.vote_average}} / 10
            </p>
            <hr class="divider" />
            <p class="description">{{item.overview | truncate(100)}}</p>
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    $poster-width: 50% !default;

    .card {
        padding: 5px;
        background-color: #FFF;
        border: 1px solid #DDD;
        border-radius: 3px;
        box-shadow: 0 0 1px #AAA;
        transition: box-shadow 0.5s;

        .poster {
            width: $poster-width;
            border-radius: 3px 0 0 3px;
        }
        figcaption {
            padding-left: 10px;
            width: $poster-width;

            header {
                font-size: 14px;
                font-weight: 700;
                line-height: 18px;
                color: #DE7704;
                text-transform: uppercase;
            }
            .divider {
                border-width: 1px 0 0;
                border-style: solid;
                border-color: #E6E6E6;
            }
            .rating {
                font-size: 13px;
                color: #616161;
                font-weight: 700;
            }
            .description {
                font-size: 13px;
                line-height: 16px;
                color: #616161;
            }
        }
        &:hover {
            box-shadow: 0 0 10px #999;
        }
    }
</style>
