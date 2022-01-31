// function strLength(name, callback) {
//   callback(name.length);
// }

// function printMessage(length) {
//   console.log(`Omg! My name is ${length} characters long!`);
// }

// strLength("tejas", printMessage);

// function WillThanosKillMe(name, successCallback, failCallback) {
//   if (name.length % 2 === 0) successCallback();
//   else failCallback();
// }

// function callbackOnSuccess() {
//   console.log("Yay!");
// }

// function callbackOnFail() {
//   console.log("I'm dead!");
// }

// WillThanosKillMe("tejas", callbackOnSuccess, callbackOnFail);

// function printAfterDelay(message, delay) {
//   setTimeout(() => console.log(message), delay);
// }

// printAfterDelay("hello", 2000);

// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`);
//       }
//       resolve(`from server: ${msg}`);
//     }, 3000);
//   });
// }

// fakeFetch("Tejas")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// function serverResponseLength(message) {
//   fakeFetch(message)
//     .then((data) => data.length)
//     .then((length) => console.log(length));
// }

// serverResponseLength("Tejas");

// function syncCallsToServer(message1, message2) {
//   fakeFetch(message1).then((data1) =>
//     fakeFetch(message2).then((data2) => console.log({ data1, data2 }))
//   );
// }

// syncCallsToServer("Message1", "Message2");

// ASYNC AND AWAIT

// async function syncCallsToServer(message1, message2) {
//   const data1 = await fakeFetch(message1);
//   const data2 = await fakeFetch(message2);
//   console.log(data1, data2);
// }

// syncCallsToServer("hey", "there");

// async function printMessage(message) {
//   try {
//     const messageToPrint = await fakeFetch(message, true);
//     console.log(messageToPrint);
//   } catch (err) {
//     console.log(err);
//   }
// }

// printMessage("Tejas");

// async function getServerResponseLength(message) {
//   try {
//     const messageToPrint = await fakeFetch(message, true);
//     const length = messageToPrint.length;
//     console.log(length);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getServerResponseLength("Tejas");

// function fakeFetch(message, shouldBeRejected) {
//   return new Promise((resolve, reject) => {
//     if (shouldBeRejected) {
//       setTimeout(() => reject(`Error from server!`), 2000);
//     } else {
//       setTimeout(() => resolve(`From server - ${message}`), 2000);
//     }
//   });
// }

// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`);
//       }
//       resolve(`from server: ${msg}`);
//     }, 3000);
//   });
// }

// async function main() {
//   console.time("main");
//   function sleep(seconds) {
//     const ms = seconds * 1000;

//     return new Promise((resolve) => {
//       setTimeout(() => resolve(`Slept for ${ms} milliseconds`), ms);
//     });
//   }

//   const [time1, time2, time3] = await Promise.all([
//     sleep(1),
//     sleep(2),
//     sleep(3),
//   ]);

//   console.log(time1, time2, time3); // 1000, 2000 and 3000.

//   console.timeEnd("main"); // amount of time for which main runs, around 3000 and not (1000 + 2000 + 3000)
// }

// main();
