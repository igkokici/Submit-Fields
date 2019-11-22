import React from "react";
import { StyledSelect } from "./styles";

const Select = ({
  placeholder,
  name,
  options,
  onChange,
  required,
  children,
  disabled
}) => {
  return (
    <div>
      <StyledSelect
        name={name}
        onChange={event => onChange(event.target)}
        required={required}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>
        {options.map((option, i) => (
          <option key={i} value={option.value} default={placeholder}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {children}
    </div>
  );
};

export default Select;
