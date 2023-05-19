// CSS
import * as S from "./SideBarStyles";
// Components
import SideBarChats from "../SideBarChats/SideBarChats";
import SideBarHeader from "../sideBarHeader/SideBarHeader";
import Menu from "../menu/Menu";

const SideBar = () => {
  return (
    <S.Container>
      <Menu />
      <SideBarHeader />
      <SideBarChats />
    </S.Container>
  );
};

export default SideBar;
