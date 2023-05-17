import * as S from "./SideBarStyles";
import SideBarChats from "../sideBarChats/SideBarChats";
import SideBarHeader from "../sideBarHeader/SideBarHeader";
import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import { MdArrowBack } from "react-icons/md";
// Firebase
import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsEmojiSunglassesFill, BsFillPencilFill } from "react-icons/bs";
// Interface
interface IProps {
  userChat: string;
  setUserChat: React.Dispatch<React.SetStateAction<string | null>>;
}

const SideBar = ({ setUserChat, userChat }: IProps) => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const [user] = useAuthState(auth);

  const handleToggleMenu = () => {
    toggleMenu();
  };

  return (
    <S.Container>
      <S.Menu open={isMenuOpen}>
        <S.HeaderMenu>
          <S.CloseButton open={isMenuOpen} onClick={handleToggleMenu}>
            <MdArrowBack title="Voltar" />
          </S.CloseButton>
          <p title="Perfil">Perfil</p>
        </S.HeaderMenu>
        <S.BodyMenu>
          <S.Avatar
            src={user?.photoURL?.toString()}
            title="Clique para mais informações"
          />

          <S.UserInfo>
            <div className="first-paragraph">Seu nome</div>
            <S.UserInfoData>
              <S.UserInfoDataApp>{user?.displayName}</S.UserInfoDataApp>
              <S.UserInfoDataIcon>
                <BsFillPencilFill />
              </S.UserInfoDataIcon>
            </S.UserInfoData>
          </S.UserInfo>

          <S.InfoApp>
            Esse não é o seu nome de usuário. Esse nome será exibido aos seus
            contatos. Poderá alterá-lo pelo Google.
          </S.InfoApp>
        </S.BodyMenu>

        <S.UserInfo>
          <div className="first-paragraph">Recado</div>
          <S.UserInfoData>
            <S.UserInfoDataApp title="Mensagem padrão">
              Hello <BsEmojiSunglassesFill />
            </S.UserInfoDataApp>
            <S.UserInfoDataIcon>
              <BsFillPencilFill />
            </S.UserInfoDataIcon>
          </S.UserInfoData>
        </S.UserInfo>
      </S.Menu>

      <SideBarHeader setUserChat={setUserChat} />
      <SideBarChats setUserChat={setUserChat} userChat={userChat} />
    </S.Container>
  );
};

export default SideBar;
