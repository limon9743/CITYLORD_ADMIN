import React from "react";
import EmployeesList from "../Components/EmployeesList/EmployeesList";
import "./Employees.css";

const Employees = () => {
  return (
    <div className="employees-page-main-div">
      <EmployeesList />
    </div>
  );
};

export default Employees;
