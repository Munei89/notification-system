import {
  StyledInput,
  StyledLabel,
  StyledTextArea,
  StyledInputField,
} from "./Input.styles";

const Input = ({ id, label, type, onChange, value }) => {
  return (
    <StyledInput type={type}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {type === "textarea" ? (
        <StyledTextArea id={id} onChange={onChange} value={value} />
      ) : (
        <StyledInputField
          id={id}
          type={type}
          onChange={onChange}
          value={value}
        />
      )}
    </StyledInput>
  );
};

export default Input;
