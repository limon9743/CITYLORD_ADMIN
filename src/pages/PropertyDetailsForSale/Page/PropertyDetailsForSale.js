import React from "react";
import PropertyImages from "../Components/PropertyImages/PropertyImages";
import PropertyInfoAndDetails from "../Components/PropertyInfoAndDetails/PropertyInfoAndDetails";
import "./PropertyDetailsForSale.css";
const PropertyDetailsForSale = () => {
  return (
    <div className="property-details-page-main">
      <PropertyInfoAndDetails />
      <PropertyImages />
    </div>
  );
};

export default PropertyDetailsForSale;
