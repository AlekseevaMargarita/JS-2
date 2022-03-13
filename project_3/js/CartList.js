'use strict';

class CartList extends List {
    constructor(url = '/getBasket.json', container = '.cart-block') {
        super(url, container);
        this.getProducts()
            .then(data => {
                this.handleData(data.contents)
            });
    }
    addProduct(el) {
        this.getProducts(`${API}/addToBasket.json`)
            .then(data => {
                if (data.result === 1) {
                    const productId = +el.dataset['id'];
                    const find = this.allProducts.find(product => product.id === productId);
                    if (find) {
                        find.quantity++;
                        this._updateCart(find);
                    } else {
                        const product = {
                            id_product: productId,
                            price: +el.dataset['price'],
                            product_name: el.dataset['name'],
                            quantity: 1
                        };
                        this.goods = [product];
                        this.render();
                    }
                } else {
                    alert('Error');
                }
            })
    }
    removeProduct(el) {
        this.getProducts(`${API}/deleteFromBasket.json`)
            .then(data => {
                if (data.result === 1) {
                    const productId = +el.dataset['id'];
                    const find = this.allProducts.find(product => product.id === productId);
                    if (find.quantity > 1) {
                        find.quantity--;
                        this._updateCart(find);
                    } else {
                        this.allProducts.splice(this.allProducts.indexOf(find), 1);
                        document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
                    }
                } else {
                    alert('Error');
                }
            })
    }
    _updateCart(product) {
        let block = document.querySelector(`.cart-item[data-id="${product.id}"]`);
        block.querySelector('.product-quantity').textContent = `Quantity: ${product.quantity}`;
        block.querySelector('.product-price').textContent = `${product.quantity * product.price} \u20bd`;
    }
    _init() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
        console.log(this.container);
        document.querySelector(this.container).addEventListener('click', e => {
            if (e.target.classList.contains('del-btn')) {
                this.removeProduct(e.target);
            }
        })
    }
}