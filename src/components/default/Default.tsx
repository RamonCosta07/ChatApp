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
        Agora você pode enviar mensagem sem ter que usar o seu número de celular. Que
        demais!
      </S.Info>
    </S.Container>
  );
};

export default Default;
