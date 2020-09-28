import React from "react";

const Input = ({ label, defaultValue, onChange, name }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        name={name}
        defaultValue={defaultValue}
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
