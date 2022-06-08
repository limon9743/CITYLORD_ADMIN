import axios from "axios";
import React, { useEffect, useState } from "react";
import "./RequestedViewingList.css";
import { DataGrid } from "@material-ui/data-grid";

const RequestedViewingList = () => {
  const [requestedViewings, setRequestedViewings] = useState([]);
  const columns = [
    { field: "firstname", headerName: "Firstname", width: 200 },
    { field: "lastname", headerName: "Lastname", width: 200 },
    { field: "contact", headerName: "Contact", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
  ];

  useEffect(() => {
    function getViewings() {
      axios
        .get("https://api.clwapping.co.uk/api/view/get-requestedviewing")
        .then((res) => {
          const data = res.data;
          const newData = data.map((item) => {
            return {
              id: item._id,
              firstname: item.firstname,
              lastname: item.lastname,
              contact: item.contact,
              email: item.email,
              date: item.date,
            };
          });
          setRequestedViewings(newData);
        });
    }
    getViewings();
  }, ["https://api.clwapping.co.uk/api/view/get-requestedviewing"]);
  console.log(requestedViewings);

  return (
    <div className="requested-viewing-list-main-div">
      <div style={{ margin: "20px", height: "400px" }}>
        <h3 style={{ marginBottom: "10px" }}>Requested Property Viewings</h3>
        <DataGrid
          rows={requestedViewings}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default RequestedViewingList;
