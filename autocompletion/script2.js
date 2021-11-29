const input = document.querySelector('.input');
const output = document.querySelector('.output');
const country = ['Belarus', 'Belgium', 'Bangladesh', 'Algeria'];

input.onkeyup = function () {
    let val = input.value.toLowerCase();
    let res = comparison2(val, country);
    if (val.length) {
        creatingLi(res);
    }
}

function creatingLi(val) {
    output.innerHTML = '';
    for (let prop of val) {
        const li = document.createElement('li');
        li.classList.add(`${prop}`);
        li.innerText = prop;
        output.append(li);
    }
}

function fillInput(event) {
    if (event.target.tagName == 'LI') {
        input.value = event.target.innerText;
        output.innerHTML = '';
    }
}


function comparison2(inlet, storage) {
    let res = storage.filter(function (elem) {
        if (elem.toLowerCase().startsWith(inlet)) return elem;
    })
    return res;
}

output.addEventListener('click', fillInput);