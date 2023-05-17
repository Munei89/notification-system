import React, { useState } from "react";

import { Instructions } from "./../instructions";
import { useNotifications } from "./../NotificationsProvider";

export function Test() {
  const { notify, clearNotifications } = useNotifications();

  const [showInstructions, setShowInstructions] = useState(true);

  console.log(useNotifications());

  const [value, setValue] = useState({
    timeoutSeconds: 0,
    message: "A message",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const category = () => {
    const categories = ["success", "info", "error"];
    const index = Math.floor(Math.random() * categories.length);
    return categories[index];
  };

  const handleNotify = () => {
    notify(value.message, {
      category: category(),
      timeout: value.timeoutSeconds,
    });
  };

  return (
    <div className="test">
      {showInstructions && <Instructions />}
      <label>
        Timeout
        <input
          type="number"
          name="timeoutSeconds"
          value={value.timeoutSeconds}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Message
        <textarea
          value={value.message}
          name="message"
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="button" onClick={handleNotify}>
        Notify
      </button>
      <button onClick={() => clearNotifications()}>Clear all</button>
      <button onClick={() => setShowInstructions(!showInstructions)}>
        {showInstructions ? "Hide" : "Show"} instructions
      </button>
    </div>
  );
}
