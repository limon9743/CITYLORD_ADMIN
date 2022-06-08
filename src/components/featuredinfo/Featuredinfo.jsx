import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredinfo.css";

const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Featured Info_01</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Featured Info_02</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Featured Info_03</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1000</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default Featuredinfo;
