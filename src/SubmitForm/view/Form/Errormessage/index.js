import React from "react";

import { StyledError } from "./styles";

const Errormessage = ({ error }) => {
  return <StyledError>{error}</StyledError>;
};

export default Errormessage;
