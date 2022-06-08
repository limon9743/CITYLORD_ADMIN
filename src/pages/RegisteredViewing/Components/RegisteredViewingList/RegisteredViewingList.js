import axios from "axios";
import React, { useEffect, useState } from "react";
import "./RegisteredViewingList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

const RegisteredViewingList = () => {
  const [registeredViewings, setRegisteredViewings] = useState([]);
  const columns = [
    { field: "firstname", headerName: "Firstname", width: 200 },
    { field: "lastname", headerName: "Lastname", width: 200 },
    { field: "contact", headerName: "Contact", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "profession", headerName: "Profession", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <button onClick={() => deleteViewing(params.row.id)}>Delete</button>
      ),
    },
    {
      field: "view",
      headerName: "View",
      width: 200,
      renderCell: (params) => (
        <Link to={"/registered-viewing/details/" + params.row.contact}>
          <button>View</button>
        </Link>
      ),
    },
  ];

  useEffect(() => {
    function getViewings() {
      axios
        .get("https://api.clwapping.co.uk/api/view/registeredviewings")
        .then((res) => {
          const data = res.data;
          const newData = data.map((item) => {
            return {
              id: item._id,
              firstname: item.firstname,
              lastname: item.lastname,
              contact: item.contact,
              email: item.email,
              profession: item.profession,
            };
          });
          setRegisteredViewings(newData);
        });
    }
    getViewings();
  }, ["https://api.clwapping.co.uk/api/view/registeredviewings"]);
  console.log(registeredViewings);

  const deleteViewing = (id) => {
    axios
      .delete(`https://api.clwapping.co.uk/api/view/deleteviewing/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
      });
    setRegisteredViewings(registeredViewings.filter((item) => item.id !== id));
  };

  return (
    <div className="registered-viewing-list-main-div">
      <div style={{ margin: "20px", height: "400px" }}>
        <h3 style={{ marginBottom: "10px" }}>
          Registered Property List For Viewing
        </h3>
        <DataGrid
          rows={registeredViewings}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default RegisteredViewingList;
