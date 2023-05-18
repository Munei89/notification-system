import { StyledButton } from "./Button.styles";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
