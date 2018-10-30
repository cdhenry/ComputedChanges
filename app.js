new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function() {
            console.log('Computed')
            return this.counter > 5 ? "Greater Than 5" : "Smaller Than 5"
        }
    },
    methods: {
        result: function() {
            console.log('Method')
            return this.counter > 5 ? "Greater Than 5" : "Smaller Than 5"
        }
    }
});