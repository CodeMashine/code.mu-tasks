const result = document.querySelector('.result');
const input = document.querySelector('.input');
const turn = document.querySelector('.turn');
const attention = document.querySelector('.attention');
const cities = [];

let counter = 1;

function step(event) {
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

        if (val.startsWith(cities[cities.length - 1].slice(-1)) && (!cities.includes(val))) {
            handler(val);
            return;
        } else {
            error();
        }
    }
}

function handler(elem) {
    attention.innerHTML = 'game on';
    input.value = '';
    cities.push(elem);
    result.innerHTML = cities[cities.length - 1];
    counter++;
    detector();
}


function detector() {
    if (counter % 2 == 0) {
        turn.innerHTML = 'second';
    } else {
        turn.innerHTML = 'first'
    }
}

function error() {
    input.value = '';
    attention.innerHTML = 'try again';
}

document.addEventListener('keydown', step);