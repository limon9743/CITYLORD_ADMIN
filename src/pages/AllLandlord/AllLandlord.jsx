import React from "react";
import "./AllLandlord.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dammyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import DialogBox from "../DialogBox/DialogBox";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import SendMessage from "../../components/SendMessage/SendMessage";

const AllLandlord = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.avatar}
            <span>{params.row.username}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 150,
    },
    {
      field: "properties",
      headerName: "Quantity of Property",
      width: 200,
    },
    {
      field: "agreement",
      headerName: "Agreement",
      width: 150,
    },

    {
      field: "View Details",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <Link to={"/landlord/" + params.row.id}>
            <button className="view-detail-button">View Details</button>
          </Link>
        );
      },
    },
    {
      field: "Send Email",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <MailOutlineIcon className="send-mail-icon" onClick={handleOpen} />
        );
      },
    },

    {
      field: "Actions",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <DeleteOutlineIcon
            // className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="title-and-buttons-container">
        <div className="landlord-page-title">List of Landlords</div>
        <div className="landlord-button-container">
          <Link to="/landlordrenter">
            <button className="landlord-button">Create Renter Landlord</button>
          </Link>
          <Link to="/landlordseller">
            <button className="landlord-button">Create Seller Landlord</button>
          </Link>
        </div>
      </div>

      <DataGrid
        rows={data}
        columns={columns}
        pageSize={6}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
      />

      {/* Dialog Box Start */}
      <div className="dialogbox-container">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Send Your Message"}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText id="alert-dialog-description">
            If you are new to City Lord and would like a property valuation,
            please complete the form and a member of our staff team will contact
            you. <Link to="/free-valuation">Please click here</Link>
          </DialogContentText> */}
            <SendMessage />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
          </DialogActions>
        </Dialog>

        {/* Dialog Box End */}
      </div>
    </div>
  );
};

export default AllLandlord;
