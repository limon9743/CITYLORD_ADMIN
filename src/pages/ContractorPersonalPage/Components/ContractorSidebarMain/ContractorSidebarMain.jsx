import React, { useState } from "react";
import "./ContractorSidebarMain.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  LineStyle,
  TrendingUp,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  HomeWorkOutlined,
} from "@material-ui/icons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";

const ContractorSidebarMain = () => {
  const [expandedClass, setExpandedClass] = useState("sidebar");
  const handleSidbarToggle = () => {
    if (expandedClass === "sidebar") {
      setExpandedClass("sidebarDisplay");
    } else {
      setExpandedClass("sidebar");
    }
  };

  return (
    <>
      <i
        onClick={handleSidbarToggle}
        style={{ color: "black" }}
        className="fa-solid fa-bars icon-bar-class"
      ></i>
      <div className={expandedClass}>
        <div className="sidebarWrapper">
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-bars sidebar-icon-font-awsome"></i>
                  Dashboard
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Home
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Profile
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Tasks
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Payments
                  </li>
                  <Link to="/contractor/notifications" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Notification
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractorSidebarMain;
