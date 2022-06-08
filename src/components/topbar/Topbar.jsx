import React, { useEffect } from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Logo from "../../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Topbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* <i onClick="" style={{ color: "white" }} class="fa-solid fa-bars"></i> */}
        <div className="topleft">
          <span className="logo">
            <img
              src={Logo}
              className="admin-logo-topbar"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </span>
        </div>
        <div>
          <h1 style={{ color: "yellow" }}>This Site is Under Constraction</h1>
        </div>

        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://wtspdp.com/wp-content/uploads/2021/04/Whatsapp-dp-statuis-dp-ote3-23-1024x1024.jpg?is-pending-load=1"
            alt=""
            className="topAvatar"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
