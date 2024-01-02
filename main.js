const den = document.querySelector(".smenaD");
const noch = document.querySelector(".smenaN");
const zaval = document.querySelector(".zaval");
const zavalN = document.querySelector(".zavalN");
const test = document.querySelector(".test");
const penalty = document.querySelector(".penalty");
const avans = document.querySelector(".avans");
const blago = document.querySelector(".blago");
const button = document.querySelector(".button");
const zarplata = document.querySelector(".zarplata");
const details = document.querySelector(".detailsZar");

button.addEventListener("click", a);
let testValue = 0;
let prim = 0;
let position;
let day;
let night;
let kolZaval = 0;

function a() {
  const selected = document.querySelector('input[name="gender"]:checked').id;
  console.log(selected);

  if (selected === "dot-1") {
    day = 5820;
  } else if (selected === "dot-3" || selected === "dot-2") {
    day = 5160;
  }

  if (selected === "dot-1") {
    night = 6120;
  } else if (selected === "dot-3" || selected === "dot-2") {
    night = 5520;
  }

  if (test.value > 99) {
    testValue = 3000;
  } else if (test.value < 100 && test.value > 95) {
    testValue = 1500;
  } else if (test.value < 96 && test.value > 90) {
    testValue = 750;
  } else {
    testValue = 0;
  }

  if (selected === "dot-3") {
    if (penalty.value < 1125) {
      prim = 8250;
    } else if (penalty.value < 2250) {
      prim = 6750;
    } else if (penalty.value > 2250) {
      prim = 0;
    }
  }

  if (selected === "dot-2") {
    if (penalty.value > 2250) {
      prim = 0;
    } else if (penalty.value > 1125 && penalty.value <= 2250) {
      prim = 4500;
    } else if (penalty.value > 375 && penalty.value <= 1125) {
      prim = 6000;
    } else if (penalty.value <= 375) {
      prim = 8250;
    }
  }

  if (+zaval.value + +zavalN.value >= 13) {
    kolZaval = 4500;
  } else {
    kolZaval = 0;
  }

  if (+den.value + +noch.value < 13 || selected === "dot-1") {
    prim = 0;
  }

  console.log(prim, testValue, kolZaval);

  zarplata.innerHTML = `Вы получите ${
    den.value * day +
    noch.value * night +
    zaval.value * day * 0.25 +
    zavalN.value * night * 0.25 +
    +blago.value +
    +kolZaval +
    testValue -
    penalty.value +
    prim -
    +avans.value
  } руб.`;

  // details.innerHTML = `
  // <p>Зарплата без премиальных: ${den.value * day + noch.value * night}</p>
  // <p>Премия за завалы: ${
  //   zaval.value * day * 0.25 + zavalN.value * night * 0.25
  // }</p>
  // <p>Премия за ошибки: ${prim}</p>
  // <p>Доп. премия за завалы: ${kolZaval} </p>
  // <p>Премия за тест: ${testValue} </p>
  // <p>другие премии: ${blago.value} </p>
  // `;
}
