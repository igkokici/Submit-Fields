import base from "../../shared-api";
import { GET_FORM_FIELDS, CREATE_SUBMIT_FORM } from "../actionTypes";

const api = {
  getFormFields: (params, dispatch) =>
    base.get(params, GET_FORM_FIELDS, dispatch),
  createFormFields: (params, dispatch) =>
    base.post(params, CREATE_SUBMIT_FORM, dispatch)
};

export default api;
