import React from "react";
import PropTypes from "prop-types";

export const Input = (props) => {
  const {
    onChange,
    type,
    name = null,
    value,
    placeholder = "Type here...",
  } = props;
  return (
    <input
      className="input"
      onChange={onChange}
      type={type}
      name={name || type}
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any,
};
