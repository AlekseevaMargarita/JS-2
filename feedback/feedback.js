/*   3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
a. Имя содержит только буквы.
b. Телефон имеет вид +7(000)000-0000.
c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
d. Текст произвольный.
e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке. */

'use strict';

const textTemplate = /^[a-zа-яё]+$/i;
const telTemplate = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
const emailTemplate = /^[\w._-]+@\w+\.[a-z]{2,4}$/i;
const textError = 'Введите имя, состоящее только из букв';
const telError = 'Номер телефона должен иметь вид: +7(000)000-0000';
const emailError = 'E-mail должен иметь вид: mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru';


function validation() {
    if (
        checkInput('name', textTemplate, textError) &&
        checkInput('phone', telTemplate, telError) &&
        checkInput('email', emailTemplate, emailError)
    ) {
        return true;
    }
}

function checkInput(id, pattern, err) {
    let text = document.getElementById(id).value;
    let elem = document.getElementById(id);
    errDelete(elem);
    if (!pattern.test(text)) {
        renderError(elem, err);
        return false;
    } else {
        return true;
    }
}

function renderError(elem, err) {
    elem.classList.add('red');
    elem.insertAdjacentHTML('afterend', `<span class="err">${err}</span>`);
}

function errDelete(elem) {
    if (elem.classList.contains('red')) {
        elem.classList.remove('red');
        document.querySelector('.err').remove();
    }
}





