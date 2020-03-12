/*Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

    Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
    Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid.

 */

const ref = {
    validationInput: document.querySelector('#validation-input')
};

ref.validationInput.addEventListener('change', checkName);

function checkName(event) {
    Number(event.target.dataset.length) === event.target.value.length ? setValidColor(event.target) : setInvalidColor(event.target);
}
function setValidColor(target) {
    target.classList.remove('invalid');
    target.classList.add('valid');
}
function setInvalidColor(target) {
    target.classList.remove('valid');
    target.classList.add('invalid');
}