'use strict'


//1
const btn = document.querySelector('.submit1');


function handler() {
    let a = +document.querySelector('.a').value;
    let b = +document.querySelector('.b').value;
    let c = +document.querySelector('.c').value;
    const res = document.querySelector('.result1_num');
    b = b / a;
    c = c / a;
    a = 1;
    const x1 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    const x2 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    res.innerHTML = `${x1} , ${x2}`;
}

btn.addEventListener('click', handler);

//2
const btn2 = document.querySelector('.submit2');


function handler2() {
    const a = +document.querySelector('.x').value;
    const b = +document.querySelector('.y').value;
    const c = +document.querySelector('.z').value;
    const res = document.querySelector('.result2_num');
    if (a ** 2 == b ** 2 + c ** 2) {
        res.innerHTML = true;
    } else {
        res.innerHTML = false
    };
}

btn2.addEventListener('click', handler2);

//3
const btn3 = document.querySelector('.submit3');


function handler3() {
    const a = +document.querySelector('.m').value;
    let res_arr = [];
    const res = document.querySelector('.result3')
    const res1 = document.querySelector('.result3_num');

    for (let i = 0; i < a; i++) {
        if (a % i == 0) {
            res_arr.push(i);
        }

    }
    res.innerHTML = a;
    res1.innerText = res_arr.toString();
}

btn3.addEventListener('click', handler3);

//4

const btn4 = document.querySelector('.submit4');


function handler4() {
    const a = +document.querySelector('.d').value;
    const b = +document.querySelector('.e').value;
    let res_arr = [];
    let arr = [];
    let highNum = 0;
    const res = document.querySelector('.result4')
    const res1 = document.querySelector('.result4_num');
    const resHighNum = document.querySelector('.high_num');

    for (let i = 0; i < a; i++) {
        if (a % i == 0) {
            arr.push(i);
        }
    }

    for (let i = 0; i <= arr.length; i++) {
        if (b % arr[i] == 0) {
            res_arr.push(arr[i]);
        }
    }

    for (let i = res_arr.length; i != 0; i--) {


        if (res_arr[i] > highNum) {
            highNum = res_arr[i];
        }

    }
    res.innerHTML = `${a} , ${b} `;
    res1.innerText = res_arr.toString();
    resHighNum.innerHTML = highNum;
}

btn4.addEventListener('click', handler4);

//6
const btn6 = document.querySelector('.submit6');


function handler6() {
    const a = +document.querySelector('.f').value;
    const b = +document.querySelector('.j').value;
    const res6 = document.querySelector('.result6');
    const res6Num = document.querySelector('.result6_num');

    let high = Math.max(a, b);
    let low = Math.min(a, b);
    let result = 0;
    if (high % low == 0) {
        result = high;
    } else {
        for (let i = 0;; i++) {
            result += high;
            if (result % low == 0) break;
        }
    }

    res6.innerHTML = `${a} , ${b} `;
    res6Num.innerHTML = result;

}

btn6.addEventListener('click', handler6);