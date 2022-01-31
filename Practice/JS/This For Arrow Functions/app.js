function f2() {
  "use strict"; // see strict mode
  return this;
}

console.log(f2() === undefined); // true
console.log(window.f2() === window); // true
console.log(this.f2() === undefined); // false
console.log(this.f2() === this); // true
console.log(this.f2() === window); // true
console.log(window.f2() === this); // true

// does 'use strict' imply that the function must be called by an object?

const f1 = () => {
  const f3 = () => {
    return this;
  };

  console.log(f3());
};

f1(); // why does this still return Window? Going by the definition,
// should it not return func f1, since it's no more in the global scope?

// Scenario 1

const func1 = () => {
  console.log(this);
};

const obj = {
  name: "name1",
  func: func1,
};

func1(); // Window -> belongs to the Window
console.log(obj.func); // obj -> belongs to the object

// Scenario 2

function func1() {
  console.log(this);
}

const obj = {
  name: "name1",
  func: func1,
};

func1(); // Window -> called by the Window
console.log(obj.func); // obj -> called by the object
