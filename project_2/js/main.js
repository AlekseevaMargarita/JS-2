/* 1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. 
Продумайте, какие методы понадобятся для работы с этими сущностями.
2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
 */

'use strict';

//class GoodsList
class ProductList {
    constructor(container = '.products') {
        this._container = document.querySelector(container);
        //массив товаров (объектов), полученный с помощью метода _fetchGoods
        this._goods = [];
        /* массив товаров (объектов класса ProductItem), 
        полученный с помощью метода _render */
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }

    //получить список товаров
    _fetchGoods() {
        this._goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    //отрисовать список товаров
    _render() {
        //перебираем массив товаров
        for (const product of this._goods) {
            //создаем объект товара, имеющий метод создания html разметки
            const productObject = new ProductItem(product);
            //добавляем созданный объект в this._allProducts
            this._allProducts.push(productObject);
            //генерируем разметку и добавляем ее в div с классом .products
            this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    //2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
    get_sum() {
        /* перебираем массив товаров с сохранением промежуточного результата s,
        item - текущий элемент массива, 0 - начальное значение s */
        const sum = this._allProducts.reduce((s, item) => s + item.price, 0);
        return sum;
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

const list = new ProductList();
console.log(list.get_sum());


/* 1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. 
Продумайте, какие методы понадобятся для работы с этими сущностями */
class Basket {
    //добавить товар в корзину
    addProduct() {

    }
    //удалить товар из корзины
    removeProduct() {

    }
    //изменить количество товаров
    changeQuantity() {

    }
    //отрисовать список товаров корзины
    render() {

    }
}

class ElemBasket {
    //отрисовать товар
    render() {

    }

}



// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products')
//       .insertAdjacentHTML(
//           'beforeend',
//           list.map(item => renderProduct(item)).join('')
//       );
// };
//
// renderProducts(products);
//
