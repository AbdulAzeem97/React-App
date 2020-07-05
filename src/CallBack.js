import React from "react";

console.log("FETCH API");

async function getAPI() {
  const api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(api, "API");

  const json = await api.json();
  console.log("json", json);
  // console.log(json)
  //   json.then(function (res) {
  //     console.log(res, "res");
  //   });
}

// getAPI();

async function postAPI() {
  const API = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "BootCamp",
      body: "JavsScript",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log(API, "API");
  const json = await API.json();
  console.log("json", json);
}

postAPI()
// console.log("API", api);

// function callBack1() {
//   setTimeout(function () {
//     console.log("Call Back1");
//   }, 200);
// }

// function callBack2() {
//   setTimeout(function () {
//     console.log("Call Back2");
//   }, 200);
// }

// function callBack3() {
//   setTimeout(function () {
//     console.log("Call Back3");
//   }, 200);
// }

// function func1() {
//   callBack1();
//   console.log("FUNCTION1");
// }
// func1();

// function func2() {
//   callBack2();
//   console.log("FUNCTION2");
// }
// func2();

// function func3() {
//   callBack3();
//   console.log("FUNCTION3");
// }
// func3();
export const CallBack = () => {
  return (
    <div>
      <h1>Call Back</h1>
    </div>
  );
};
