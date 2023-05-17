import styled, { css } from "styled-components";

const notificationColors = {
  success: "#49C674",
  info: "#289DF4",
  error: "#CC013E",
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
  max-width: 400px;
  padding: 20px 24px;
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

  ${(props) =>
    props.$category &&
    css`
      background: ${notificationColors[props.$category]};
    `}
`;

export const NotificationCentent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-left: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledClose = styled.div`
  cursor: pointer;
`;
