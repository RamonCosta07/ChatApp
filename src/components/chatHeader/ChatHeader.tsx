// CSS
import * as S from "./ChatHeaderStyles";
// Icons
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
// Interface
interface IProps {
  photoURL?: string;
  name: string;
}

const ChatHeader = ({ photoURL, name }: IProps) => {
  return (
    <S.Container>
      <S.UserInfo>
        {photoURL ? <S.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <S.NameContent>
          <S.Name>{name}</S.Name>
        </S.NameContent>
      </S.UserInfo>

      <S.Options>
        <S.DisabledIcon>
          <MdSearch />
        </S.DisabledIcon>
        <S.DisabledIcon>
          <MdMoreVert />
        </S.DisabledIcon>
      </S.Options>
      
    </S.Container>
  );
};

export default ChatHeader;
