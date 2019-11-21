import React, { useEffect } from "react";
import { connect } from "react-redux";
import api from "../api";
import { totalFields } from "../selector";

const { getFormFields } = api;
const SubmitForm = props => {
  const { getFormFields, formInputs } = props;
  console.log("formInputs", formInputs);
  useEffect(() => {
    getFormFields();
  }, [getFormFields]);
  return <div>ome</div>;
};

const mapStateToProps = state => {
  return {
    formInputs: totalFields(state.formInputs)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFormFields: () => getFormFields({}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
