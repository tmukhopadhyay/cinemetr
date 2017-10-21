<template>
    <footer>
        <section class="site-width clearfix sitemap">
            <ul class="column one-fourth">
                <li class="heading">cinemetr</li>
                <li>A website to show movie metadata</li>
            </ul>
            <ul class="column one-fourth">
                <li class="title">Movies</li>
                <li><router-link :to="{name: 'AppSearch', params: {type: 'movie', subtype: 'popular'}}">Popular</router-link></li>
                <li><router-link :to="{name: 'AppSearch', params: {type: 'movie', subtype: 'top_rated'}}">Top Rated</router-link></li>
            </ul>
            <ul class="column one-fourth">
                <li class="title">TV Shows</li>
                <li><router-link :to="{name: 'AppSearch', params: {type: 'tv', subtype: 'airing_today'}}">Airing Today</router-link></li>
                <li><router-link :to="{name: 'AppSearch', params: {type: 'tv', subtype: 'on_the_air'}}">On The Air</router-link></li>
                <li><router-link :to="{name: 'AppSearch', params: {type: 'tv', subtype: 'popular'}}">Popular</router-link></li>
                <li><router-link :to="{name: 'AppSearch', params: {type: 'tv', subtype: 'top_rated'}}">Top Rated</router-link></li>
            </ul>
            <ul class="column one-fourth">
                <li class="title">People</li>
                <li><router-link :to="{name: 'AppSearch', params: {type: 'person', subtype: 'popular'}}">Popular</router-link></li>
            </ul>
            <ul class="column one-fourth"></ul>
            <ul class="column one-fourth">
                <li class="title">Follow</li>
                <li><a href="https://www.facebook.com/tamal.mukherjee.180" target="_blank">Facebook</a></li>
                <li><a href="https://sg.linkedin.com/in/tamal-mukhopadhyay-29168024" target="_blank">LinkedIn</a></li>
            </ul>
            <ul class="column one-fourth">
                <li class="title">Contact Me</li>
                <li><a href="mailto:tamal.mukherjee10@gmail.com">tamal.mukherjee10@gmail.com</a></li>
            </ul>
        </section>
        <p class="site-width">&copy; 2017 Cinemetr. All Rights Reserved.</p>
    </footer>
</template>

<script>
    export default {
        name: 'appFooter'
    }
</script>

<style lang="scss" scoped>
    footer {
        font-size: 12px;
        color: #AAA;
        line-height: 22px;
        background-color: #27272E;
        padding: 40px 20px 30px;
        word-break: break-word;

        .sitemap {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }
        .column {
            margin-bottom: 20px;

            a {
                color: #AAA;
                text-decoration: none;
            }
            .heading {
                font-size: 16px;
                font-weight: 700;
                color: #FFF;
                text-transform: uppercase;
            }
            .title {
                font-weight: 700;
                color: #FFF;
            }
        }
    }
</style>
