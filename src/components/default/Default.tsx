// CSS
import * as S from "./DefaultStyles";
// Icon
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <S.Container>
      <MdMessage />
      <S.Title>ChatApp</S.Title>
      <S.Info>
        Você pode enviar mensagem sem ter que manter o celular conectado. Que
        demais!
      </S.Info>
    </S.Container>
  );
};

export default Default;
