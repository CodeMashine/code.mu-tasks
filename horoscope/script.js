'use strict';

const submDate = document.querySelector('.submitDate');
const submitBirth = document.querySelector('.submitBirth');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
let chosen;


const oracle = ['you have a great day', 'you have a nice day', 'go sleep'];
const date = ['yesterday', 'today', 'tomorrow'];

const aries = {
    name: 'aries',
};
const taurus = {
    name: 'taurus',
};
const gemini = {
    name: 'gemini',
};
const cancer = {
    name: 'cancer',
};
const leo = {
    name: 'leo',
};
const virgo = {
    name: 'virgo',
};
const libra = {
    name: 'libra',
};
const scorpio = {
    name: 'scorpio',
};
const sagittarius = {
    name: 'sagittarius',
};
const capricorn = {
    name: 'capricorn',
};
const aquarius = {
    name: 'aquarius',
};
const pisces = {
    name: 'pisces',
};

function makeOracle(sign) {
    let random = shuffle(oracle);
    for (let i = 0; i < date.length; i++) {
        sign[`${date[i]}`] = random[i];
    }
};

function shuffle(array) { // Фишер-Йейтс 
    let i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function searchSign(str) {
    if (str >= '03-21' && str <= '04-20') return aries;
    if (str >= '04-21' && str <= '05-20') return taurus;
    if (str >= '05-21' && str <= '06-22') return gemini;
    if (str >= '06-22' && str <= '07-22') return cancer;
    if (str >= '07-23' && str <= '08-23') return leo;
    if (str >= '08-24' && str <= '09-23') return virgo;
    if (str >= '09-24' && str <= '10-23') return libra;
    if (str >= '10-24' && str <= '11-22') return scorpio;
    if (str >= '11-23' && str <= '12-21') return sagittarius;
    if (str >= '12-22' && str <= '12-30') return capricorn;
    if (str >= '01-01' && str <= '01-20') return capricorn;
    if (str >= '01-21' && str <= '02-20') return aquarius;
    if (str >= '02-21' && str <= '03-20') return pisces;
}

submDate.onclick = function () {
    if (chosen) {
        const arr = document.querySelectorAll('input[type="radio"]');
        for (let prop of arr) {
            if (prop.checked) {
                output2.innerText = chosen[`${prop.value}`];
            }
        }
    }
}

submitBirth.onclick = function () {
    const birth = document.querySelector('.input').value;
    if (birth) {
        chosen = searchSign(birth);
        output1.innerText = chosen['name'];
        makeOracle(chosen);
    }
}