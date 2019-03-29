import React from "react";

// here ...rest is rest operator used because we have this patter of parameter like type={type} which can be used with spread operator like {...rest}
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="{name}">{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
