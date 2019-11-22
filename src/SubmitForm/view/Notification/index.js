import React from "react";

import { NotificationDiv } from "./styles";

const Notification = ({ type, message }) => {
  return <NotificationDiv type={type}>{message}</NotificationDiv>;
};

export default Notification;
