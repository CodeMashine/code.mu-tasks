'use strict';

const task = document.querySelector('.task');
let task1 = document.querySelector('.task1');
let task2 = document.querySelector('.task2');
let task3 = document.querySelector('.task3');
let task4 = document.querySelector('.task4_1');

const checkbox = document.querySelector('.checkbox') ;

task.onblur = function () {
    let n = /\n/gi;
    let content = this.value.replace(n, ' ');
    
    let wordArr = content.split(' ').filter(this.notEmpty);
    task1.innerHTML = wordArr.length;
    
    let simbols = content.length;
    task2.innerHTML = simbols;
    
    let simbolWOSpace = content.split(' ').join('').length;
    task3.innerHTML = simbolWOSpace;
    
    let str = content.split(' ').join('') ;
     this.allChars(str) ;

};

task.notEmpty = function (simbol) {
    return simbol != '';
}


 task.allChars =function (string) {
    const str = string.toLowerCase() ;
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {  //если своиства obj[str[i]] нет , создаем его и присваиваем значение 0 .
            obj[str[i]] = 0;
        }
        obj[str[i]]++;          
    }

    for (let prop in obj) {
        let percent = Math.round(obj[prop]*100/str.length) ;
        obj[prop] = percent ;
        let li = document.createElement('li') ;
        li.innerText = (`${prop} : ${obj[prop]}%`);
        task4.append(li) ;
     }


    return obj;

}


function showBox(event){
    if (event.target.closest('button')){
        let atr = event.target.dataset.index ;
        document.querySelector(`.${atr}`).classList.toggle('hide');
    }
}


checkbox.addEventListener('click' , (event)=>{
    showBox(event) ;
})










