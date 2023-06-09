// Firebase
import { auth, provider } from "../../services/firebase";
import { signInWithPopup } from "firebase/auth";
// Styles
import * as S from "./LoginStyles";
// Icons
import { FaGoogle } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Login = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>
          Bem-vindo ao ChatApp
          <BsWhatsapp />
        </S.Title>
        <S.Information>
          Faça login com sua conta Google para começar a usar
        </S.Information>
        <S.Button onClick={handleSignIn}>
          <FaGoogle />
          Login com Google
        </S.Button>
      </S.Container>
    </>
  );
};

export default Login;
