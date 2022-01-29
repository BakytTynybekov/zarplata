const den = document.querySelector('.smenaD');
const noch = document.querySelector('.smenaN');
const zaval = document.querySelector('.zaval');
const zavalN = document.querySelector('.zavalN');
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
let day;
let night;

function a() {
    const selected = document.querySelector('input[name="gender"]:checked').id;
    console.log(selected)

    if (selected === "dot-1") {
        day = 4900;

    } else if (selected === "dot-3") {
        day = 3500;
    } else if (selected === "dot-2") {
        day = 4300;
    }

    if (selected === "dot-1") {
        night = 5100;

    } else if (selected === "dot-3") {
        night = 3650;
    } else if (selected === "dot-2") {
        night = 4450;
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

    if (penalty.value > 1500 || selected === "dot-1") {
        prim = 0;
    } else if (den.value + noch.value > 12 && penalty.value <= 1500) {
        prim = 4500;
    }

    zarplata.innerHTML = `Вы получите ${(den.value * day) + (noch.value * night) + (zaval.value * day * 0.25) + (zavalN.value * night * 0.25) + +(blago.value) + +(testValue) - (penalty.value) + (prim)  - +(avans.value) } руб.`

}
