import React, { useState } from "react";
import "./Sidebar.css";
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

const Sidebar = () => {
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
                  <i class="fa-solid fa-align-justify sidebar-icon-font-awsome"></i>
                  Dashboard
                </h3>
              </AccordionSummary>
              <AccordionDetails className="accordion-summery">
                <ul className="sidebarList">
                  <Link to="/" className="link">
                    <li className="sidebarListItem">
                      <HomeIcon className="sidebarIcon" />
                      Home
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Dashboard Menu Items */}
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-user-tie sidebar-icon-font-awsome"></i>
                  Employees
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <Link to="/employees" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Employees
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-house-user sidebar-icon-font-awsome"></i>
                  Landlord
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <Link to="/landlords" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      All Landlords
                    </li>
                  </Link>
                  <Link to="/landlord/active" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Active Renter Landlords
                    </li>
                  </Link>
                  <Link to="/landlord/potential" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Potential Renter Landlords
                    </li>
                  </Link>
                  <Link to="/landlord/seller/active" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Active Seller Landlords
                    </li>
                  </Link>
                  <Link to="/landlord/seller/potential" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Potential Seller Landlords
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Quick Menu Items */}

          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-building sidebar-icon-font-awsome"></i>
                  Property
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <Link to="/allproperties" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      All Properties
                    </li>
                  </Link>
                  <Link to="/allproperties/torent" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Properties to Rent
                    </li>
                  </Link>
                  <Link to="/allproperties/forsale" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Properties for Sale
                    </li>
                  </Link>
                  <Link to="/allproperties/room" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Rooms to Rent
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Notifications Menu Items */}
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-house-chimney-user sidebar-icon-font-awsome"></i>
                  Tenant
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <Link to="/tenants" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      All Tenants
                    </li>
                  </Link>
                  <Link to="/tenants/active" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Active Tenants
                    </li>
                  </Link>
                  <Link to="/tenants/potential" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Potential Tenants
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Viewing */}
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-eye sidebar-icon-font-awsome"></i>
                  Viewing
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <Link to="/registered-viewing" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Registered Viewing
                    </li>
                  </Link>
                  <Link to="/arrange-viewing" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Arrange Viewing
                    </li>
                  </Link>
                  <Link to="/requested-viewing" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Requested Viewing
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* contractor menu items */}
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-user-gear sidebar-icon-font-awsome"></i>
                  Contractor
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <Link to="/contractors" className="link">
                    <li className="sidebarListItem">
                      <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                      Contractor List
                    </li>
                  </Link>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Task Proceed
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Accounts */}
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-file-invoice-dollar sidebar-icon-font-awsome"></i>
                  Accounts/Payment
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Tenant
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Renter Landlord
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Seller Landlord
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Contractor
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Notification*/}
          <div className="accordion-container-each">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordion-container"
              >
                <h3 className="sidebarTitle">
                  <i class="fa-solid fa-bell sidebar-icon-font-awsome"></i>
                  Notification
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Renter Landlord
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Seller Landlord
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Landlord Payments
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Taneant Payments
                  </li>
                  <li className="sidebarListItem">
                    <i class="fa-regular fa-circle-dot sidebar-icon-font-awsome-list"></i>
                    Taneancy Agreement
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
