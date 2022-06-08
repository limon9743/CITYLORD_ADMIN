import React, { useState } from "react";
import "./AllTenantsList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { tenantsRows } from "../../../../dammyData";

const AllTenantsList = () => {
  const [data, setData] = useState(tenantsRows);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "postcode", headerName: "Postcode", width: 200 },

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
        <h1>List of All Tenants</h1>
        <div className="tenants-add-button-container">
          <Link to="/contractors/addform">
            <button className="new-landlord-button">Add Active Tenants</button>
          </Link>
          <Link to="/contractors/addform">
            <button className="new-landlord-button">
              Add Potential Tenants
            </button>
          </Link>
        </div>
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

export default AllTenantsList;
