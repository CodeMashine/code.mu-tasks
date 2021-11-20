const keyboard = document.querySelector('.keyboard');
const input = document.querySelector('.input');
const backSpace = document.querySelector('.backSpace');

let alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

function render(arr) {
    const table = document.createElement('table');
    table.classList.add('key_table');
    for (let i = 0, k = 0; i <= 3; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j <= 9; j++) {
            if (!arr[k]) break;
            let td = document.createElement('td');
            td.className = (`${arr[k]}`);
            td.classList.add('square');
            td.innerText = arr[k];
            tr.append(td);
            k++;
        }
        table.append(tr);
    }


    let caps = document.createElement('td');
    caps.classList.add('caps');
    caps.innerText = 'CapsLock';
    caps.colSpan = '4';
    table.children[2].append(caps);

    let space = document.createElement('td');
    space.classList.add('space');
    space.innerText = 'space';
    space.colSpan = '10';
    table.lastElementChild.append(space);



    keyboard.append(table);


}



render(alphabet);

const caps = document.querySelector('.caps');

const space = document.querySelector('.space');

const key = document.querySelectorAll('.square');

function inlet(event) {
    if (!event.target.closest('.square')) return;
    if (caps.classList.contains('active')) {
        input.value += event.target.innerText.toUpperCase();

    } else if (!caps.classList.contains('active')) {
        input.value += event.target.innerText;
    }

}

caps.onclick = function () {

    if (caps.classList.contains('active')) {
        for (let i = 0; i < key.length; i++) {
            key[i].innerText = key[i].innerText.toLowerCase();
        }
        caps.classList.toggle('active');
        return;
    } else if (!caps.classList.contains('.active')) {
        for (let i = 0; i < key.length; i++) {
            key[i].innerText = key[i].innerText.toUpperCase();
        }
        caps.classList.toggle('active');
        return;
    }

}



backSpace.onclick = function () {
    input.value = input.value.slice(0, -1);
}

space.onclick = function () {
    input.value += ' ';
}




keyboard.addEventListener('click', inlet);