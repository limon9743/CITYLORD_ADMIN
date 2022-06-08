import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { properties } from "../../../../dammyData";
import "./ContractorList.css";
import { contractorRows } from "../../../../dammyData";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import MessageIcon from "@material-ui/icons/Message";
import axios from "axios";

const ContractorList = () => {
  // const [data, setData] = useState(contractorRows);
  const [contractors, setContractors] = useState([]);
  useEffect(() => {
    function getContarctors() {
      axios
        .get("https://api.clwapping.co.uk/api/contractor/allcontractors/")
        .then((res) => {
          const data = res.data;
          const newData = data.map((item) => {
            return {
              id: item._id,
              name: item.firstname,
              contact: item.contact,
            };
          });
          setContractors(newData);
        });
    }
    getContarctors();
  }, ["https://api.clwapping.co.uk/api/contractor/allcontractors/"]);
  const deleteContractors = (id) => {
    axios
      .delete(`https://api.clwapping.co.uk/api/contractor/contractors/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
      });
    setContractors(contractors.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "contact", headerName: "Contact", width: 200 },
    { field: "speciality_in", headerName: "Speciality in", width: 500 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/contractors/edit/" + params.row.id}>
              <EditIcon />
            </Link>
          </div>
        );
      },
    },
    {
      field: "message",
      headerName: "Message",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/contractors/message/" + params.row.id}>
              <MessageIcon />
            </Link>
          </div>
        );
      },
    },
    {
      field: "Delete",
      headerName: "",
      width: 120,
      renderCell: (params) => {
        return (
          <DeleteOutline onClick={() => deleteContractors(params.row.id)} />
        );
      },
    },
  ];
  return (
    <div className="all-properties-to-rent-div">
      <div className="title-and-property-add-button-div">
        <h1>List of Contractors</h1>
        <Link to="/contractors/addform">
          <button className="new-landlord-button">Add Contractor</button>
        </Link>
      </div>

      <div style={{ margin: "20px", height: "350px" }}>
        <DataGrid
          rows={contractors}
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

export default ContractorList;
