'use strict';

class Item {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.id = product.id_product;
    this.name = product.product_name;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class= "product-item" data-id="${this.id}" >
          <img src="${this.img}" alt="image">
            <div class="desc">
              <h3>${this.name}</h3>
              <p>${this.price} \u20bd</p>
              <button class="buy-btn" 
              data-id="${this.id}" 
              data-name="${this.name}" 
              data-price="${this.price}">Купить</button>
            </div>
          </div>`;
  }
}