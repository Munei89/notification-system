import React from "react";
import { NotificationsProvider } from "./components/NotificationsProvider";
import { Test } from "./components/test";
import GlobalStyle from "./theme/globalStyles";
import "./App.css";

function App() {
  return (
    <NotificationsProvider>
      <GlobalStyle />
      <Test />
    </NotificationsProvider>
  );
}

export default App;
