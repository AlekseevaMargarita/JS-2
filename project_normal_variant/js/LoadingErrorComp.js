Vue.component('loadingError', {
    data() {
        return {
            errorMessage: 'Ошибка загрузки данных'
        }
    },
    template: `
        <p>{{ errorMessage }}</p>
    `
});