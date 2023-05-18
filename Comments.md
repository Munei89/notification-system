
# Notification System

This is a notification system built using ReactContext and hooks.


## Libraries

- styled-components - i used style-components throughout the project for styling because of its very good with working with react component. In this project it gave me flexibilty with add props to components and writng script lgic within them and making it reusable.

## Approach

Define the state and methods for the context.

``` const [notifications, setNotifications] = React.useState([]);```

Added logic int the ``notify`` function to get the data and built up the notification data and then setting it to the Notifications state.

```
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
  ```

  Added functionality to clear a notification/Notifications
  ```
    const clearNotifications = () => {
    setNotifications([]);
  };

  const clearNotification = (id) => {
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== id)
    );
  };

  ```

  And then pass this down to through the ```Context.Provider``` and dow to the ```<Notification />``` component.

```
 <Context.Provider
      value={{
        notify,
        notifications,
        clearNotifications,
        clearNotification,
      }}
    >
      {children}
      {notifications.length > 0 && (
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
      )}
    </Context.Provider>
```

In the ```<Notification />``` component i have done all the logic around how it should behave and interact.

Added basic logic to be able to switch between relevent icons dependant on the category. Add useInterval custom hook to handle setting/updating the width value fo the div.

```
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
  ```

  Added Timer functionality to to be able to ppause on haover and resume.

  ```
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
  ```

  Added useEffects to be able to clear Intervals or Timers. This was to prvent a lot of rerendering on the application.

  ```
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
```

The Component iself takes in props to assist with styling logic. We pass the catergory and width to be able to change its behaviour.

```
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
```

This logic is used within the styles to be able to get the right color and width i.e for the progress background we utilse category and width props for this.
```
export const StyledNotificationProgress = styled.div.attrs((props) => ({
  style: {
    width: props.width,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(props) => notificationProgressColors[props.category]};
  opacity: 1;
  transition: width 1s linear;
`;
```

For creating a notifaction i updated the current form to be more feasible and more modular.

- I grouped the form values in a sinngle useState.
- Added a handleChange method to save the values to local state.
- Extended on the random catergory picker
- Extended on the handle notify functiion

```
 const { notify, clearNotifications } = useNotifications();

  const [value, setValue] = useState({
    timeoutSeconds: 0,
    message: "A Message",
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
      timeout: value.timeoutSeconds * 1000,
    });
  };
```

I added some additional validation to the Number in put to prevent negative inputs.

```
 <Input
    label="Timeout"
    name="timeoutSeconds"
    type="number"
    min="0"
    onInput={(e) => {
        e.target.value =
        !!e.target.value && Math.abs(e.target.value) >= 0
            ? Math.abs(e.target.value)
            : null;
    }}
    value={value.timeoutSeconds.toString()}
    onChange={handleChange}
    />
```

### Additonal Features

#### Components

I added the following components for resuability:
- Button
- Input
- AppBar

#### Layout
Added layou wrappers for the app ```MainLayout```

#### Folder structure
Updated the folder structure to be more orgnised and clean.


## Conculsion 
The Notification system can be used to display notifications to the user. The system is highly customizable and can be extended to support different types of notifications.