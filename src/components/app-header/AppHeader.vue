<template>
    <header>
        <section class="site-width clearfix">
            <h1 class="pull-left logo">
                <router-link :to="{ path: '/' }">
                    <img src="/static/images/logo.png" />
                </router-link>
            </h1>
            <app-autocomplete></app-autocomplete>
            <ul class="pull-right menubar">
                <li class="menu">
                    <span>DISCOVER</span>
                    <section class="menu-panel">
                        <section class="site-width clearfix">
                            <nav class="pull-left one-third">
                                <p class="title">Movies</p>
                                <p class="item">Top Rated</p>
                                <p class="item">Popular</p>
                            </nav>
                            <nav class="pull-left one-third">
                                <p class="title">TV Shows</p>
                                <p class="item">Popular</p>
                            </nav>
                            <nav class="pull-left one-third">
                                <p class="title">People</p>
                                <p class="item">Popular</p>
                            </nav>
                        </section>
                    </section>
                </li>
            </ul>
        </section>
    </header>
</template>

<script>
    import AppAutocomplete from '../app-autocomplete/AppAutocomplete'

    export default {
        name: 'appHeader',
        components: {
            'app-autocomplete': AppAutocomplete
        }
    }
</script>

<style lang="scss" scoped>
    header {
        border-bottom: 1px solid #CCC;
        position: relative;

        .logo {
            width: 70px;
            margin: 15px 20px 15px 0;

            a {
                outline: none;
            }
            img {
                display: block;
                width: 100%;
            }
        }
        .menubar {
            .menu {
                font-size: 14px;
                font-weight: 700;
                color: #616161;
                line-height: 42px;
                background-color: #F1F1F1;
                border-top: 2px solid #C7A605;
                float: left;
                padding: 10px 15px;
                cursor: default;

                &:hover {
                    .menu-panel {
                        display: block;
                    }
                }
            }
            .menu-panel {
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                padding: 15px 0;
                background-color: rgba(255, 255, 255, 0.9);
                border-bottom: 1px solid #CCC;
                position: absolute;
                top: 65px;
                left: 0;
                width: 100%;
                z-index: 1002;
                display: none;

                .title {
                    font-weight: 700;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
