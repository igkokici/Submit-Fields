import {
  GET_FORM_FIELDS,
  CREATE_SUBMIT_FORM,
  NOTIFICATION_REMOVE
} from "../actionTypes";

const initialState = {
  formInputs: [],
  loading: {
    getJsonFields: true,
    postFielInputs: false
  },
  submitForm: "",
  notification: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM_FIELDS.request:
      return { ...state, loading: { ...state.loading, getJsonFields: true } };
    case GET_FORM_FIELDS.success:
      return {
        ...state,
        loading: { ...state.loading, getJsonFields: false },
        formInputs: action.payload
      };
    case CREATE_SUBMIT_FORM.request:
      return {
        ...state,
        loading: { ...state.loading, postFielInputs: true }
      };
    case CREATE_SUBMIT_FORM.success:
      return {
        ...state,
        loading: { ...state.loading, postFielInputs: false },
        submitForm: action.payload,
        notification: { type: "success", message: "Data saved successfully!" }
      };
    case CREATE_SUBMIT_FORM.failure:
      return {
        ...state,
        loading: { ...state.loading, postFielInputs: false },
        notification: { type: "failure", mesasge: "Something went wrong!" }
      };

    case NOTIFICATION_REMOVE:
      return {
        ...state,
        notification: null
      };
    default:
      return state;
  }
};
