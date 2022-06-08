import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { properties } from "../../../../dammyData";

import "./PropertyListToView.css";
import { Link } from "react-router-dom";

const PropertyListToView = () => {
  const [data, setData] = useState(properties);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "landlord", headerName: "Landlord", width: 200 },
    { field: "postcode", headerName: "Postcode", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "view",
      headerName: "Viewing",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={"/arrange-viewing/" + params.row.postcode}>
            <button className="view-detail-button">Arrange Viewing</button>
          </Link>
        );
      },
    },
  ];
  return (
    <div style={{ margin: "20px", height: "250px" }}>
      <h3 style={{ marginBottom: "10px" }}>All Property List</h3>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={2}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default PropertyListToView;
