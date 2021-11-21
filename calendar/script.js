'use sctrict';


const year = document.querySelector('.year');
const list = document.querySelector('.days');
const currentMonth = document.querySelector('.currentMonth');

const date = new Date();
const prevBtn = document.querySelector('.previos');
const nextBtn = document.querySelector('.next');


let monthNum = date.getMonth() + 1;

currentMonth.classList.add(`${monthNum}`);

function render(month) {
    list.innerHTML = '';
    let date = new Date(2021, `${month}`, 0)
    let mounthLength = date.getDate();

    let month123 = date.toLocaleString('rus-ru', {
        month: 'long'
    }); //нашел в интернете

    let ul = document.createElement('ul');

    for (let i = 0; i < mounthLength; i++) {
        let li = document.createElement('li');
        li.innerText = i + 1;
        li.classList.add(`${li.innerText}`);
        ul.append(li);
    }
    list.append(ul); /// не смог подобрать команду которая перезаписывала бы содержимое list 
    currentMonth.innerText = month123;
    year.innerText = date.getFullYear();
}

function redDay() {
    if (currentMonth.classList.contains(`${monthNum}`)) {
        let currentDay = date.getDate() - 1;
        const days = document.querySelectorAll('li');
        days[`${currentDay}`].style.backgroundColor = 'red';
    }
}

render(monthNum);
redDay();

prevBtn.onclick = function () {
    let a = --monthNum;
    render(a);
    redDay();
}


nextBtn.onclick = function () {
    let a = ++monthNum;
    render(a);
    redDay();
}