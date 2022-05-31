const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        isLoadingError: false
    },
    methods: {
        getJson(url) {
            this.isLoadingError = false;
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error.message);
                    this.isLoadingError = true;
                })
        },
    },
    mounted() {
        console.log(this);
    }
});

