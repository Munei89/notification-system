import React, { useEffect } from "react";
import Notification from "../Notification";
import { NotificationContainer } from "../Notification/Notification.Styles";
const Context = React.createContext();

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = React.useState([]);

  const notify = (message, options) => {
    options = {
      category: "success",
      timeout: options.timeout,
      ...options,
    };
    const id = Math.random().toString(36).substr(2, 9);
    const notification = {
      id,
      message,
      category: options.category,
      timeout: options.timeout,
    };
    setNotifications((notifications) => [...notifications, notification]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const clearNotification = (id) => {
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== id)
    );
  };

  return (
    <Context.Provider
      value={{
        notify,
        notifications,
        clearNotifications,
        clearNotification,
      }}
    >
      {children}
      <NotificationContainer>
        {notifications.map((n) => (
          <Notification
            key={n.id}
            message={n.message}
            id={n.id}
            category={n.category}
            timeout={n.timeout}
            clearNotification={clearNotification}
          />
        ))}
      </NotificationContainer>
    </Context.Provider>
  );
}

export const useNotifications = () => React.useContext(Context);

export const NotificationsConsumer = Context.Consumer;
