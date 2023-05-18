import styled, { css, keyframes } from "styled-components";

export const progressBar = (width) => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${width}%;
    }
`;

export const pulsate = keyframes`
   from {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: center center;
              transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
              transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
              transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
              transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
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
  top: 60px;
  right: 80px;
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
  padding: 16px 24px;
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

  svg {
    z-index: 1;
    animation: ${pulsate} 1.5s ease-in-out 4 both;
  }
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
  margin-left: 16px;
  margin-top: 8px;
`;

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
