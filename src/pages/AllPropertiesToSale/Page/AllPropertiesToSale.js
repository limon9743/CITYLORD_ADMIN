import React, { useState } from "react";
import "./AllPropertiesToSale.css";
import { properties } from "../../../dammyData";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

const AllPropertiesToSale = () => {
  const [data, setData] = useState(properties);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "landlord", headerName: "Landlord", width: 200 },
    { field: "postcode", headerName: "Postcode", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "view",
      headerName: "Details",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={"/allproperties/forsale/details/" + params.row.postcode}>
            <button className="view-detail-button">View Details</button>
          </Link>
        );
      },
    },
  ];
  return (
    <div className="all-properties-to-rent-div">
      <div className="title-and-property-add-button-div">
        <h1>All Properties For Sale</h1>
        <Link to="/allproperties/forsale/add">
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

export default AllPropertiesToSale;
