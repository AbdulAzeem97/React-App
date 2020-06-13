import React from "react";

function Checking(props) {
  return (
    <div>
      <h1>
        checking the CHild  Component to Run on Parent Component {props.newcheck}
        {props.checkagain}{" "}
      </h1>
      <h2>Just adding a lline </h2>
      {/* <h2>by using surge technology</h2>
      <p1> checking by new component</p1>;<p1> checking by secondcomponent</p1>; */}
    </div>
  );
}
export default Checking;
