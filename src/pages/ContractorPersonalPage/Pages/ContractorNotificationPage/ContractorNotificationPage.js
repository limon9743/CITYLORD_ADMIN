import React from "react";
import ContractorTopBar from "../../Components/ContractorTopBar/ContractorTopBar";
import ContractorSideBar from "../../Components/ContractorSideBar/ContractorSideBar";
import "./ContractorNotificationPage.css";
import NotificationsPage from "../../Components/NotificationsPage/NotificationsPage";

const ContractorNotificationPage = () => {
  return (
    <div className="contractor-notification-container">
      <ContractorTopBar />

      <div className="contractor-notification-siedbar-body-container">
        <ContractorSideBar />
        <NotificationsPage />
      </div>
    </div>
  );
};

export default ContractorNotificationPage;
