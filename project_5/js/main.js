/* 
1. Добавить методы и обработчики событий для поля поиска. 
Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода. 
На кнопку «Искать» добавить обработчик клика, вызывающий метод FilterGoods.
2. Добавить корзину. В html-шаблон добавить разметку корзины. 
Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.
3. *Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, 
если список товаров пуст. 
*/

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    products: [],
    cartItems: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    imgCart: 'https://via.placeholder.com/50x100',
    searchLine: '',
    filtered: [],
    isVisibleCart: false
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
              find.quantity++;
            } else {
              const prod = Object.assign({ quantity: 1 }, product);
              this.cartItems.push(prod);
            }
          }
        })
    },
    remove(item) {
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            if (item.quantity > 1) {
              item.quantity--;
            } else {
              this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
          }
        })
    },
    filterGoods() {
      let regexp = new RegExp(this.searchLine, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
    }
  },
  beforeCreated() { },
  created() { },
  beforeMount() { },

  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      });
  },

  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
});
