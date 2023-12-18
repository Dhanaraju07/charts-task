import React from "react";
import { tableHeader, sprintsTableData } from "../../Data/SprintsTableData";
import "../../GlobalStyles/styles.css";
import "./SprintsTable.css";

const SprintsTable = () => {
  return (
    <div className="sprints_table_container">
      <table className="custom_table">
        <thead className="table_head_container">
          <tr>
            {tableHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table_body_container">
          {sprintsTableData.map((sprint, index) => (
            <tr className="table_body" key={index}>
              <td>{sprint.sprintName}</td>
              <td>{sprint.status}</td>
              <td>{sprint.start_date}</td>
              <td>{sprint.end_date}</td>
              <td>{sprint.completed_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SprintsTable;
