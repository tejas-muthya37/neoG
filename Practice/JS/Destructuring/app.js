let person = {
  id: 100,
  name: "Tejas",
  gender: "Male",
};

let { id, name, gender } = person; // if the variable names are same as the object properties.

let { id: personId, name: personName, gender: personGender } = person; // if the variable names are different from the object properties.

let details = {
  doorNo: 101,
  address: {
    street: 4,
    main: 3,
  },
  city: "Bengaluru",
};

let {
  doorNo,
  address: { street, main }, // nested object destructuring
  city,
} = details;

// destructuring of function parameters

function displayDetails({ doorNo, address: { street, details }, city }) {
  console.log(doorNo, street, main, city);
}

displayDetails(details);

let arr = [1, 2, 3, 4];

let [a, , c] = arr; // array destructuring

// assigning based on index of the element in array

let arr = ["a", "b", "c", "d", "e"];
let { 0: a, 3: d } = arr;
console.log(a, d);
