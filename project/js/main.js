/*1. Добавьте стили для верхнего меню, товара, списка товаров 
и кнопки вызова корзины.
2. Добавьте значения по умолчанию для аргументов функции.
Как можно упростить или сократить запись функций?
* 3. Сейчас после каждого товара на странице выводится запятая.
Из - за чего это происходит ? Как это исправить ?
*/

// Вариант 1 - добавлены значения по умолчанию для аргументов функции.

/* const products = [
  { id: 1, title: 'Notebook', price: 1000 },
  { id: 2, title: 'Mouse', price: 100 },
  { id: 3, title: 'Keyboard', price: 250 },
  { id: 4, title: 'Gamepad', price: 150 },
  {}
];

// Добавлены значения по умолчанию для аргументов функции.
const renderProduct = (title = 'Название товара отсутствует', price = 0) => {
  return `<div class="product-item">
            <img class="img-card" src="#" alt="image">
            <h3>${title}</h3>
            <p>${price} руб.</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = list => {
  const productList = list.map(item => renderProduct(item.title, item.price));
  console.log(productList);
  document.querySelector('.products').innerHTML = productList;
};

renderProducts(products); */


// Вариант 2 - выполнены задания 2 и 3.

// Упрощаем запись функции renderProduct.
const products = [
  { id: 1, title: 'Notebook', price: 1000 },
  { id: 2, title: 'Mouse', price: 100 },
  { id: 3, title: 'Keyboard', price: 250 },
  { id: 4, title: 'Gamepad', price: 150 },
];

const renderProduct = item => {
  return `<div class="product-item">
            <img class="img-card" src="#" alt="image">
            <h3>${item.title}</h3>
            <p>${item.price} руб.</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = list => {
  // Избавляемся от запятой.
  const productList = list.map(item => renderProduct(item)).join('');
  console.log(productList);
  document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);


// Вариант 3 - просто попробовала сделать аналог для варианта 1.

/* const products = [
  { id: 1, title: 'Notebook', price: 1000 },
  { id: 2, title: 'Mouse', price: 100 },
  { id: 3, title: 'Keyboard', price: 250 },
  { id: 4, title: 'Gamepad', price: 150 },
  {}
];

const renderProduct = item => {
  // Замена undefined значениями.
  return `<div class="product-item">
            <img class="img-card" src="#" alt="image">
            <h3>${isUndefined(item.title) ? 'Наименование отсутствует' : item.title}</h3>
            <p>${isUndefined(item.price) ? 0 : item.price} руб.</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

// Проверка на undefined.
function isUndefined(value) {
  if (value === undefined) {
    return true;
  }
}

const renderProducts = list => {
  const productList = list.map(item => renderProduct(item)).join('');
  console.log(productList);
  document.querySelector('.products').innerHTML = productList;
};

renderProducts(products); */