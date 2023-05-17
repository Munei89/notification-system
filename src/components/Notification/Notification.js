import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  NotificationItem,
  NotificationCentent,
  StyledClose,
  StyledNotificationProgress,
} from "./Notification.Styles";
import Success from "../../assets/svgs/Success";
import Warning from "../../assets/svgs/Warning";
import Info from "../../assets/svgs/Info";
import Close from "../../assets/svgs/Close";
import useInterval from "../../hooks/useInterval";

const Notification = ({
  message,
  category,
  id,
  clearNotification,
  timeout,
}) => {
  const [width, setWidth] = useState(0);
  const [notificationWidth, setNotificationWidth] = useState(0);
  const [delay, setDelay] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const timer = useRef();

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

  useInterval(
    useCallback(() => setWidth((oldWidth) => oldWidth + 1), [setWidth]),
    delay
  );

  const handleStartTimer = useCallback(() => {
    setDelay(10);
  }, [setDelay]);

  const handlePauseTimer = useCallback(() => {
    setDelay(null);
    setWidth(5);
    setIsHovered(true);
  }, [setDelay, setWidth, setIsHovered]);

  useEffect(() => {
    handleStartTimer();

    return handlePauseTimer;
  }, [handleStartTimer, handlePauseTimer]);

  useEffect(() => {
    if (timeout === 0 || !timeout) return;

    const currentTimeOut = setInterval(() => {
      clearNotification(id);
    }, timeout);

    if (isHovered) {
      clearInterval(currentTimeOut);
    }
    return () => {
      clearInterval(currentTimeOut);
    };
  }, [isHovered, clearNotification, id, timeout]);

  useEffect(() => {
    const handleResize = () => {
      setNotificationWidth(message.length * 8 + 16);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [message, setNotificationWidth]);

  return (
    <NotificationItem
      category={category}
      ref={timer}
      onMouseOver={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      width={notificationWidth ? notificationWidth : 400}
      onClick={() => {
        if (isHovered) {
          clearNotification(id);
        }
      }}
    >
      <StyledNotificationProgress width={width} category={category} />
      <NotificationCentent>
        {getIcon()}
        <p>{message}</p>
      </NotificationCentent>
      <StyledClose onClick={() => clearNotification(id)}>
        <Close />
      </StyledClose>
    </NotificationItem>
  );
};

export default Notification;
