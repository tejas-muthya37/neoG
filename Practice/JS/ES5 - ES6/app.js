// 1 a review

let aloo1 = 1;

const assign = () => {
  let a = 2;
  console.log(a);
};

aloo1 == 1 ? assign() : console.log(aloo1);

// 1 b

const multiply1 = (x, y) => x * y;

// 1 c

const customer = {
  name: "Bhaalo",
};
const card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50,
};

const { name } = customer;
const { amount, product, unitprice } = card;

const message = `Hello ${name} wants to buy ${amount} ${product} for price of ${unitprice} per piece`; // doubt

// 1 d

const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];

const [CEO, , Mentor, ...rest1] = Neog;

// 1 e

const arr = ["MA", "TA", "PA", "CA"];
const [firstName, surname, ...rest2] = arr;
console.log(firstName, surname);

// 1 f

const Aaloo = "Tasty";
const Bhaloo = "Cute";

const Obj = { Aaloo, Bhaloo };

// 1 g

const a = 5;
const b = 10;
// console.log(`Fifteen is ${a + b} and not ${2 * (a + b)}.`);

// 1 h

const sum = (num1, num2) => num1 + num2;
const multiply2 = (num1, num2) => num1 * num2;

const arithemeticsObj = { sum, multiply2 };

// 1 i

const avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark",
    },
    {
      captainAmerica: "Steve Rogers",
    },
    {
      blackWidow: "Natasha Romanoff",
    },
  ],
};

const { operation, members } = avengers;

// 2 a

function packIt() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
packIt(1, 2, 3, 5, 5);

// 3 a

const hello = () => "Hello";
const welcome = () => "Welcome";
const [Hello = hello(), Welcome = welcome()] = ["Namaste"];
// console.log(Hello, Welcome); // Output -> Namaste Welcome

// 3 b

const obj = {
  aloo2: 1,
  bhaloo2: 2,
};

// const { c: aloo2 = [2, 3, 4].push(5), aloo2 } = obj; // Output -> aloo2 is redeclared. Error.
