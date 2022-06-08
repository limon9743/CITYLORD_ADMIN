import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./NotificationsPage.css";
import { Link } from "react-router-dom";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

const NotificationsPage = () => {
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
    { field: "tasktitle", headerName: "Task", width: 300 },
    // { field: "contact", headerName: "Contact", width: 170 },
    { field: "movingdate", headerName: "Date", width: 170 },
    // { field: "datasource", headerName: "Datasource", width: 145 },

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
      headerName: "Details",
      width: 180,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/tenants/potential/arrange-viewing/" + params.row.id}>
              <button className="view-detail-button">View Details</button>
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
    // {
    //   field: "edit",
    //   headerName: "Edit",
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <div>
    //         <Link to={"/tenants/potential/edit/" + params.row.id}>
    //           <EditIcon />
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
  ];

  useEffect(() => {
    function getTenants() {
      axios
        .get(
          "https://api.clwapping.co.uk/api/admintocontractor/alladmintocontractors"
        )
        .then((res) => {
          const data = res.data;
          const newData = data.map((item) => {
            return {
              id: item._id,
              tasktitle: item.tasktitle,
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
        <h1>List of Notifications</h1>
        {/* <Link to="/tenants/potential/admin/add">
          <button className="new-landlord-button">Add Potential Tenants</button>
        </Link> */}
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
      {/* <div>
        <img
          src="image/upload/contractor/home-1650576517339.png"
          alt="Flowers in Chania"
          style={{ width: "460", height: "345" }}
        />
      </div> */}
    </div>
  );
};

export default NotificationsPage;
