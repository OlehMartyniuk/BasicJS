const memoize = () => {
  let value;
  return [
    () => value,
    (valueToSet) => {
      value = valueToSet;
    },
  ];
};

const memData = memoize();
const getMemData = memData[0];
const setMemData = memData[1];
console.log(getMemData()); // поверне undefined
setMemData(3);
console.log(getMemData()); // 3
setMemData("some string");
setMemData({ a: "b" });
console.log(getMemData()); // поверне { a: 'b' }
