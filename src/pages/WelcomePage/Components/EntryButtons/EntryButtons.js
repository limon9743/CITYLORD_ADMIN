import React from "react";
import { Link } from "react-router-dom";

const EntryButtons = (props) => {
  const { setAdmin, setContractor } = props;
  return (
    <div className="five-butoon-container">
      <Link to="/admin">
        <button onClick={setAdmin}>Admin</button>
      </Link>
      <Link to="/contractor">
        <button onClick={setContractor}>Contractor</button>
      </Link>

      <button>Employee</button>
      <button>Tenant</button>
      <button>Landlord</button>
    </div>
  );
};

export default EntryButtons;
