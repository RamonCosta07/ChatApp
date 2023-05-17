// CSS
import * as S from "./SideBarStyles";
// Components
import SideBarChats from "../sideBarChats/SideBarChats";
import SideBarHeader from "../sideBarHeader/SideBarHeader";
import Menu from "../menu/Menu";
// Interface
interface ISideBarProps {
  setUserChat: React.Dispatch<React.SetStateAction<string | null>>;
  userChat: string;
}

const SideBar = ({ setUserChat, userChat }: ISideBarProps) => {
  return (
    <S.Container>
      <Menu />
      <SideBarHeader setUserChat={setUserChat} />
      <SideBarChats setUserChat={setUserChat} userChat={userChat} />
    </S.Container>
  );
};

export default SideBar;
