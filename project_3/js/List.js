'use strict';

class List {
    constructor(url, container, list = listing) {
        this.container = container;
        this.url = url;
        this.list = list;
        this.goods = [];
        this.allProducts = [];
        this._init();
    }

    getProducts(url) {
        return fetch(url ? url : `${API + this.url}`)
            .then((response) => response.json())
            .catch((err) => console.log(err));
    }

    handleData(data) {
        this.goods = [...data];
        this.render();
    }

    render() {
        const block = document.querySelector(this.container);
        for (const product of this.goods) {
            const productObject = new this.list[this.constructor.name](product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
        }
    }
    _init() {
        return false;
    }
}