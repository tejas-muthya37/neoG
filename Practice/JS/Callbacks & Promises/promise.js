let posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

let output = "";

function getPosts() {
  setTimeout(() => {
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      let error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error!");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

let promise1 = Promise.resolve("Hello World!");
var promise2;
let promise3 = new Promise((resolve, reject) => {
  resolve("Error!");
});

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

// Promise.all checks if all Promises are resolved and only returns a Promise.
// Promise.allSettled checks if all Promises have been settled, either Resolved or Rejected.
