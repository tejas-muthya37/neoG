// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, "3"));

//

// let a = "1";
// let b = true;

// console.log(a == b);
// console.log(a === b);

//

// {
//   var x = 2;
//   var x = 3;

//   console.log(x);
// }

// {
//   let y = 2;
//   let y = 3;

//   console.log(y);
// }

//

// let arr1 = [1, 2];
// let arr2 = [arr1, [3, 4]];
// let arr3 = [...arr2, [5, 6]];

// console.log(arr2, arr3); //[[1,2], [3,4]] and [[1,2], [3,4], [5,6]]

//

// let a = [..."apple"];
// console.log(a); // ["a", "p", "p", "l", "e"]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const convert = (arr) => {
//   return arr.map((num) => {
//     if (num % 2 === 0) return num + 1;
//     return num;
//   });
// };

// let newArr = convert(arr);

// console.log(newArr);

// const arr = [
//   {
//     name: "Jay",
//     age: 60,
//   },
//   {
//     name: "Gloria",
//     age: 36,
//   },
//   {
//     name: "Manny",
//     age: 16,
//   },
//   {
//     name: "Joe",
//     age: 9,
//   },
// ];

// let sumOfAges = arr.reduce((accumulator, element) => {
//   accumulator += element.age;
//   return accumulator;
// }, 0);

// console.log(sumOfAges);

const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

let familyArr = family.reduce((accumulator, currentElement))
