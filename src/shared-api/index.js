import axios from "axios";

const successHandler = (response, dispatch, actions) => {
  if (response.data.success) {
    dispatch({ type: actions.success, payload: response.data.data });
  }
};

const failureHandler = (error, dispatch, actions) => {
  dispatch({ type: actions.failure, message: error.response.data.message });
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
    let postUrl = `http://localhost:3000/success`;
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
