let inputNumber;
let success = false;

do {
  inputNumber = prompt("Введіть будь яке число:");
  if (isNaN(inputNumber)) {
    alert("Тільки числові значення");
  } else {
    success = true;
  }
} while (!success);

if (inputNumber % 3 == 0 && inputNumber % 5 == 0) {
  alert("FizzBuzz");
} else if (inputNumber % 5 == 0) {
  alert("Buzz");
} else if (inputNumber % 3 == 0) {
  alert("Fizz");
} else {
  alert("Non Divisible");
}
