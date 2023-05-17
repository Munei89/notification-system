import { AppBarContainer, AppBarText } from "./AppBar.styles";
import Logo from "../../assets/svgs/Logo";

const AppBar = () => {
  return (
    <AppBarContainer>
      <Logo />
      <AppBarText>ORGANISER</AppBarText>
    </AppBarContainer>
  );
};

export default AppBar;
