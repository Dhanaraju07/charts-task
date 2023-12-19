

import React from "react";
import SprintsAreaChart from "./Components/SprintsAreaChart/SprintsAreaChart";
import SprintsBarChart from "./Components/SprintsBarChart/SprintsBarChart";
import SprintsTable from "./Components/SprintsTable/SprintsTable";
import SprintsCard from "./Components/SprintsCard/SprintsCard";

const App = () => {
  return (
    <>
      <SprintsAreaChart />
      <SprintsBarChart />
      <SprintsTable />
      <SprintsCard />
    </>
  );
};

export default App;
