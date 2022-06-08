import React from "react";
import ActiveTenantsList from "../Components/ActiveTenantsList/ActiveTenantsList";
import "./ActiveTenants.css";

const ActiveTenants = () => {
  return (
    <div className="active-tenants-page-main-div">
      <ActiveTenantsList />
    </div>
  );
};

export default ActiveTenants;
