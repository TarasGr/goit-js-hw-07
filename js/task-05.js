/*Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */
const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

ref.nameInput.addEventListener('input', setName);

function setName(event) {
    ref.nameOutput.textContent = event.target.value !== '' ? event.target.value : 'незнакомец';
}