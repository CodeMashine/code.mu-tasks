'use strict'

const main = document.querySelector('.questions');

const checkBtn = document.querySelector('.check') ;




let questions = [{
        text: 'вопрос 1?',
        right: 0,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 2?',
        right: 1,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 3?',
        right: 2,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
];


function createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild;
};

function render(arr) {
    let tests = document.createElement('div');
    tests.className = 'tests';
    let counter = 0;
    for (let prop of arr) {
        let questionBlock = document.createElement('div');
        questionBlock.className = `question ${counter}`;
        let textQuestion = document.createElement('span');
        // textQuestion.dataset.index= arr.indexOf(prop) ; //нужно ли вообще?
        textQuestion.innerText = prop['text'];

        questionBlock.append(textQuestion);

        let answerBlock = document.createElement('div');
        answerBlock.className = 'answerBlock';
        
        for (let i = 0 ; i < prop['variants'].length; i++ ) {
            let input =createElement(`
            <span>
            <input type="radio" data-parentIndex = ${arr.indexOf(prop)} name="answers ${counter}" value="${i}">
            <span>${prop['variants'][i]}</span>
            </span>
            `);
            answerBlock.append(input);
        }
        counter++;
        questionBlock.append(answerBlock);
        main.append(questionBlock) ;
    }
}

render(questions);

checkBtn.onclick = function (){
    let checked = document.querySelectorAll("input[type='radio']:checked") ;
    checked.forEach((item)=>{
        let answer = questions[item.dataset.parentindex]['right'] ;
        if (answer==item.value){
            main.children[`${item.dataset.parentindex}`].classList.add('green');
        }else{
            main.children[`${item.dataset.parentindex}`].classList.add('red');

        }
    })
} ;