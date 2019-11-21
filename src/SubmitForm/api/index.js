import base from "../../shared-api";
import { GET_JSON_FIELDS } from "../actionTypes";

const api = {
  getImgurGallery: (params, dispatch) =>
    base.get(params, GET_JSON_FIELDS, dispatch)
};

export default api;
