import React from "react";
import "./ContractorSideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const ContractorSideBar = () => {
  return (
    <>
      <div className="users-nav-container">
        <ul className="user-nav">
          <li className="contarctor-nav-list-active">
            <a href="#">
              <div className="nav-list-icon-text-container">
                <HomeIcon className="icons-nav-contractor" />
                <span className="list-text">home</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="nav-list-icon-text-container">
                <InfoIcon className="icons-nav-contractor" />
                <span className="list-text">About</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="nav-list-icon-text-container">
                <NotificationsIcon className="icons-nav-contractor" />
                <span className="list-text">Notifications</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="nav-list-icon-text-container">
                <FormatListBulletedIcon className="icons-nav-contractor" />
                <span className="list-text">Tasks Procceed</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContractorSideBar;
