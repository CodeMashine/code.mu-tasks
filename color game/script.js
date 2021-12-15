'use strict';

const colors = ['red', 'blue', 'green','orange','pink','aqua']; //,'orange','pink','aqua'

const main = document.querySelector('.main');

const result = document.querySelector('.result');

const data = document.querySelector('.data');

const bestResult=document.querySelector('.bestResult')

let globalCount = 0;

function render(row, colums) {
    let table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < colums; j++) {
            let td = document.createElement('td');

            tr.append(colorize(td));
        }
        table.append(tr);
    }

    data.innerText = colors.join('=>');
    main.append(table);
    bestSolution();
}


function colorize(elem) {
    let index = Math.ceil(Math.random() * colors.length - 1);
    elem.style.background = `${colors[index]}`;
    elem.dataset.index = index;
    return elem;
}

function change(event) {
    if (event.target.tagName == 'TD') {
        globalCount++;
        let cell = event.target;
        let index = cell.dataset.index;
        index++;
        if (index == colors.length) index = 0;
        cell.style.background = colors[index];
        cell.dataset.index = index;

        result.innerText = globalCount;
        isVictory(cell);
    }
}

function isVictory(elem) {
    let tds = document.querySelectorAll('td');
    let counter = 0;
    tds.forEach((item) => {
        if (item.dataset.index == elem.dataset.index) counter++;
        if (counter == tds.length) {
            main.removeEventListener('click', change);
        }
    })
}

render(3, 3);

main.addEventListener('click', change);

function bestSolution() {
    const cells = document.querySelectorAll('td');
    let numArr = [];
    let maxNum = 0;



    cells.forEach((item) => {
        numArr.push(Number(item.dataset.index));
    });

    for (let i = numArr.length - 1; i != -1; i--) {
        if (numArr[i] > maxNum) {
            maxNum = numArr[i];
        }
    }

    let uniqArr = numArr.filter((item, index) => {
        return numArr.indexOf(item) == index;
    })
    let stepArr = [];

    uniqArr.forEach((item) => { // для каждого элемента уникального массива
        let stepCount = 0;
        for (let i = 0; i < numArr.length; i++) { // цикл i не больше длинны массива всех номеров цвета ячеек
            let value = numArr[i]; // для удобства определим value как текущии эл-т массива
            
            if (value != item) { // если value != item
                while (value != item) { // пока value!=item  пока value НЕ равно item
                    if (stepCount == 100) break;
                    if (value == maxNum) { // если значение value == максимально возможному , то сбрасываем его на -1
                        value = -1;
                    }
                    
                    stepCount++; // шаг ++
                    value++; // увеличиваем value на единицу
                }
                } else { //иначе
                    continue; // переходим к следующему значению value
                
            }
        }
        stepArr.push(stepCount);
    })

    let result =50 ;
    for (let i = stepArr.length - 1; i != -1; i--) {
        if (stepArr[i] < result) {
            result = stepArr[i];
        }
    }


    bestResult.innerText = result ;
}