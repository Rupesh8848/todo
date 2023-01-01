import React from "react";
import "./InputField.css";
export default function InputField({
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <>
      <div className="input-with-placeholder">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="input-field rounded-xl"
          required
        />
        <p className="placeholder-text">{placeholder}</p>
      </div>
    </>
  );
}
