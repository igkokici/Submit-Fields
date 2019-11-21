import React from "react";
import {
  InnerContainer,
  Title,
  FormContainer,
  CustomCard,
  Button
} from "./styles";
import Fields from "./fields";

const Formfields = ({ formInputs }) => {
  return (
    <InnerContainer>
      <Title>Submit Form</Title>
      <CustomCard>
        <FormContainer>
          {formInputs.map(({ label, placeholder, name, type, options }, i) => (
            <Fields
              key={i}
              type={type}
              placeholder={placeholder}
              name={name}
              options={options}
            />
          ))}
          <Button>Submit</Button>
        </FormContainer>
      </CustomCard>
    </InnerContainer>
  );
};

export default Formfields;
