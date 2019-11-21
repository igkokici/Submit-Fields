import { GET_JSON_FIELDS } from "../actionTypes";

const initialState = {
  formInputs: [],
  loading: {
    getJsonFields: true,
    postFielInputs: true
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JSON_FIELDS.request:
      return { ...state, loading: { ...state.loading, getJsonFields: true } };
    case GET_JSON_FIELDS.success:
      return {
        ...state,
        loading: { ...state.loading, getJsonFields: false },
        formInputs: action.payload
      };
    default:
      return state;
  }
};
