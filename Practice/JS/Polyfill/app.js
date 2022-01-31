const arr = [1, 2, 3, 4, 5];

Array.prototype.forEach = null; // simulating browser incompatibility

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (let val of this) {
      callback(val);
    }
  };
} // polyfill for 'forEach'

arr.forEach((val) => {
  console.log(2 * val); // this is the callback fn that is called on every value
});

// Hoisting in JS

console.log(a); // undefined. variable a is hoisted
var a = 20;

console.log(b);
let b = 10; // Reference  Error. b is in Temporal Dead Zone

console.log(c);
const c = 1; // Reference  Error. c is in Temporal Dead Zone

demoFn(); // "Hello" -> Functions are hoisted
demoFn2(); // Reference Error. Arrow Function demoFn2 is in Temporal Dead Zone since it's a const. TypeError if it's a var.

function demoFn() {
  console.log("Hello!");
}

const demoFn2 = () => {
  console.log("Bye!");
};
