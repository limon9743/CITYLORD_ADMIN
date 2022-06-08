import React from "react";
import "./InvoiceHeader.css";
import logo from "../../../../assets/citilordLogo.png";

const InvoiceHeader = () => {
  return (
    <div className="form-header-container">
      <div className="company-name-logo-and-address">
        <div className="company-logo-container">
          <img src={logo} className="company-logo" />
        </div>
        <div className="company-name">Citilord</div>
        <div className="company-address">Address</div>
      </div>
      <div className="invoice-title">Invoice</div>
    </div>
  );
};

export default InvoiceHeader;
