import React, { useEffect, useState } from "react";
import "./PotentialTenantsList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
// import { tenantsRows } from "../../../../dammyData";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Button,
//   Menu,
//   MenuItem,
// } from "@material-ui/core";

import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";

const PotentialTenantsList = () => {
  // const [data, setData] = useState(tenantsRows);
  const [tenants, setTenants] = useState([]);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "contact", headerName: "Contact", width: 170 },
    { field: "movingdate", headerName: "Moving Date", width: 170 },
    { field: "datasource", headerName: "Datasource", width: 145 },

    // {
    //   field: "view",
    //   headerName: "View",
    //   width: 120,
    //   renderCell: (params) => {
    //     return (
    //       <div>
    //         <Link to={"/contractors/details/" + params.row.id}>
    //           <button className="view-detail-button">View Details</button>
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
    {
      field: "viewing",
      headerName: "Arrange Viewing",
      width: 180,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/tenants/potential/arrange-viewing/" + params.row.id}>
              <button className="view-detail-button">Arrange Viewing</button>
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
        return <DeleteOutline onClick={() => deleteTenants(params.row.id)} />;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/tenants/potential/edit/" + params.row.id}>
              <EditIcon />
            </Link>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    function getTenants() {
      axios
        .get(
          "https://api.clwapping.co.uk/api/potentialtenant/allpotentialtenants"
        )
        .then((res) => {
          const data = res.data;
          const newData = data.map((item) => {
            return {
              id: item._id,
              name: item.firstname,
              contact: item.contact,
              movingdate: item.movingdatefrom,
              datasource: item.datasource,
            };
          });
          setTenants(newData);
        });
    }
    getTenants();
  }, ["https://api.clwapping.co.uk/api/potentialtenant/allpotentialtenants"]);

  const deleteTenants = (id) => {
    axios
      .delete(
        `https://api.clwapping.co.uk/api/potentialtenant/potentialtenants/${id}`
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
      });
    setTenants(tenants.filter((item) => item.id !== id));
  };

  return (
    <div className="all-properties-to-rent-div">
      <div className="title-and-property-add-button-div">
        <h1>List of Potential Tenants</h1>
        <Link to="/tenants/potential/admin/add">
          <button className="new-landlord-button">Add Potential Tenants</button>
        </Link>
      </div>

      <div style={{ margin: "20px", height: "350px" }}>
        <DataGrid
          rows={tenants}
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

export default PotentialTenantsList;
