<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './components/app-header/AppHeader'
    import AppFooter from './components/app-footer/AppFooter'

    export default {
        components: {
            'app-header': AppHeader,
            'app-footer': AppFooter
        },
        name: 'app'
    }
</script>

<style lang="scss">
    @import "./assets/scss/normalize";
    @import "./assets/scss/font-awesome";
    @import "./assets/scss/tooltip";

    body {
        font-family: 'Lato', sans-serif;
        overflow-x: hidden;
        image-rendering:-webkit-optimize-contrast;
        image-rendering:-moz-crisp-edges;
        image-rendering:-o-crisp-edges;
        -ms-interpolation-mode:nearest-neighbor;
        text-rendering: optimizeLegibility;
    }
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    .site-width {
        max-width: 1000px;
        margin: 0 auto;
    }
    .one-half {
        width: 50%;
    }
    .one-third {
        width: 33.3333%;
    }
    .two-third {
        width: 66.6666%;
    }
    .one-fourth {
        width: 25%;
    }
    .pull-left {
        float: left;
    }
    .pull-right {
        float: right;
    }
    .clearfix {
        &:before,
        &:after {
            content: '';
            clear: both;
            display: block;
        }
    }
    .relative {
        position: relative;
    }
    .section-title {
        font-size: 18px;
        font-weight: 700;
        color: #616161;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 8px;
    }
    .section-subtitle {
        font-size: 12px;
        font-weight: 700;
        color: #888;
        text-align: center;
        display: table;
        white-space: nowrap;
        margin-bottom: 20px;

        &:before, &:after {
            content: '';
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC");
            background-position: right 1em top 50%;
            top: 50%;
            width: 50%;
            background-repeat: no-repeat;
            position: relative;
            display: table-cell;
        }
        &:after {
            background-position: left 1em top 50%;
        }
    }
    .bullet {
        font-size: 10px;
        font-weight: 700;
        line-height: 10px;
        color: #333;
        display: inline-block;
        padding: 3px;
        border: 1px solid #C7A605;
        border-radius: 2px;
        background-color: #C7A605;
        margin: 2px 5px 2px 0;
        text-decoration: none;
        transition: all 0.2s;

        &:hover {
            background-color: #AE9204;
            text-decoration: none;
        }
    }
    .color-yellow {
        color: #C7A605;
    }
    .color-twitter {
        color: #0084b4;
    }
    .color-facebook {
        color: #3B5998;
    }
    .color-instagram {
        color: #BC2A8D;
    }
    .table {
        display: table;

        .table-row {
            display: table-row;
        }
        .table-cell {
            display: table-cell;
            padding: 3px 5px;

            &:first-child {
                padding-left: 0;
            }
            &:last-child {
                padding-right: 0;
            }
        }
    }
    .text-regular {
        font-size: 14px;
        line-height: 22px;
    }
    .text-small {
        font-size: 12px;
    }
    .text-bold {
        font-weight: bold;
    }
    .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
        z-index: 1000;
    }
    .paginate {
        margin: 0 0 30px;

        .page {
            border-width: 1px 1px 1px 0;
            border-style: solid;
            border-color: #CCC;

            a {
                padding: 8px 14px;
                display: block;
                outline: none;
                text-decoration: none;
            }
            &.disabled {
                background-color: #E6E6E6;
                color: #919191;
            }
            &.active {
                background-color: #C7A605;
                border-color: #C7A605;
                color: #FFF;
            }
            &:first-child {
                border-width: 1px;
                border-radius: 3px 0 0 3px;
            }
            &:last-child {
                border-radius: 0 3px 3px 0;
            }
        }
    }
</style>
