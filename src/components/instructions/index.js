import React from "react";

export function Instructions() {
  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <p>
        Implement a basic notifications system similar to the below video using
        React context and hooks. Feel free to use third party libraries for
        things like animation but don't just use an off the shelf notification
        package.
      </p>
      <p>
        Designs can be found in {` `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/file/VHIw8HjYOIQLXrMsYPmdkJ/Dev-Test-2021?node-id=0%3A1"
        >
          Figma
        </a>
        . You'll need to sign up for a free Figma account to fully access the
        project.
      </p>
      <div className="video">
        <div>
          <video controls>
            <source src="/example.webm" type="video/webm" />
            <source src="/example.mp4" type="video/mp4" />
          </video>
        </div>
        <a download href="/example.mp4">
          Download video
        </a>
      </div>
      <h3>API</h3>
      <p>Use the following api for the hook:</p>
      <pre>
        <code>{`const { notify, clearNotifications } = useNotifications();`}</code>
      </pre>
      <pre>
        <code>{`notify( message, options )`}</code>
      </pre>
      <p>The options object should have the following properties:</p>
      <ul>
        <li>
          category - A string (error, success, info) which modifies the styling
          of the notification.
        </li>

        <li>
          duration - An <b>optional</b> duration in seconds that determines how
          long the notification is displayed.
        </li>
      </ul>
      <p>
        A skeleton imlementation is provided in
        components/notifications/index.js
      </p>
      <h3>Requirements</h3>
      <div>
        <ul>
          <li>
            When the duration has passed the notification should be
            automatically dismissed.
          </li>
          <li>
            If the initial duration is 0, null or undefined the notification
            should only be dismissable by clicking on it.
          </li>
          <li>
            If the mouse cursor is hovering over a notification with a duration,
            the duration should be reset to the initial value, and restart the
            countdown when the mouse leaves the notification.
          </li>
          <li>
            Notifications should support variable width based on the content.
          </li>
        </ul>
      </div>
      <h3>Testing</h3>
      <p>Use the below form to test the implementation.</p>
    </div>
  );
}
