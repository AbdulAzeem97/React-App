import React from "react";

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Creating NEW Promise Instance ");
//     resolve();
//     reject();
//   }, 2000);
// })
//   .then(function () {
//     console.log("Then Case 1 Successfully Working");
//     return 3;
//   })
//   .then(function (val) {
//     console.log("Sucessfully Case 2 Successfull" + val);
//     return val + 2;
//   })
//   .then(function (val) {
//     console.log("Sucessfully Case 3 Successfull" + val);
//     return val + 2;
//   })
//   .catch(function () {
//     console.log("DATA FETCH FAILED");
//   });

// console.log("Hello World ")
//  function resolve() {
//     console.log(" Resolve")
// }

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("New Promise");
//     resolve();
//   }, 1000);
// });

// promise.then(function () {
//   console.log("promise resolve");
// });
// let data = fetch(" han");
// // console.log(data);
// const anyFunction = () => {
//   return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
// };

// function resolveFunction() {
//   console.log("Success");
// }

// function rejectFunction() {
//   console.log("Failure");
// }

// const result = new Promise((resolve, reject) => {
//   setTimeout(() => (anyFunction() ? resolve() : reject()), 2000);
// });

// result.then(resolveFunction).catch(rejectFunction);
// console.log("hello world");

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("NEW PROMISE");
//     // resolve();
//     // return 2;
//     reject();
//   }, 1000);
// })
//   .then(function () {
//     console.log("The Funcion is Resolve");
//     return 2;
//   })
//   .then(function (val) {
//     console.log(val);
//     console.log("The Funcion is second time Resolve");
//     return val + 2;
//   })
//   .then(function (val) {
//     console.log("The Funcion is Resolve " + val);
//     return val;
//   });

// promise.catch(function (error) {
//   console.log("REJECT");
//   console.log("Rejecting The Statement");
// });

// function checkUser(userInput, success, failure) {
//   userInput === true ? success() : failure();
// }

// checkUser(true).ifPromiseFulFilled(success()).ifNotFulFilled(failure());
// checkUser(false, success, failure);

// function checkUserPromise(userInput) {
//   new Promise(function (resolve, reject) {
//     if (userInput) {
//       success();
//     } else {
//       failure();
//     }
//   });
// }

// checkUserPromise(true);
export const New = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};
