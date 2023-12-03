const arrayNumber = [5, 12, 656, -3, 44, -7, 3];
const emptyArray = [];

function getMinNumber(arrayValue) {
  if (arrayValue.length === 0) {
    return null;
  }

  let minValue = 9007199254740991;

  for (let i = 0; i < arrayValue.length; i++) {
    if (minValue > arrayValue[i]) {
      minValue = arrayValue[i];
    }
  }

  return minValue;
}

let resultMin = getMinNumber(arrayNumber);
let emptyResult = getMinNumber(emptyArray);
console.log("Task1 min");
console.log(resultMin);
console.log(emptyResult);

function getMaxNumber(arrayValue) {
  if (arrayValue.length === 0) {
    return null;
  }

  let maxValue = -9007199254740991;

  for (let i = 0; i < arrayValue.length; i++) {
    if (maxValue < arrayValue[i]) {
      maxValue = arrayValue[i];
    }
  }

  return maxValue;
}

let resultMax = getMaxNumber(arrayNumber);
let emptyResult2 = getMaxNumber(emptyArray);
console.log("Task2 max");
console.log(resultMax);
console.log(emptyResult2);
