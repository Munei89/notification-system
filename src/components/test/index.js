import React, { useState } from "react";

import { Instructions } from "./../instructions";
import { useNotifications } from "./../notifications";

export function Test() {
  const { notify, clearNotifications } = useNotifications(); // TODO: implement

  const [timeoutSeconds, setTimeoutSeconds] = useState(0);
  const [message, setMessage] = useState("A message");
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div className="test">
      {showInstructions && <Instructions />}
      <label>
        Timeout
        <input
          type="number"
          value={timeoutSeconds}
          onChange={(e) => setTimeoutSeconds(parseInt(e.target.value))}
        ></input>
      </label>
      <label>
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>
      <button
        type="button"
        onClick={() => {
          const category = ["success", "error", "info"][
            Math.floor(Math.random() * 3)
          ];
          notify(message, { category, timeout: timeoutSeconds });
        }}
      >
        Notify
      </button>
      <button onClick={() => clearNotifications()}>Clear all</button>
      <button onClick={() => setShowInstructions(!showInstructions)}>
        {showInstructions ? "Hide" : "Show"} instructions
      </button>
    </div>
  );
}
