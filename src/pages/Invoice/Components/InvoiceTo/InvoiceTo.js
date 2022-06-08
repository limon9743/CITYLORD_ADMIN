import React from "react";
import "./InvoiceTo.css";

const InvoiceTo = () => {
  return (
    <div className="invoice-to-main-container-div">
      <div className="bill-to-div">
        <h4>Bill To:</h4>
        <div className="client-name-and-address-div">
          <input
            type="text"
            className="input-field "
            placeholder="Client Name"
          />
          <input
            type="text"
            className="input-field "
            placeholder="Client Address"
          />
        </div>
      </div>
      <div className="billing-date-and-invoice-number">
        <div className="client-name-and-address-div">
          <div className="lebel-and-input-field-container">
            <label>Invoce No.</label>
            <input type="text" className="input-field " />
          </div>
          <div className="lebel-and-input-field-container">
            <label>Invoce Date</label>
            <input type="date" className="input-field " />
          </div>
          <div className="lebel-and-input-field-container">
            <label>Due Date</label>
            <input type="date" className="input-field " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTo;
