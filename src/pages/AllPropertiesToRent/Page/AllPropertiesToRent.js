import React, { useState } from "react";
import "./AllPropertiesToRent.css";
import { properties } from "../../../dammyData";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

const AllPropertiesToRent = () => {
  const [data, setData] = useState(properties);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "landlord", headerName: "Landlord", width: 200 },
    { field: "postcode", headerName: "Postcode", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
  ];
  return (
    <div className="all-properties-to-rent-div">
      <div className="title-and-property-add-button-div">
        <h1>All Properties To Rent</h1>
        <Link to="/allproperties/torent/add">
          <button className="new-landlord-button">Add Property</button>
        </Link>
      </div>

      <div style={{ margin: "20px", height: "250px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={2}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default AllPropertiesToRent;
