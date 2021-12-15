'use strict';

const main = document.querySelector('.main');

let questions = {
    'Вопрос 1?': 'ответ 1',
    'Вопрос 2?': 'ответ 2',
    'Вопрос 3?': 'ответ 3',
}

function render(obj) {
    for (let prop in obj) {
        let div = createEl(`
        <div>
        <div class='question' data-index='${prop}'>${prop}</div>
        <input type='text' class='answer'>
        </div>`)
        main.append(div);
    }
}


function keyHandler(event) {
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
        if (event.target.classList.contains('answer')) {
            let index = event.target.parentElement.children[0].dataset.index;
            if (event.target.value == questions[index]) {
                event.target.className = 'correct';
            } else {
                event.target.className = 'wrong';
            }
        }
    }
}




function createEl(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild;
};


render(questions);
document.addEventListener('keydown', keyHandler);