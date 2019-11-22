import React from "react";
import { StyledTextArea } from "./styles";

const TextArea = ({
  rows = "4",
  placeholder,
  cols = "50",
  onChange,
  name,
  required,
  children,
  disabled
}) => {
  return (
    <div>
      <StyledTextArea
        name={name}
        rows={rows}
        placeholder={placeholder}
        cols={cols}
        onChange={event => onChange(event.target)}
        required={required}
        disabled={disabled}
      />
      {children}
    </div>
  );
};

export default TextArea;
