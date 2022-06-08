import React from "react";

import CustomInput from "../../../components/CustomInput/CustomInput";
import InvoiceHeader from "../Components/InvoiceHeader/InvoiceHeader";
import InvoiceTo from "../Components/InvoiceTo/InvoiceTo";
import ItemTable from "../Components/ItemTable/ItemTable";
import "./Invoice.css";

const Invoice = () => {
  return (
    <div className="invoice-page-main-div-container">
      <div className="invoice-page-form-container">
        <div className="invoice-form">
          <InvoiceHeader />
          <InvoiceTo />
          <ItemTable />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
