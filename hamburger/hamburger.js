class Param {
    //получить пару цена - калории
    constructor(element) {
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    constructor(size, toping, sauce) {
        //объект Размер
        this.size = new Param(this._select(size));
        //объект Начинка
        this.toping = new Param(this._select(toping));
        //массив с объектами Соусов/Приправ (может быть пустым)
        this.sauce = this._getSauce(sauce);
        //результат - показать суммы цены и калорий
        this.result = this._showSum("#price", "#calories");
    }

    _getSauce(name) {
        let result = [];
        this._selectAll(name).forEach(el => {
            let obj = new Param(el);
            result.push(obj);
        });
        return result;
    }

    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    _selectAll(name) {
        return document.querySelectorAll(`input[name=${name}]:checked`);
    }

    _sumPrice() {
        let result = this.size.price + this.toping.price;
        this.sauce.forEach(el => result += el.price);
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.toping.calories;
        this.sauce.forEach(el => result += el.calories);
        return result;
    }

    _showSum(price, calories) {
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}