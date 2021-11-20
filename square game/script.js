'use strict';

const field = document.querySelector('.field');
const startBtn = document.querySelector('.start');
const score = document.querySelector('.score');
const timer = document.querySelector('.time');
const timeBtn = document.querySelector('.timeBtn');
const scoreResult = document.querySelector('.score_result');
const timeResult = document.querySelector('.time_result');
let scoreCounter = 0;
let timeCounter = 60;
let timeIncrease = 0 ;

let interval;

function render(a, b) { //рисует игровое поле
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

function programChoise(num) { //выбирает ячеики 
    for (let i = 0; i < num; i++) {
        let table = document.querySelectorAll('.square');
        let randomIndex = Math.ceil(Math.random() * table.length - 1);
        table[randomIndex].className = 'chosen';
    }
}

function timerFuncDecrease() { // секундомер при игре на время
    // timeCounter = 60;
    interval = setInterval(() => { // записываем в глобальную переменную для доступа из других ф-ий
        timer.innerText = timeCounter--;
    }, 1000); // правильное ли решение передать setinterval наружу? есть ли решение лучше?
    startGame(); // запускаем игру
}

function timerFuncIncrease() { // секундомер при свободной игре
    // timeCounter = 0;
    interval = setInterval(() => {
        timeIncrease++;
    }, 1000);
    startGame();
}

function startGame() { // запускает игру убирая функциональность кнопок
    timeBtn.removeEventListener('click', timerFuncDecrease);
    startBtn.removeEventListener('click', timerFuncIncrease);

    programChoise(10);
    showSecret(); // показываем выбранные ячеики
    setTimeout(showSecret, 3000); // скрываем выбранные ячеики
    setTimeout(function () { // добавляем возможность выбирать ячеики
        field.addEventListener('click', game)
    }, 3000);
    gameListener(); // запускаем слушатель игры
}

function game(event) { // функция игры
    if (event.target.closest('.chosen')) {
        event.target.classList.add('uncovered');
        score.innerText = +score.innerText + 1; // лучше так или с промежуточной переменной?
    } else if (event.target.closest('.square')) {
        event.target.classList.add('blue');
    }
    gameListener();
}

function gameListener() { // слушатель игры
    const chosenNum = document.querySelectorAll('.chosen');

    if (timeCounter < 0 || (+score.innerText === chosenNum.length)) {
        stopGame();
    }
}

function stopGame() { // окончание игры
    clearInterval(interval, 1000); // останавливаем секундомер
    field.removeEventListener('click', game); // поле не реагирует на клики
    setTimeout(clearField, 2000); // через 2 секунды обновится поле  
    startBtn.addEventListener('click', startGame); // активация кнопок
    timeBtn.addEventListener('click', timerFuncDecrease);
    scoreResult.innerText = score.innerText;  // отображение результатов
    console.log(timeIncrease);
    if (timeIncrease) {
        timeResult.innerText = timeIncrease; 
    }else {
        timeResult.innerText = 60- +timer.innerText; 
    }



}

function showSecret() { // показ игроку выбраных программой ячеек
    let secret = document.querySelectorAll('.chosen');
    for (let prop of secret) {
        prop.classList.toggle('red');
    }
}

function clearField() {  // очищаем игровое поле выставляя значения по умолчанию
    timer.innerText = 60;
    score.innerText = 0
    let field = document.querySelectorAll('td');
    for (let prop of field) {
        prop.className = 'square';
    }
}


render(10, 10);

startBtn.addEventListener('click', timerFuncIncrease);
timeBtn.addEventListener('click', timerFuncDecrease);