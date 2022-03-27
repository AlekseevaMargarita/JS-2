/* 
1. Переделайте getRequest() так, чтобы она использовала промисы.
2. Добавьте в соответствующие классы методы добавления товара в корзину, 
удаления товара из корзины и получения списка товаров корзины.
3. Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, 
а render() вызывался в обработчике этого промиса (сделано на занятии)
 */

'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const listing = {
  ProductsList: Item,
  CartList: CartItem
};

let cart = new CartList();
let products = new ProductsList(cart);

