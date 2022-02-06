// const momObj = {
//   name: "Kowsalya",
//   age: 23,
// };

// const siblingObject = {
//   ...momObj,
//   age: momObj.age - 4,
// };

// console.log(siblingObject);

// const colorArr = ["red", "green", "blue", "yellow", "orange"];
// const extendColorArr = [...colorArr, "black", "white"];

// const birthday = (birthdayObj) => ({
//   ...birthdayObj,
//   age: birthdayObj.age + 1,
// });

// console.log(birthday({ name: "Tejas", age: 23 }));

// const is10 = (num) => num < 10;

// const numArr = [1, 2, 3, 4, 10, 11];

// newNumArr = numArr.filter((num) => is10(num));

// console.log(newNumArr);

// var numArr = [1, 2, 3, 6, 10, 11];

// numArr = numArr.map((num) => num + 2);

// console.log(numArr);

// const reducer = (accumulator, currentVal) => {
//   if (currentVal < 10) accumulator += currentVal;

//   return accumulator;
// };

// console.log(numArr.reduce(reducer));

// var numArr = [1, 2, 5, 2, 22, 11, 9];

// const reducer = (accumulator, currentVal) => {
//   if (currentVal % 2 !== 0) accumulator += currentVal;
//   return accumulator;
// };

// console.log(numArr.reduce(reducer));

// const reducer = (accumulatorObj, currentVal) => {
//   if (currentVal % 2 === 0) {
//     return { ...accumulatorObj, even: (accumulatorObj.even += currentVal) };
//   } else {
//     return { ...accumulatorObj, odd: (accumulatorObj.odd += currentVal) };
//   }
// };

// const accumulatorObj = { even: 0, odd: 0 };

// console.log(numArr.reduce(reducer, accumulatorObj));

// const giveYourName = (yourName) => (message) => `${yourName} says ${message}`;

// console.log(giveYourName("tejas"));
// console.log(giveYourName("tejas")("hello"));

// const logUserName = (message) => `Tejas says, ${message}`;

// const logUserId = (message) => `ID::6541 : ${message}`;

// console.log(logUserId(logUserName("neoG OP")));

var numbersArray = [1, 10, 3, 20, 5, 30];

// const reducer = (accumulator, currentValue) => {
//   if (currentValue % 2 !== 0) accumulator += currentValue;
//   return accumulator;
// };

// const reducer = (accumulator, currentValue, currentIndex) => {
//   if (currentIndex % 2 !== 0) accumulator += currentValue;
//   return accumulator;
// };

// console.log(numbersArray.reduce(reducer, 0));

// var max = 0;
// numbersArray.map((num) => {
//   if (num > max) max = num;
// });

// console.log(max);

// numbersArray = numbersArray.filter((num) => num % 10 === 0);
// console.log(numbersArray);

// var newNumbersArray = numbersArray.map((num) =>
//   num % 2 === 0 ? num - 1 : num + 1
// );

// console.log(newNumbersArray);

// const reducer = (accumulatorObj, currentValue) => {
//   if (currentValue % 2 === 0)
//     return { ...accumulatorObj, even: accumulatorObj.even + currentValue };
//   else return { ...accumulatorObj, odd: accumulatorObj.odd + currentValue };
// };

// const accumulatorObj = { even: 0, odd: 0 };

// console.log(numbersArray.reduce(reducer, accumulatorObj));

const stringsArray = ["apple", "mango", "orange", "xyxyxy"];

// const reduceStr = (accumulatorObj, currentValue) => {
//   if (currentValue.length in accumulatorObj)
//     return {
//       ...accumulatorObj,
//       [currentValue.length]: accumulatorObj[currentValue.length] + 1,
//     };
//   else {
//     return {
//       ...accumulatorObj,
//       [currentValue.length]: 1,
//     };
//   }
// };

// accumulatorObj = {};

// console.log(stringsArray.reduce(reduceStr, accumulatorObj));

// const vowels = ["a", "b", "c", "d", "e"];

// const hasVowels = (str) => {
//   for (i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) return true;
//   }
//   return false;
// };

// const reduceStr = (accumulatorArray, currentValue) => {
//   if (hasVowels(currentValue)) accumulatorArray.push(currentValue);
//   return accumulatorArray;
// };

// console.log(stringsArray.reduce(reduceStr, []));

// const reduceArr = (accumulatorArray, currentValue) => {
//   return [...accumulatorArray, { [currentValue]: currentValue.length }];
// };

// console.log(stringsArray.reduce(reduceArr, []));

const increment = (num) => num + 1;
const square = (num) => num * num;
const decrement = (num) => num - 1;
const cube = (num) => num * num * num;

// const compose = (...rest) => {
//   return function (num) {
//     return rest.reduce(reducer, num);
//   };
// };

const compose =
  (...rest) =>
  (num) =>
    rest.reduce(reducer, num);

const reducer = (accumulator, currentElement) => {
  accumulator = currentElement(accumulator);
  return accumulator;
};

const incrementAndSquare = compose(increment, square);
console.log(incrementAndSquare(2));
