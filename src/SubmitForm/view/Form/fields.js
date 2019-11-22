import React from "react";
import { Input, Select, TextArea } from "./InputTypes";

const Fields = ({ type, ...props }) => {
  return type === "text" ? (
    <Input {...props} />
  ) : type === "select" ? (
    <Select {...props} />
  ) : type === "textarea" ? (
    <TextArea {...props} />
  ) : null;
};

export default Fields;
