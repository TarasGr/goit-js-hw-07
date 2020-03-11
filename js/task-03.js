/*Задание 3
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй
шаблонные строки и insertAdjacentHTML().

    Все элементы галереи должны добавляться в DOM за одну операцию вставки.
    Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

 */
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const createImg = image => {
    const item = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;

    img.width = '500';
    img.height = '500';

    item.appendChild(img);
    // console.log(item);
    // console.log(img);
    return item;
};

const createGallery = () => {
    const galleryRef = document.querySelector('#gallery');

    const items = images.map(image => createImg(image));

    galleryRef.append(...items); // Репета говорил пока пользоваться простым append
    galleryRef.classList.add('gallery');
    // console.log(galleryRef);
}
createGallery();