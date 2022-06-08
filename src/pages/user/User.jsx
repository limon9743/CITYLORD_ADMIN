import React from "react";
import "./user.css";
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Landlord Details</h1>
        {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Name</span>
              {/* <span className="userShowUsername">Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Personal Information</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">snow123</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">1/1/1995</span>
            </div>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">1234567</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">snow@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Properties</span>
          {/* <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="snow123"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Snow"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Birthday</label>
                <input
                  type="text"
                  placeholder="1/1/1995"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Cell Number</label>
                <input
                  type="text"
                  placeholder="1234567"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="snow@gmail.com"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
                  alt=""
                  className="userUpdateImg"
                ></img>
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form> */}
          <h4>Property Lists</h4>
        </div>
      </div>
    </div>
  );
};

export default User;
