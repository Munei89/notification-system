import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "#CC013E" : "none")};
  border-radius: 4px;
  color: ${(props) => (props.primary ? "#ffffff" : "#289DF4")};
  border: none;
  border-radius: 4px;
  width: ${(props) => (props.lg ? "212px" : "auto")};
  padding: 16px 1rem;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) => (props.primary ? "#d63364" : "none")};
    color: ${(props) => (props.primary ? "#ffffff" : "#289DF4")};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
