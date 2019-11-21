import React from "react";

const Fields = ({ type, placeholder, name, options }) => {
  return type === "text" ? (
    <input type={type} placeholder={placeholder} name={name} />
  ) : type === "select" ? (
    <select type={type} name={name} placeholder={placeholder}>
      {options.map((option, i) => (
        <option key={i} value={option.value} default={placeholder}>
          {option.label}
        </option>
      ))}
    </select>
  ) : type === "textarea" ? (
    <textarea rows="4" cols="50" placeholder={placeholder}></textarea>
  ) : null;
};

export default Fields;
