import React from "react";

const Input = (Props) => {
  const { type, name, onChange, inputClass, placeholder, pattern } = Props;
  return (
    <input
      pattern={pattern}
      required
      type={type}
      name={name}
      onChange={onChange}
      className={inputClass}
      placeholder={placeholder}
    />
  );
};

export default Input;
