import React from "react";
import "./RequestedViewing.css";
import RequestedViewingList from "../Components/RequestedViewingList/RequestedViewingList";

const RequestedViewing = () => {
  return (
    <div className="requested-viewing-page-main">
      <RequestedViewingList />
    </div>
  );
};

export default RequestedViewing;
