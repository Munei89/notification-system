import React from "react";
import NotificationsProvider from "./providers/NotificationsProvider";
import CreateNotification from "./views/CreateNotification";
import GlobalStyle from "./theme/globalStyles";
import "./App.css";

function App() {
  return (
    <NotificationsProvider>
      <GlobalStyle />
      <CreateNotification />
    </NotificationsProvider>
  );
}

export default App;
