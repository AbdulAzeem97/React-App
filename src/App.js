import React, { useEffect } from "react";
import { New } from "./New";

// //   return (<div className="App">
// //     {/* <Checking />  */}
// //      </div>;)
// // }

// function printGreeting(msg, alertGreet) {
//   if (msg === "evening") {
//     evening(alertGreet);
//   } else if (msg === "morning") {
//     morning(alertGreet);
//   } else {
//     night(alertGreet);
//   }
// }

// // function alertGreet(msg) {
// //   alert(msg);
// // }

// // breakfast();
// function morning(alertGreet) {
//   alert("Good Morning ");
//   alertGreet("Hello WOrld");
// }

// // breakfast();
// function evening(alertGreet) {
//   alert("Good Evening ");
//   alertGreet("Hello WOrld");
// }

// function night(alertGreet) {
//   alert("Good Night");
//   alertGreet("Hello WOrld");
// }
// // function alertGreet(msg) {
// //   alert(msg);
// // }
// printGreeting("night", alertGreet);
function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  
  // console.log(" Start Game");

  // function breakfast() {
  //   setTimeout(function () {
  //     console.log("breakfast complete");
  //   }, 100);
  // }

  // morning();
  // console.log("End Game");
  return <New />;
}
// console.log("azeem");

// setTimeout(function check() {
//   console.log("Async func check");
// }, 1000);

// setTimeout(function check1() {
//   console.log("Async func check2");

//   console.log("RE INIT");
// }, 2000);

// setTimeout(function check3(){
//   console.log("Value rechecking");
// },3000);

// function App() {
//   // return <h2>checking making one more function</h2>;

//   return (
//     <div>
//       <h1>
//         adding the content
//       </h1>
//       <h2>
//         content adding init

//       </h2>
//     </div>
//   )
// }
// console.log("subhan");

// // export default Work;
export default App;
// export default work;
// var student = { name: "React Class", type: "bootcamp" };
