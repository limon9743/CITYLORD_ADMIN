import React, { useState } from "react";
import "./EmployeesList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { employeeRows } from "../../../../dammyData";

const EmployeesList = () => {
  const [data, setData] = useState(employeeRows);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "contracttype", headerName: "Contract Type", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={"/contractors/details/" + params.row.id}>
            <button className="view-detail-button">View Details</button>
          </Link>
        );
      },
    },
  ];
  return (
    <div className="all-properties-to-rent-div">
      <div className="title-and-property-add-button-div">
        <h1>List of Employees</h1>
        <Link to="/employees/addemployee">
          <button className="new-landlord-button">Add Employees</button>
        </Link>
      </div>

      <div style={{ margin: "20px", height: "350px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default EmployeesList;
