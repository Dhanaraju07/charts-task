// import React from "react";
// import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid } from "recharts";

// const data = [
//   { x: 1, lower: 2, upper: 5 },
//   { x: 2, lower: 1, upper: 4 },
//   { x: 3, lower: 3, upper: 6 },
//   { x: 4, lower: 0, upper: 2 },
//   { x: 5, lower: 4, upper: 7 },
// ];

// const RangeAreaLineChart = () => (
//   <LineChart width={600} height={300} data={data}>
//     <CartesianGrid strokeDasharray="3 3" />
//     <Area
//       type="monotone"
//       dataKey="upper"
//       fill="red"
//       fillOpacity={0.3}
//     />
//     <Line type="monotone" dataKey="lower" stroke="#8884d8" strokeWidth={1} />
//     <Line type="monotone" dataKey="upper" stroke="#8884d8" strokeWidth={1} />
//     <XAxis dataKey="x" />
//     <YAxis />
//   </LineChart>
// );

// export default RangeAreaLineChart;

// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const App = () => {
//   const data = {
//     labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", ""],
//     datasets: [
//       {
//         label: "Start Sales",
//         data: [18, 19.5, 22, 24, 26, 27, 29, 32, 35],
//         backgroundColor: "rgba(0, 0, 0, 0.2)",
//         borderColor: "rgba(0, 0, 0, 0)",
//         fill: 1,
//         tension: 0.4,
//       },
//       {
//         label: "End Sales",
//         data: [17, 17.4, 18.2, 19.8, 21.9, 23.2, 25.2, 27.7, 29],
//         backgroundColor: "rgba(0, 0, 0, 0.2)",
//         borderColor: "rgba(0, 0, 0, 0)",
//         fill: 1,
//         tension: 0.4,
//       },
//       {
//         label: "top Sales",
//         data: [15.8, 15, 15.6, 15.1, 16.2, 17.3, 19.8, 19.2, 23.2],
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         borderColor: "rgba(0, 0, 0, 0)",
//         fill: 1,
//         tension: 0.4,
//       },
//       {
//         label: "least Sales",
//         data: [13.6, 13, 12.8, 12, 11.6, 11.2, 11.8, 12, 9.6],
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         borderColor: "rgba(0, 0, 0, 0)",
//         fill: 1,
//         tension: 0.4,
//       },
//     ],
//   };

//   const config = {
//     type: "line",
//     data,
//     options: {
//       scales: {
//         x: {
//           title: {
//             display: false,
//             text: "Month",
//           },
//         },
//         y: {
//           beginAtZero: true,
//           max: 60,
//           stepSize: 10,
//           title: {
//             display: false,
//             text: "Sales",
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <div className="chartCard">
//         <ChartRef config={config} />
//       </div>
//     </div>
//   );
// };

// const ChartRef = ({ config }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const canvas = chartRef.current;
//     const myChart = new Chart(canvas, config);

//     return () => myChart.destroy();
//   }, [config]);

//   return <canvas ref={chartRef} id="myChart" />;
// };

// export default App;

import React from "react";
import SprintsAreaChart from "./Components/SprintsAreaChart/SprintsAreaChart";
import SprintsBarChart from "./Components/SprintsBarChart/SprintsBarChart";
import SprintsTable from "./Components/SprintsTable/SprintsTable";

const App = () => {
  return (
    <>
      <SprintsAreaChart />
      <SprintsBarChart />
      <SprintsTable />
    </>
  );
};

export default App;
