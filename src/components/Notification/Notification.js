import React from "react";
import {
  NotificationContainer,
  NotificationItem,
  NotificationCentent,
  StyledClose,
} from "./Notification.Styles";
import Success from "../../assets/svgs/Success";
import Warning from "../../assets/svgs/Warning";
import Info from "../../assets/svgs/Info";
import Close from "../../assets/svgs/Close";

const Notification = ({ message, category }) => {
  const getIcon = () => {
    switch (category) {
      case "success":
        return <Success />;
      case "warning":
        return <Warning />;
      case "info":
        return <Info />;
      default:
        return <Success />;
    }
  };

  return (
    <NotificationContainer>
      <NotificationItem $category={category}>
        <NotificationCentent>
          {getIcon()}
          <p>{message}</p>
        </NotificationCentent>
        <StyledClose>
          <Close onClick={() => console.log("close")} />
        </StyledClose>
      </NotificationItem>
    </NotificationContainer>
  );
};

export default Notification;
