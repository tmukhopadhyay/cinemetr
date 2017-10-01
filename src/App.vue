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
    }
    .site-width {
        max-width: 1000px;
        margin: 0 auto;
    }
    .clearfix {
        &:before,
        &:after {
            content: '';
            clear: both;
            display: block;
        }
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
        color: #616161;
        display: inline-block;
        padding: 3px;
        border: 1px solid #CCC;
        border-radius: 2px;
        background-color: #DDD;
        box-shadow: 0 0 1px #999;
        margin: 2px 5px 2px 0;
        text-decoration: none;
    }
    .color-yellow {
        color: #C7A605;
    }
</style>
