import { GET_FORM_FIELDS, CREATE_SUBMIT_FORM } from "../actionTypes";

const initialState = {
  formInputs: [],
  loading: {
    getJsonFields: true,
    postFielInputs: true
  },
  submitForm: ""
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
        submitForm: action.payload
      };
    default:
      return state;
  }
};
