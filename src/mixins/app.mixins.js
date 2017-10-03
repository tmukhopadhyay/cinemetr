import Vue from 'vue'

Vue.mixin({
    methods: {
        isNotEmpty (obj) {
            return obj !== null && Object.keys(obj).length !== 0
        }
    }
})
