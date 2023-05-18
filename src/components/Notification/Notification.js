import React, { useCallback, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
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
  const [delay, setDelay] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const notiItem = useRef();
  const progressDiv = useRef();

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
    useCallback(() => setWidth((prev) => prev + 1), [setWidth]),
    delay
  );

  const startTimer = useCallback(() => {
    setDelay(10);
  }, [setDelay]);

  const pauseTimer = useCallback(() => {
    setDelay(null);
    setWidth(5);
    setIsHovered(true);
  }, [setDelay, setWidth, setIsHovered]);

  useEffect(() => {
    startTimer();

    return pauseTimer;
  }, [startTimer, pauseTimer]);

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
    if (
      progressDiv.current.clientWidth === notiItem.current.clientWidth &&
      !isHovered &&
      timeout !== 0
    ) {
      clearNotification(id);
      setDelay(null);
    }
    if (progressDiv.current.clientWidth === notiItem.current.clientWidth) {
      setDelay(null);
    }
  }, [
    width,
    clearNotification,
    pauseTimer,
    id,
    isHovered,
    timeout,
    notiItem,
    progressDiv,
  ]);

  return (
    <NotificationItem
      category={category}
      ref={notiItem}
      onMouseOver={pauseTimer}
      onMouseLeave={startTimer}
      width={(message.length * 16) / 0.5}
      onClick={() => {
        if (isHovered) {
          clearNotification(id);
        }
      }}
    >
      <StyledNotificationProgress
        ref={progressDiv}
        width={width}
        category={category}
      />
      {getIcon()}
      <NotificationCentent>
        <p>{message}</p>
      </NotificationCentent>
      <StyledClose onClick={() => clearNotification(id)}>
        <Close />
      </StyledClose>
    </NotificationItem>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  clearNotification: PropTypes.func.isRequired,
  timeout: PropTypes.number,
};
