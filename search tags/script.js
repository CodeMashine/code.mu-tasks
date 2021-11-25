'use strict';

const input = document.querySelector('.input');
const outputTag = document.querySelector('.outputTag');
const descriptionTag = document.querySelector('.descriptionTag');
const btn = document.querySelector('.insert') ;

const tagdirectory = {
    'a': 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    'br': 'Тег <br> устанавливает перевод строки в том месте, где этот тег находится.',
    'button': `Тег <button> создает на веб-странице кнопки и по своему действию напоминает результат, 
                получаемый с помощью тега <input> (с атрибутом type="button | reset | submit").`,
    'canvas': `Создает область, в которой при помощи JavaScript можно рисовать разные объекты, выводить изображения, трансформировать их и менять свойства. 
                При помощи тега <canvas> можно создавать рисунки, анимацию, игры и др.`,
}


function tagInfo(event) {
    if (event.code === 'Enter'||event.type === 'click') {
        let request = document.querySelector('.input').value;
        if (tagdirectory[`${request}`]) {
            outputTag.innerText = request;
            descriptionTag.innerText = tagdirectory[`${request}`];
        } else {
            outputTag.innerText = 'error';
            descriptionTag.innerText = 'error';
        }

    }
}


document.addEventListener('keydown', tagInfo);

btn.onclick = tagInfo ;