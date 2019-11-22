import axios from "axios";
import { NOTIFICATION_REMOVE } from "../SubmitForm/actionTypes";

const successHandler = (response, dispatch, actions) => {
  if (response.status === 200 || response.status === 201) {
    setTimeout(() => dispatch({ type: NOTIFICATION_REMOVE }), 2000);
    dispatch({ type: actions.success, payload: response.data });
  }
};

const failureHandler = (error, dispatch, actions) => {
  setTimeout(() => dispatch({ type: NOTIFICATION_REMOVE }), 3000);
  dispatch({ type: actions.failure });
};

const api = {
  get: (params = {}, actions, dispatch) => {
    let getUrl = `http://localhost:3000/data`;
    dispatch({ type: actions.request });
    return axios({
      url: getUrl,
      params: params
    })
      .then(function(response) {
        successHandler(response, dispatch, actions);
      })
      .catch(function(error) {
        failureHandler(error, dispatch, actions);
      });
  },
  post: (params, actions, dispatch) => {
    let postUrl = `http://localhost:3000/posts`;
    dispatch({ type: actions.request });
    axios({
      url: postUrl,
      data: params,
      method: "POST"
    })
      .then(function(response) {
        successHandler(response, dispatch, actions);
      })
      .catch(function(error) {
        failureHandler(error, dispatch, actions);
      });
  }
};

export default api;
