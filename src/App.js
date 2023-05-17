import React from "react";
import { NotificationsProvider } from "./components/NotificationsProvider";
import { Test } from "./components/test";
import "./App.css";

function App() {
  return (
    <NotificationsProvider>
      <div className="app">
        <Test />
      </div>
    </NotificationsProvider>
  );
}

export default App;
