const result = document.querySelector('.result');
const input = document.querySelector('.input');
const turn = document.querySelector('.turn');
const attention = document.querySelector('.attention');
const cities = [];

const compList = ['moskow', 'novokuznetsk', 'orenburg'];

let counter = 1;

function clickHandling(event) {
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
        let val = input.value.toLowerCase();
        if (!val) {
            attention.innerHTML = 'field is empty';
            return;
        }
        if (counter == 1) {
            handler(val);
            return;
        };

        comparison(val);
    }
}

function handler(elem) {
    attention.innerHTML = 'game on';
    input.value = '';
    cities.push(elem);
    result.innerHTML = cities[cities.length - 1];
    detector();
}

function comparison(val) {
    if (val.startsWith(cities[cities.length - 1].slice(-1)) && (!cities.includes(val))) {
        handler(val);
    } else {
        error();
    }
}

function compTurn() {
    let loseCounter = 0;
    compList.forEach((item) => {
        if (item.startsWith(cities[cities.length - 1].slice(-1)) && (!cities.includes(item))) {
            input.value = item;
            let func= function() {
                handler(item) ;
            };
            setTimeout(func, 3000);
        } else {
            loseCounter++;
        }
    });

    if (loseCounter == (compList.length)) {
        attention.innerHTML = 'computer skip turn!' ;
        detector() ;
    }
}

function detector() {
    if (counter % 2 == 0) {
        turn.innerHTML = 'computer';
        compTurn();
    } else {
        turn.innerHTML = 'player';
    }
}

function error() {
    input.value = '';
    attention.innerHTML = 'try again';
}

document.addEventListener('keydown', clickHandling);