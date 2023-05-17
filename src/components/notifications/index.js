import React from "react";

const Context = React.createContext();

export function NotificationsProvider({ children }) {
  const notify = (message, options) => {
    console.log("TODO: implement");
  };

  const clearNotifications = () => {
    console.log("TODO: implement");
  };

  return (
    <Context.Provider
      value={{
        notify,
        clearNotifications,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useNotifications = () => React.useContext(Context);

export const NotificationsConsumer = Context.Consumer;
