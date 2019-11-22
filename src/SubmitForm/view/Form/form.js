import React, { useState } from "react";
import { connect } from "react-redux";
import { totalFields } from "../../selector";
import api from "../../api";
import Fields from "./fields";
import validate from "./validators";
import Errormessage from "./Errormessage";
import {
  InnerContainer,
  Title,
  FormContainer,
  CustomCard,
  Button,
  SkeletonForm
} from "./styles";

const { createFormFields } = api;
const Formfields = ({
  formInputs,
  createFormFields,
  loadingButtonSubmit,
  getJsonDataFields
}) => {
  const [formFields, setFormFields] = useState({});
  const [errors, setErrors] = useState({});

  const onInputFieldsChange = ({ value, name }) => {
    setFormFields({
      ...formFields,
      [name]: value
    });
  };

  const getRules = () =>
    Object.assign(
      {},
      ...formInputs.map(input => ({ [input.name]: input.rules }))
    );

  return (
    <InnerContainer>
      <Title>Submit Form</Title>
      <form
        id="submitForm"
        onSubmit={e => {
          e.preventDefault();
          validate(
            formFields,
            getRules(),
            data => {
              createFormFields(data);
              document.getElementById("submitForm").reset();
            },
            err => setErrors(err)
          );
        }}
      >
        <CustomCard>
          <FormContainer>
            {getJsonDataFields ? (
              <>
                <SkeletonForm />
                <SkeletonForm />
                <SkeletonForm />
              </>
            ) : (
              formInputs.map(
                ({ label, placeholder, name, type, options, rules }, i) => (
                  <Fields
                    key={i}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    options={options}
                    onChange={onInputFieldsChange}
                    required={rules && rules.required}
                    disabled={loadingButtonSubmit}
                  >
                    <Errormessage error={errors[name]} />
                  </Fields>
                )
              )
            )}
            <Button disabled={loadingButtonSubmit} type="submit">
              Submit
            </Button>
          </FormContainer>
        </CustomCard>
      </form>
    </InnerContainer>
  );
};

const mapStateToProps = state => {
  return {
    getJsonDataFields: state.loading.getJsonFields,
    loadingButtonSubmit: state.loading.postFielInputs,
    formInputs: totalFields(state.formInputs)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createFormFields: formFields => createFormFields(formFields, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Formfields);
