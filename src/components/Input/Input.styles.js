import styled from "styled-components";

export const StyledInput = styled.div`
  margin: 16px 0;
`;

export const StyledInputField = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 0 1rem;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  background: #ffffff;
  outline: none;
  border: 1px solid #dddddd;

  &:focus {
    border: 1px solid #273142;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 0 1rem;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  background: #ffffff;
  outline: none;
  border: 1px solid #dddddd;
  &:focus {
    border: 1px solid #273142;
  }
`;
export const StyledLabel = styled.label`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 0.5rem;
`;
