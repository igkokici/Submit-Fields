import { NOTIFICATION_REMOVE } from "../actionTypes";

export const removeNotification = () => {
  return dispatch => {
    dispatch({
      type: NOTIFICATION_REMOVE
    });
  };
};
