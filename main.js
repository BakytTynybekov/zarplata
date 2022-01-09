const smena = document.querySelector('.smena');
const zaval = document.querySelector('.zaval');
const test = document.querySelector('.test');
const penalty = document.querySelector('.penalty');
const avans = document.querySelector('.avans');
const blago = document.querySelector('.blago');
const button = document.querySelector('.button');
const zarplata = document.querySelector('.zarplata')

button.addEventListener('click', a);
let testValue = 0;
let prim = 0;
let position;

function a() {
    const selected = document.querySelector('input[name="gender"]:checked').id;
    console.log(selected)

    if (selected === "dot-1") {
        position = 4200;

    } else if (selected === "dot-3") {
        position = 3000;
    } else if (selected === "dot-2") {
        position = 3725;
    }
    

    if (test.value > 99) {
     testValue = 3000;
    } else if(test.value < 100 && test.value > 95) {
        testValue = 1500;
    } else if(test.value < 96 && test.value > 90) {
        testValue = 750;
    } else {
        testValue = 0;
    } 

    if (penalty.value > 1500 && selected === "dot-2") {
        prim = 0;
    } else if (smena.value > 12 && penalty.value <= 1500) {
        prim = 4500;
    }

    zarplata.innerHTML = `Вы получите ${(smena.value * position) + (zaval.value * 931) + +(blago.value) + +(testValue) - (penalty.value) + (prim)  - +(avans.value) } руб.`

}
