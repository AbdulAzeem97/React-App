import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
   
  labels: ["January 1", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "1998",
      backgroundColor: "lightblue",
      borderColor: "red",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
        label: "1999",
        backgroundColor: "lightgreen",
        borderColor: "rgba(255,77,12,0)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(229,1,132,2)",
        hoverBorderColor: "rgba(255,99,1322,2)",
        data: [30, 90, 20, 66, 10,10 , 40],
      },
  ],
};

function LineBar() {
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={50}
        height={250}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
export default LineBar;
