import React, { useEffect } from "react";
import { connect } from "react-redux";
import api from "../api";
import Formfield from "./Form";
import Notification from "./Notification";

const { getFormFields } = api;
const SubmitForm = props => {
  const { getFormFields, notification } = props;
  useEffect(() => {
    getFormFields();
  }, [getFormFields]);
  return (
    <>
      <Formfield />
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFormFields: () => getFormFields({}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
