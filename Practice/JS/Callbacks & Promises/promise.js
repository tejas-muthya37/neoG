// let posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post Two", body: "This is post two" },
// ];

// let output = "";

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

/////// DEMO TO SHOW CATCH DOES NOT HANDLE ASYNC 'ERRORS' ///////

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       let error = true;
//       if (!error) {
//         resolve();
//       } else {
//         throw new Error("Whoops");
//       }
//     }, 2000);
//   });
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       let error = true;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error");
//       }
//     }, 2000);
//   });
// }

// Instead of adding a catch block, we can pass a second parameter function to .then to handle errors like the one shown below.

// createPost({
//   title: "Post Three",
//   body: "This is post three",
// })
//   .then(function () {
//     console.log("success");
//   })
//   .catch(function () {
//     console.log("failure");
//   })
//   .then(function () {
//     console.log("error is thrown!");
//   });

// createPost({
//   title: "Post Three",
//   body: "This is post three",
// })
//   .then(function () {
//     console.log("success");
//   })
//   .catch(function (message) {
//     console.log("failure", message);
//   });

/////// HANDLING ERRORS IN ASYNC AWAIT ///////

// const errorFn = async () => {
//   throw new Error("Error here");
// };
// const run = async () => {
//   try {
//     return await errorFn();
//   } catch {
//     console.log("err here");
//   }
// };

// run();

/////// CATCH PASSES ON CONTROL ///////

// new Promise((resolve, reject) => {
//   resolve("hey");
// })
//   .catch(function (error) {
//     alert("The error is handled, continue normally");
//   })
//   .then(() => alert("Next successful handler runs"));

// let promise1 = Promise.resolve("Hello World!");
// var promise2;
// let promise3 = new Promise((resolve, reject) => {
//   resolve("Error!");
// });

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );

// Promise.all checks if all Promises are resolved and only returns a Promise.
// Promise.allSettled checks if all Promises have been settled, either Resolved or Rejected.

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

/////// CONVERTING THE ABOVE TO ASYNC / AWAIT ///////

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     let result = await response.json();
//     return result;
//   }
//   throw new Error(response.status);
// }

// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then((user) => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

/////// CONVERTING THE ABOVE TO ASYNC / AWAIT ///////

// async function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   try {
//     let response = await loadJson(
//       loadJson(`https://api.github.com/users/${name}`)
//     );

//     alert(`Full name: ${user.name}.`);
//     return user;
//   } catch (err) {
//     if (err instanceof HttpError && err.response.status == 404) {
//       alert("No such user, please reenter.");
//       return demoGithubUser();
//     } else {
//       throw err;
//     }
//   }
// }

// let arr = [1, 2, 3, 4, 5];

// const reducer = (accumulator, currentVal) => {
//   accumulator += currentVal;
//   console.log(accumulator, currentVal);
//   return accumulator;
// };

// console.log(arr.reduce(reducer, 0));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     var error = false;
//     if (!error) resolve("Yayy!");
//     else reject("Oops!");
//   }, 2000);
// });

// promise
//   .then((response) => console.log("promise fulfilled", response))
//   .catch((err) => console.log("promise rejected", err))
//   .finally(() => console.log("promise settled"));

/////// PROMISIFICATION ///////
