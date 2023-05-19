// CSS
import * as S from "./ChatHeaderStyles";
// Icons
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
// Interface
import { IChatHeaderProps } from "../../interfaces/Components/IChatHeader";
// React
import { useState, useRef, useEffect, useContext } from "react";
// Context
import { SearchContext } from "../../contexts/SearchContext";

const ChatHeader = ({ photoURL, name }: IChatHeaderProps) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [tempSearch, setTempSearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const { setSearchTerm } = useContext(SearchContext);

  useEffect(() => {
    if (showSearchInput) {
      searchInputRef.current?.focus();
    }
  }, [showSearchInput]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearch(e.target.value);
  };

  const handleSearchEnter = () => {
    if (tempSearch !== "") {
      setSearchTerm(tempSearch);
    }
  };

  const handleSearchIconClick = () => {
    setShowSearchInput((prev) => !prev);
    setTempSearch("");
    setSearchTerm("");
  };

  const handleSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchEnter();
    }
  };

  return (
    <S.Container>
      <S.UserInfo>
        {photoURL ? <S.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <S.NameContent>
          <S.Name>{name}</S.Name>
        </S.NameContent>
      </S.UserInfo>

      <S.Options>
        {!showSearchInput && <MdSearch onClick={handleSearchIconClick} />}
        <S.DisabledIcon>
          <MdMoreVert />
        </S.DisabledIcon>
        {showSearchInput && (
          <>
            <S.SearchContainer>
              <S.CloseIcon onClick={handleSearchIconClick} />
              <S.SearchInput
                type="text"
                placeholder="Enter para pesquisar"
                value={tempSearch}
                onChange={handleSearchChange}
                maxLength={18}
                ref={searchInputRef}
                onKeyUp={handleSearchKeyUp}
              />
            </S.SearchContainer>
          </>
        )}
      </S.Options>
    </S.Container>
  );
};

export default ChatHeader;
