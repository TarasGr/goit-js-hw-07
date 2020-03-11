/*Задание 4

Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

    Создай переменную counterValue в которой будет хранится текущее значение счетчика.
    Создай функции increment и decrement для увеличения и уменьшения значения счетчика
    Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */
const ref = {
    value: document.querySelector('#value'),
    increment: document.querySelector('button[data-action="increment"]'),
    decrement: document.querySelector('button[data-action="decrement"]'),
};
let counterValue = parseInt(ref.value.textContent);

ref.increment.addEventListener('click', increment);
ref.decrement.addEventListener('click', decrement);

function increment() {
    counterValue += 1;
    ref.value.textContent = counterValue;
}
function decrement() {
    counterValue > 0 ? counterValue -= 1 : 0;
    ref.value.textContent = counterValue;
}