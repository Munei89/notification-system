import React from "react";
import Notification from "../Notification";
const Context = React.createContext();

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = React.useState([
    {
      id: 1,
      message: "Hello",
      category: "success",
    },
  ]);

  const notify = (message, options) => {
    console.log(message, options);
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
    };
    setNotifications((notifications) => [...notifications, notification]);
    if (options.timeout) {
      setTimeout(() => {
        setNotifications((notifications) =>
          notifications.filter((n) => n.id !== id)
        );
      }, options.timeout);
    }
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
      <div className="notifications">
        {notifications.map((n) => (
          <Notification
            key={n.id}
            message={n.message}
            id={n.id}
            category={n.category}
            clearNotification={clearNotification}
          />
        ))}
      </div>
    </Context.Provider>
  );
}

export const useNotifications = () => React.useContext(Context);

export const NotificationsConsumer = Context.Consumer;
