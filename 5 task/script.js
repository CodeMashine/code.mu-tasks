'use strict';

let field = document.querySelector('.field');
const startBtn = document.querySelector('.start');
const score = document.querySelector('.score');
const timer = document.querySelector('.time');
const timeBtn = document.querySelector('.timeBtn');
let scoreCounter = 0;
let timeCounter = 5;

let interval ;

function render(a, b) {
    for (let i = 0; i < a; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < b; j++) {
            let td = document.createElement('td');
            td.classList.add('square');
            tr.append(td);
        }
        field.append(tr);

    }
}

function programChoise(num) {
    for (let i = 0; i < num; i++) {
        let table = document.querySelectorAll('.square');
        let randomIndex = Math.ceil(Math.random() * table.length - 1);
        table[randomIndex].className = 'chosen';
    }
}

function startGame() {
    timeBtn.removeEventListener('click', timerFuncDecrease);
    startBtn.removeEventListener('click', startGame);
    programChoise(2);
    showSecret();
    setTimeout(showSecret, 3000);
    setTimeout(function () {
        field.addEventListener('click', game)
    }, 3000);
    gameListener() ;
};

function game(event) {
    if (event.target.closest('.chosen')) {
        event.target.classList.add('uncovered');
        score.innerText =+score.innerText+1 ; // лучше так или с промежуточной переменной?
    } else if (event.target.closest('.square')) {
        event.target.classList.add('blue');
    }
}

function gameListener() {
    const chosenNum = document.querySelectorAll('.chosen');

    const timeCounter = +document.querySelector('.time').innerText;
   
    console.log(chosenNum.length);
    console.log(score.innerText);
    console.log(score.innerText==chosenNum.length);
    console.log(timeCounter);

    if (timeCounter < 0||(+score.innerText===chosenNum.length)) {
        stopGame();
        
        // }else if (timeCounter < 0||(+score.innerText===chosenNum.length)) {
    //         stopGame() ;
    //     }
    }

}

function stopGame() {
    clearInterval(interval, 1000) ; 
    // timer.innerText = 60 ;
    // scoreCounter = 0;
    // score.innerText = 0 ;
    field.removeEventListener('click', game);
    setTimeout(clearField, 2000);
    startBtn.addEventListener('click', startGame);
    timeBtn.addEventListener('click', timerFuncDecrease);
    console.log('game over');
}

function showSecret() {
    let secret = document.querySelectorAll('.chosen');
    for (let prop of secret) {
        prop.classList.toggle('red');
    }

    //setTimeout(showSecret , 3000) ;  почему то не вызывается из себя. рекурсия не работает
}

function clearField() {
    let field = document.querySelectorAll('td');
    for (let prop of field) {
        prop.className = 'square';
    }
}

function timerFuncDecrease() {
    startGame();
    interval= setInterval(tick, 1000); // правильное ли решение передать setinterval наружу? есть ли решение лучше?

    
}

function tick() {
    timer.innerText = timeCounter--;
}

render(10, 10);

startBtn.addEventListener('click', startGame);
timeBtn.addEventListener('click', timerFuncDecrease);