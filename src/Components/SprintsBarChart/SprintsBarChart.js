import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import sprintsBarData from "../../Data/SprintsBarChartData";
import "../../GlobalStyles/styles.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { sp_planned, sp_added, sp_completed, sp_forecast } =
      payload[0].payload;

    return (
      <div className="custom_tooltip">
        <p>{`(01/${label}/2023 - 31/${label}/2023)`}</p>
        <div className="issue_container">
          <p>Sp Planned</p>
          <p>{sp_planned}</p>
        </div>
        <div className="issue_container">
          <p>Sp Added</p>
          <p>{sp_added}</p>
        </div>
        <div className="issue_container">
          <p>Sp Completed</p>
          <p>{sp_completed}</p>
        </div>
        <div className="issue_container">
          <p>Sp Forecast</p>
          <p>{sp_forecast}</p>
        </div>
      </div>
    );
  }

  return null;
};

const SprintsBarChart = () => {
  return (
    <>
      <div className="sprints_container">
        <BarChart
          width={1000}
          height={600}
          data={sprintsBarData}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis
            dataKey="name"
            label={{
              value: "Sprints",
              angle: 360,
              position: "bottom",
            }}
          />
          <YAxis
            ticks={[0, 50, 100, 150, 200]}
            label={{
              value: "Stay Point(SP)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="sp_planned"
            barSize={20}
            stackId="a"
            fill="var(--third-color)"
          />
          <Bar
            dataKey="sp_added"
            barSize={20}
            stackId="a"
            fill="var(--secondary-color)"
          />
          <Bar
            dataKey="sp_completed"
            barSize={20}
            fill="var(--primary-color)"
          />
          <Bar dataKey="sp_forecast" barSize={20} fill="var(--fourth-color)" />
        </BarChart>
        <div className="chart_text_container">
          <div className="chart_text_indicate_container">
            <div className="icon issue_open_container" />
            <p className="issue_text">Sp Planned</p>
          </div>
          <div className="chart_text_indicate_container">
            <div className="icon issue_started_container" />
            <p className="issue_text">Sp Added</p>
          </div>
          <div className="chart_text_indicate_container">
            <div className="icon issue_completed_container" />
            <p className="issue_text">Sp Completed</p>
          </div>
          <div className="chart_text_indicate_container">
            <div className="icon forecast_container" />
            <p className="issue_text">Sp Forecast</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SprintsBarChart;
