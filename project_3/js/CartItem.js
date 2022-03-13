class CartItem extends Item {
    constructor(el, img) {
        super(el, img);
        this.quantity = el.quantity;
    }
    getHTMLString() {
        return `<div class="cart-item" data-id="${this.id}">
        <div class="product-bio">
        <img src="${this.img}" alt="image">
        <div class="product-desc">
        <p class="product-title">${this.name}</p>
        <p class="product-quantity">Quantity: ${this.quantity}</p>
    <p class="product-single-price">${this.price} \u20bd</p>
    </div>
    </div>
    <div class="right-block">
        <p class="product-price">${this.quantity * this.price} \u20bd</p>
        <button class="del-btn" data-id="${this.id}">&times;</button>
    </div>
    </div>`
    }
}