// function strLength(name, callback) {
//     callback(name.length);
//   }

//   function callback(length) {
//     console.log("OMG! My name is " + length + " characters long.");
//   }

//   strLength("Tejas Muthya", callback);

// function WillThanosKillMe(name, callback1, callback2) {
//     if (name.length % 2 === 0) {
//       callback1();
//     } else {
//       callback2();
//     }
//   }

//   function successFn() {
//     console.log("yay! I am alive");
//   }

//   function failFn() {
//     console.log("Make sure you don't give my headphones to my sister!");
//   }

//   WillThanosKillMe("Tejas", successFn, failFn);

// function WillThanosKillMe(name, callback1, callback2) {
//     if (name.length % 2 === 0) {
//       callback1();
//     } else {
//       callback2();
//     }
//   }

//   WillThanosKillMe("Tejas", () => console.log("yay! I am alive"), () => console.log("Make sure you don't give my headphones to my sister!"));

// function printAfterDelay(message, delay) {
//     setTimeout(() => console.log(message), delay);
// }

// printAfterDelay("Hey", 1000);

// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldReject) {
//           reject(`error from server: ${msg}`);
//         }
//         resolve(`from server: ${msg}`);
//       }, 3000);
//     });
// }

// fakeFetch("Tejas", true)
// .then(console.log("Success!"))
// .catch(console.log("Failure"));

// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldReject) {
//           reject(`error from server: ${msg}`);
//         }
//         resolve(`from server: ${msg}`);
//       }, 3000);
//     });
// }

// fakeFetch("Tejas")
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

// function getServerResponseLength(msg1) {
//   fakeFetch(msg1)
//     .then((data) => data.length)
//     .then((length) => console.log(length));
// }

// getServerResponseLength("hello");

// function syncCallsToServer(msg1, msg2) {
//   fakeFetch(msg1).then((dataForMsg1) =>
//     fakeFetch(msg2).then((data) => console.log({ data, dataForMsg1 }))
//   );
// }

// syncCallsToServer("message1", "message2");

// async function printData(msg1) {
//   const data = await fakeFetch(msg1);
//   console.log(data);
// }

// printData("hey!");

// async function waterfall(msg1, msg2) {
//   const data1 = await fakeFetch(msg1);
//   const data2 = await fakeFetch(msg2);
//   console.log(data1, data2);
// }

// waterfall("msg1", "msg2");
