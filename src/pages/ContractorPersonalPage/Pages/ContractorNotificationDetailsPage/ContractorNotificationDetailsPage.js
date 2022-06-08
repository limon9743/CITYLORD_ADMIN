import React from "react";
import ContractorSideBar from "../../Components/ContractorSideBar/ContractorSideBar";
import ContractorTopBar from "../../Components/ContractorTopBar/ContractorTopBar";
import "./ContractorNotificationDetailsPage.css";
import NotificationDetails from "../../Components/NotificationDetails/NotificationDetails";

const ContractorNotificationDetailsPage = () => {
  return (
    <div className="contractor-notification-details-container">
      <ContractorTopBar />
      <h1>Contractor Notification Details Page</h1>
      <div className="contractor-notification-details-siedbar-body-container">
        <ContractorSideBar />
        <NotificationDetails />
      </div>
    </div>
  );
};

export default ContractorNotificationDetailsPage;
