'use strict';

const list = document.querySelector('.list');
const noteList = document.querySelector('.noteList');
const input = document.querySelector('.input');
const saveBtn = document.querySelector('.save');
const createBtn = document.querySelector('.create');
const status = document.querySelector('.status');
const deleteStatus= document.querySelector('.deleteStatus') ;

let counter = 1;

let texts = {}; //[] можно и массив

function create() {
    if (input.value) {
        texts[counter] = input.value;
        let li = document.createElement('li');
        let span = document.createElement('span') ;
        li.dataset.num = li.className = counter;
        span.innerText = `Запись ${counter}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';
        li.append(span ,deleteBtn);
        
        deleteBtn.onclick = function () {
            delete texts[deleteBtn.parentElement.dataset.num];
            deleteBtn.parentElement.remove();
            deleteStatus.innerText = `запись ${deleteBtn.parentElement.dataset.num} удалена`
            setTimeout(()=>{deleteStatus.innerText=''} ,1000 );
        }

        span.onclick = function () {
            input.value = texts[li.dataset.num];
            let liArr = document.querySelectorAll('li');
            for (let prop of liArr) {
                prop.classList.remove('edit');
            }
            this.parentElement.classList.add('edit');
            status.innerText = 'редактирование';
        }

        noteList.append(li);
        input.value = '';
        counter++;
    }
}

saveBtn.onclick = function () {
    if (document.querySelector('.edit')) {
        let obj = document.querySelector('.edit');
        texts[obj.dataset.num] = input.value;
        // texts[obj.dataset.num] 
        obj.classList.remove('edit');
        input.value = '';
        status.innerText = 'создание';
    } else {
        create();
    }
}


createBtn.onclick = function () {
    create()
};