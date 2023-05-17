import {
    NotificationContainer
} from "./Notification.Styles";

const Notification = ({
    message,
    category,
}) => {
    return (
        <NotificationContainer>
            <Notification category={category}>
                {message}
            </Notification>
        </NotificationContainer>
    )
}

export default Notification;