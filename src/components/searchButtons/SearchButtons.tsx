// CSS
import * as S from "./SearchButtonsStyles";
// Icons
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
// Interface
import { ISearchButtonsProps } from "../../interfaces/Components/ISearchButtons";

const SearchButtons: React.FC<ISearchButtonsProps> = ({
  handlePrevious,
  handleNext,
}) => {
  return (
    <S.ButtonContainer>
      <S.Button onClick={handlePrevious}>
        <MdArrowUpward />
      </S.Button>
      <S.Button onClick={handleNext}>
        <MdArrowDownward />
      </S.Button>
    </S.ButtonContainer>
  );
};

export default SearchButtons;
