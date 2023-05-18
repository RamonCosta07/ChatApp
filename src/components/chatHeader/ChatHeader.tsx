// CSS
import * as S from "./ChatHeaderStyles";
// Icons
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
// Interface
import { IChatHeaderProps } from "../../interfaces/Components/IChatHeader";

const ChatHeader = ({ photoURL, name }: IChatHeaderProps) => {
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
