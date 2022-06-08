import React from "react";
import ContractorSideBar from "../../Components/ContractorSideBar/ContractorSideBar";
import ContractorTopBar from "../../Components/ContractorTopBar/ContractorTopBar";
import ContractorBody from "../../Components/ContractorBody/ContractorBody";
import "./ContractorHomePage.css";
import ContractorSidebarMain from "../../Components/ContractorSidebarMain/ContractorSidebarMain";
import { Outlet } from "react-router-dom";

const ContractorHomePage = () => {
  return (
    <div className="contractor-homepage-container">
      {/* <ContractorTopBar /> */}
      <h1>Welcome</h1>
      <div className="contractor-homepage-siedbar-body-container">
        <div>
          <ContractorSidebarMain />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ContractorHomePage;
