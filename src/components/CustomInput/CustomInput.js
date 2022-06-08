import React from "react";
import "./CustomInput.css";

const CustomInput = (props) => {
  const { register, type, placeholder } = props;
  return (
    <div>
      <input type={type} placeholder={placeholder} ref={register} />
    </div>
  );
};

export default CustomInput;
