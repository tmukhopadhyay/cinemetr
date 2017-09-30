<template>
    <footer>
        <section class="site-width clearfix sitemap">
            <ul class="pull-left column">
                <li class="heading">cinemetr</li>
                <li>A website to show movie metadata</li>
            </ul>
            <ul class="pull-left column">
                <li class="title">Explore</li>
                <li><a href="/">Home</a></li>
                <li><a href="#" target="_blank">Top Rated Movies</a></li>
            </ul>
            <ul class="pull-left column">
                <li class="title">Follow</li>
                <li><a href="#" target="_blank">Facebook</a></li>
                <li><a href="#" target="_blank">LinkedIn</a></li>
            </ul>
            <ul class="pull-left column">
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
        padding: 40px 20px;

        .sitemap {
            margin-bottom: 40px;
        }
        .column {
            width: 25%;

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

