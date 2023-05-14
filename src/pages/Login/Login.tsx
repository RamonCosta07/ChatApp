// Firebase
import { auth, provider } from "../../services/firebase";
import { signInWithPopup } from "firebase/auth";
// Styles
import { Container, Button } from "./LoginStyles";

const Login = () => {
  const handleSignIn = async () => {
    try {
      const userCred = await signInWithPopup(auth, provider);
      const user = userCred.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Button onClick={handleSignIn}>Login com Google</Button>
    </Container>
  );
};

export default Login;
