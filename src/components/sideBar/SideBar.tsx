import * as S from './SideBarStyles';
import SideBarChats from '../sideBarChats/SideBarChats';
import SideBarHeader from '../sideBarHeader/SideBarHeader';
// Interface
interface IProps {
  userChat: string;
  setUserChat: React.Dispatch<React.SetStateAction<string | null>>;
};

const SideBar= ({setUserChat, userChat}:IProps) => {
  return (
    <S.Container>
      <SideBarHeader setUserChat={setUserChat} />
      <SideBarChats setUserChat={setUserChat} userChat={userChat} />
    </S.Container>
  )
}

export default SideBar