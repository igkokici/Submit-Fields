import React from "react";
import { StyledInput } from "./styles";

const Input = ({
  placeholder,
  name,
  onChange,
  required,
  children,
  disabled
}) => {
  return (
    <div>
      <StyledInput
        placeholder={placeholder}
        name={name}
        onChange={event => onChange(event.target)}
        required={required}
        disabled={disabled}
      />
      {children}
    </div>
  );
};

export default Input;
