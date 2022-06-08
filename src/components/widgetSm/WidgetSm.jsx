import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joind Staffs</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://image.freepik.com/free-icon/important-person_318-10744.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://image.freepik.com/free-icon/important-person_318-10744.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://image.freepik.com/free-icon/important-person_318-10744.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display Profile
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
