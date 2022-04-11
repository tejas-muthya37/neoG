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

// const family = [
//   {
//     name: "Tanay",
//     haveCycle: true,
//   },
//   {
//     name: "Akanksha",
//     haveCycle: false,
//   },
//   {
//     name: "Tanvi",
//     haveCycle: true,
//   },
//   {
//     name: "Kanak",
//     haveCycle: false,
//   },
// ];

// let familyArr = family.reduce((accumulator, currentElement) => {
//   currentElement.haveCycle && accumulator.push(currentElement.name);
//   return accumulator;
// }, []);

// console.log(familyArr);

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// const newArr = arr.reduce((accumulator, currentValue) => {
//   currentValue % 2 === 0 && currentValue <= 8 && accumulator.push(currentValue);
//   return accumulator;
// }, []);

// console.log(newArr);

// const arr = ["eat", "sleep", "repeat", "code"];

// const newArr = arr.reduce((accumulator, currentElement) => {
//   currentElement.length > 5 && accumulator.push(currentElement);
//   return accumulator;
// }, []);

// console.log(newArr);

// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// const newArr = arr.reduce((accumulator, currentElement) => {
//   currentElement > 50 && (accumulator += currentElement);
//   return accumulator;
// }, 0);

// console.log(newArr);

// const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// const newArr = arr.reduce((accumulator, currentElement) => {
//   currentElement % 2 === 0 && (accumulator = accumulator * currentElement);
//   return accumulator;
// }, 1);

// console.log(newArr);

// const arr = [
//   {
//     name: "Apple",
//   },
//   {
//     name: "Mango",
//   },
//   {
//     name: "Potato",
//   },
//   {
//     name: "Guava",
//   },
//   {
//     name: "Capsicum",
//   },
// ];

// const newArr = arr.reduce((accumulator, currentElement) => {
//   if (currentElement.name.length > 5) {
//     accumulator.push({
//       ...currentElement,
//       type: "vegetable",
//     });
//   } else {
//     accumulator.push({
//       ...currentElement,
//       type: "fruit",
//     });
//   }
//   return accumulator;
// }, []);

// console.log(newArr);

// const inventory = [
//   { name: "fans", quantity: 3 },
//   { name: "chimneys", quantity: 0 },
//   { name: "bulbs", quantity: 5 },
//   { name: "stove", quantity: 1 },
// ];

// const newInventoryFilter = inventory.filter((item) => item.quantity < 2);
// console.log(newInventoryFilter);

// const newInventoryReduce = inventory.reduce((accumulator, currentElement) => {
//   accumulator += currentElement.quantity;
//   return accumulator;
// }, 0);
// console.log(newInventoryReduce);

// const zeroQuantity = inventory.find((item) => item.quantity === 0);

// console.log(zeroQuantity);

// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// const newStr = arr.reduce((accumulator, currentElement) => {
//   if (arr.indexOf(currentElement) === 0) accumulator += `${currentElement}`;
//   else accumulator += `-${currentElement}`;
//   return accumulator;
// }, "");

// console.log(newStr);

// const ip = 24345687;
// const ipArray = ip.toString().split("");

// for (i = 0; i < ipArray.length; i++) {
//   if (ipArray[i] % 2 === 0 && ipArray[i + 1] % 2 === 0) {
//     ipArray[i] = `${ipArray[i]}-`;
//   }
// }

// console.log(ipArray.join(""));

// const ipStr = "neogrammer";
// const newStr = ipStr
//   .split("")
//   .map((character) => character.toUpperCase())
//   .join("");

// console.log(newStr);

// const vowels = ["a", "e", "i", "o", "u"];

// const convertVowels = (str) => {
//   return str
//     .split("")
//     .map((character) => {
//       if (vowels.includes(character)) return character.toUpperCase();
//       else return character;
//     })
//     .join("");
// };

// console.log(convertVowels("neoG"));

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "e"],
//   ["e", "d", "f"],
// ];

// const op = [];

// for (var ip of input) {
//   op.push(...ip);
// }

// console.log(op);

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "e"],
//   ["e", "d", "f"],
// ];

// const op = [];

// for (var ip of input) {
//   op.push(...ip);
// }

// const reducedOp = op.reduce((accumulator, currentElement) => {
//   if (accumulator[currentElement]) accumulator[currentElement] += 1;
//   else accumulator[currentElement] = 1;
//   return accumulator;
// }, {});

// console.log(reducedOp);

// const words = ["react", "javascript", "script", "interview", "style"];

// const wordsMoreThanSixCharacters = words.reduce((accumulator, currentValue) => {
//   if (currentValue.length > 6) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// console.log(wordsMoreThanSixCharacters);

// const nums = [1, 2, 3, 4, 5, 6];

// const numsArray = nums.reduce((accumulator, currentValue) => {
//   accumulator += currentValue;
//   return accumulator;
// });

// console.log(numsArray);

let sandwich = {
  layer1: "cheese",
  layer2: "lettuce",
  layer3: "tomatoes",
  sandwichIngredients: function (sides1, sides2) {
    console.log(
      sides1 + " " + sides2 + " " + this.layer1,
      this.layer2,
      this.layer3
    );
  },
};

let mySandwich = {
  layer1: "onions",
  layer2: "capsicum",
  layer3: "paneer",
};

let mySandwichIngredient = sandwich.sandwichIngredients.bind(
  mySandwich,
  "chips"
);

mySandwichIngredient();
