// React
import { useState, useEffect } from "react";
// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import { doc, setDoc } from "firebase/firestore";
// Pages
import Login from "./pages/Login/Login";
// Components
import SideBar from "./components/sideBar/SideBar";
import Loading from "./components/loading/Loading";
import Chat from "./components/chat/Chat";
// CSS
import { Container } from "./styles/app";

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState<string>("");

  useEffect(() => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      setDoc(userRef, {
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);
  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <Container>
      <SideBar
        setUserChat={(chat) => setUserChat(chat as string)}
        userChat={userChat}
      />
      <Chat userChat={userChat} />
    </Container>
  );
}

export default App;
