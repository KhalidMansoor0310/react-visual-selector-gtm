import React from "react";
import { Card } from "react-bootstrap";

const Dashboard = ({ selectedElements }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <table className="table">
        <thead>
          <th>Type</th>
          <th>Label</th>
        </thead>
        <tbody></tbody>
        {selectedElements.map((element) => (
          <tr className="col-md-3">
            <td>{element.type}</td>
            <td> {element.label}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Dashboard;
