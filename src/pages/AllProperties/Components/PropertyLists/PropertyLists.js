import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { properties } from "../../../../dammyData";
import "./PropertyLists.css";

const PropertyLists = () => {
  const [data, setData] = useState(properties);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "landlord", headerName: "Landlord", width: 200 },
    { field: "postcode", headerName: "Postcode", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "view", headerName: "Viewing", width: 200 },
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

export default PropertyLists;
