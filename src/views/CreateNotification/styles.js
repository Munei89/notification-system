import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  gap: 1rem;
  width: 100%;
  max-width: 60%;
`;
export const FormHolder = styled.div`
  max-width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

export const Form = styled.div`
  max-width: 70%;
  width: 100%;
  padding: 50px 0;
`;

export const FormTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  margin-top: 25px;
  margin-bottom: 50px;
  color: #000000;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #d8d8d8;
  margin: 30px 0;
`;

export const ButtonWrapper = styled.div`
  text-align: right;

  button {
    margin-left: 16px;
  }
`;
