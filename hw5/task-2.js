let inputNumber1;
let inputNumber2;
let success1 = false;
let success2 = false;

do {
  inputNumber1 = prompt("Введіть перше число:");
  if (isNaN(inputNumber1)) {
    alert("Only numbers, please");
    success1 = true;
  } else {
    success1 = false;
  }
} while (success1);

do {
  inputNumber2 = prompt("Введіть друге число:");
  if (isNaN(inputNumber2)) {
    alert("Only numbers, please");
    success2 = true;
  } else {
    success2 = false;
  }
} while (success2);

let isFirstNumberBigger = inputNumber1 > inputNumber2;
let minNumber = Number(isFirstNumberBigger ? inputNumber2 : inputNumber1);
let maxNumber = Number(isFirstNumberBigger ? inputNumber1 : inputNumber2);
let sumPairedNumber = 0;
let multiplyPairedNumber = 1;

for (let i = minNumber; i <= maxNumber; i++) {
  if (i % 2 == 0) {
    sumPairedNumber = sumPairedNumber + i;
  } else {
    multiplyPairedNumber = multiplyPairedNumber * i;
  }
}
