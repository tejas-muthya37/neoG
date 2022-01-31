// function getPerson() {
//   return null;
// }

// const { firstName, lastName } = getPerson();

// console.log(null);
// console.log({});

demoFn2(); // Reference Error. Arrow Function demoFn2 is in Temporal Dead Zone since it's a const.
//TypeError if it's a var. Why? Because a var is hoisted. It would be like asking to invoke something is undefined.

const demoFn2 = () => {
  console.log("Bye!");
};
