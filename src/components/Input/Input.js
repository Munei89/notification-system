import {
  StyledInput,
  StyledLabel,
  StyledTextArea,
  StyledInputField,
} from "./Input.styles";
import PropTypes from "prop-types";

const Input = ({ id, label, name, type, onChange, value, ...rest }) => {
  return (
    <StyledInput type={type}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {type === "textarea" ? (
        <StyledTextArea
          {...rest}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
        />
      ) : (
        <StyledInputField
          {...rest}
          id={id}
          type={type}
          onChange={onChange}
          name={name}
          value={value}
        />
      )}
    </StyledInput>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string || PropTypes.number,
  label: PropTypes.string || PropTypes.number,
  type: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string || PropTypes.number,
};
