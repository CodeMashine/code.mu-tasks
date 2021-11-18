let secret1 = document.querySelector('.secret_1')
let secretNum = document.querySelector('.secret_num');
let btn = document.querySelector('.compare');
let result = document.querySelector('.result');

function randomNum() {
    let num = Math.round(Math.random() * 101);
    console.log(num);
    return num;
}

const secret = randomNum();
secretNum.innerText = secret;


function compare() {
    let answer = +document.querySelector('.answer_1').value;
    if (answer === secret) {
        secret1.classList.remove('hide');
        return result.innerText = 'вы угадали';
    } else if (answer < secret) {
        return result.innerText = 'введите число побольше';
    } else if (answer > secret) {
        return result.innerText = 'введите число поменьше';
    } else if (answer != answer) {
        return result.innerText = 'вы ввели не число';
    }
}

function compareKey(event) {
    if (event.code == 'Enter') compare();
}

btn.addEventListener('click', compare)
document.addEventListener('keydown', (event) => {
    compareKey(event);
})