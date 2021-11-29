const input = document.querySelector('.input');

const output = document.querySelector('.output');

const country = ['Belarus', 'Belgium', 'Bangladesh', 'Algeria'];


input.onkeyup = function () {
    let val = input.value;
    camparison(val, country);
}

function camparison(inlet, storage) {
    output.innerHTML = '';
    let res = []; // решил что стоит хранить где то кроме дом еще. 
    let a = inlet.length;
    if (a > 0) {
        for (let prop of storage) {
            let b = prop.slice(0, a);
            if (inlet.toLowerCase() == b.toLowerCase()) {
                res.push(prop);
                creatingLi(prop);
            }
        }
    } else {
        output.innerHTML = '';
    }
}

function creatingLi(val) {
    const li = document.createElement('li');
    li.classList.add(`${val}`);
    li.innerText = val;
    output.append(li);

}

function fillInput(event){
    if (event.target.tagName =='LI'){
        input.value = event.target.innerText ; 
        output.innerHTML='' ;
    }
}

output.addEventListener('click' , fillInput) ;