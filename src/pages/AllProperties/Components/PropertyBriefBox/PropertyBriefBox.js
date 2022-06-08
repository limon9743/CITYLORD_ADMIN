import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./PropertyBriefBox.css";

const PropertyBriefBox = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">
          Featured info. of Properties to rent
        </span>
        {/* <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span> */}
        <div className="property-button-each-div-main">
          <Link to="/allproperties/torent">
            <button className="property-button-each">Properties to Rent</button>
          </Link>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">
          Featured info. of Properties for sale
        </span>
        {/* <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span> */}
        <div className="property-button-each-div-main">
          <Link to="/allproperties/forsale">
            <button className="property-button-each">
              Properties for Sale
            </button>
          </Link>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Featured info. of Rooms</span>
        {/* <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1000</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span> */}
        <div className="property-button-each-div-main">
          <Link to="/allproperties/room">
            <button className="property-button-each">Rooms</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyBriefBox;
