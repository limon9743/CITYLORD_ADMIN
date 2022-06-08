import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="new-landlord-button-container">
      <Link to="/allproperties/torent">
        <button className="new-landlord-button">Properties to Rent</button>
      </Link>
      <Link to="/allproperties/forsale">
        <button className="new-landlord-button">Properties for Sale</button>
      </Link>
      <Link to="/allproperties/room">
        <button className="new-landlord-button">Room</button>
      </Link>
    </div>
  );
};

export default Buttons;
