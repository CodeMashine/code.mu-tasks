'use strict';

const main = document.querySelector('.main');

let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];

function render(obj) {
    let counter =0 ;
    for (let prop of obj) {
        let div = createEl(`
        <div>
        <div class='question' data-index='${counter++}'>${prop['text']}</div>
        <input type='text' class='answer'>
        </div>`)
        main.append(div);
    }
}


function keyHandler(event) {
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
        if (event.target.classList.contains('answer')) {
            let index = event.target.parentElement.children[0].dataset.index;
            if (event.target.value ==questions[index]['right']) {
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