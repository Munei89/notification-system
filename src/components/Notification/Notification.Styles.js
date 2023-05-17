import styled, { css, keyframes } from "styled-components";

export const progressBar = (width) => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${width}%;
    }
`;

const notificationColors = {
  success: "#49C674",
  info: "#289DF4",
  error: "#CC013E",
};

const notificationProgressColors = {
  success: "#2DAC59",
  info: "#0F6FB5",
  error: "#A50233",
};

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 80px;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1rem;
  box-sizing: border-box;
`;

export const NotificationItem = styled.div`
  width: 100%;
  max-width: ${(props) => props.width}px;
  padding: 20px 24px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  pointer-events: all;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.category &&
    css`
      background: ${notificationColors[props.category]};
    `}
`;

export const NotificationCentent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  p {
    margin-left: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledClose = styled.div`
  cursor: pointer;
  z-index: 1;
`;

export const StyledNotificationProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(props) => notificationProgressColors[props.category]};
  opacity: 1;
  width: ${(props) => props.width}%;
  transition: width 1s linear;
`;
