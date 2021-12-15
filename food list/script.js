'use strict';

const addBtn = document.querySelector('.add');
const name = document.querySelector('.name');
const amount = document.querySelector('.amount');
const cost = document.querySelector('.cost');
const table = document.querySelector('.table');
const total = document.querySelector('.total');


function create() {

    let arr = [name.value, amount.value, cost.value, 'summ', 'удалить'];

    let tr = document.createElement('tr');
    for (let i = 0; i < arr.length; i++) {
        let td = document.createElement('td');
        td.dataset.num = i;
        if (arr[i] == 'summ') {
            td.className = 'price';
            td.innerText = arr[i - 2] * arr[i - 1];
        } else {
            td.innerText = arr[i];
        }

        td.onclick = function () {
            if (this.innerText == "удалить") {
                this.parentElement.remove();
                totalCost();
            }
        }

        name.value = amount.value = cost.value = '';
        tr.append(td);
    }
    table.append(tr);
    totalCost();
}


function changeVal(event) {
    let tdList = event.target.parentElement.querySelectorAll('td');
    const input = document.createElement('input');
    input.value = event.target.innerText;
    event.target.innerText = '';
    event.target.append(input);
    input.focus();
    input.onkeydown = function (ev) {
        if (ev.code == 'Enter' || ev.code == 'NumpadEnter') {
            event.target.innerText = this.value;
        }
        tdList[3].innerText = Number(tdList[1].innerText) * Number(tdList[2].innerText);
        totalCost();
    }
}

function totalCost() {
    let costs = document.querySelectorAll('.price');
    let summ = 0;
    if (costs) {
        costs.forEach((item) => {
            summ += Number(item.innerText);
            total.innerText = summ;
        })
    } else {
        total.innerText = '';
    }
}


table.addEventListener('dblclick', changeVal)

addBtn.onclick = function () {
    create();
}