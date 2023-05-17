import AppBar from "../../components/AppBar";
import { MainLayoutContent } from "./MainLayout.styles";

const MainLayout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <MainLayoutContent>{children}</MainLayoutContent>
    </div>
  );
};

export default MainLayout;
