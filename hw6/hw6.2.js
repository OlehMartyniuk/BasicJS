function isPalindrome(str) {
  let stringLength = str.length;
  let result = "";

  for (let i = 0; i < stringLength; i++) {
    if (str[i] === str[stringLength - 1 - i]) {
      result = true;
    } else {
      result = false;
      return result;
    }
  }
  return result;
}

let test1 = isPalindrome("anna");
let test2 = isPalindrome("bob");
let test3 = isPalindrome("oleh");

console.log(test1);
console.log(test2);
console.log(test3);
