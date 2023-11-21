let success = false;
let someNumber;

do {
  someNumber = prompt("Ведіть будь-яке число.");
  if (isNaN(someNumber)) {
    alert("Only numbers, please");
    continue;
  }
  if (someNumber < 123) {
    alert("Should continue");
  } else {
    success = true;
  }
} while (!success);

alert("Wow, you've ended this endless cycle!");
