import { styled } from "styled-components";

const notificationColors = {
  success: "#4caf50",
  info: "#2196f3",
  error: "#f44336",
};

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20;
  left: 20;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Notification = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  pointer-events: all;
  background-color: ${(props) => notificationColors[props.category]};
`;
