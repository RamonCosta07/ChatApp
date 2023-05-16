// Hooks
import { useState } from "react";
// CSS
import * as S from "./SideBarHeaderStyles";
// Icons
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from "react-icons/md";
// E-mail validator
import * as EmailValidator from "email-validator";
// Firebase
import { auth, db } from "../../services/firebase";
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
// Interface
interface ISideBarHeaderProps {
  setUserChat: React.Dispatch<React.SetStateAction<string | null>>;
}

const SideBarHeader = ({ setUserChat }: ISideBarHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [user] = useAuthState(auth);
  const chatRef = collection(db, "chats");
  const refChat = query(chatRef, where("users", "array-contains", user?.email));
  const [chatSnapshot] = useCollection(refChat);

  const handleCreateChat = async () => {
    if (!EmailValidator.validate(emailInput)) {
      setErrorMessage("E-mail inválido!");
    } else if (emailInput === user?.email) {
      setErrorMessage("O e-mail deve ser diferente do seu");
    } else if (chatExists(emailInput)) {
      setErrorMessage("Chat já existe!");
    } else {
      const userExists = await checkUserExists(emailInput);
      if (!userExists) {
        setErrorMessage("Usuário não registrado no sistema!");
      } else {
        await addDoc(chatRef, {
          users: [user?.email, emailInput],
        });
        setSuccessMessage("Cadastrado com sucesso");
        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    }
  };

  const checkUserExists = async (email: string) => {
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", email)
    );
    const userSnapshot = await getDocs(userQuery);
    return !userSnapshot.empty;
  };

  const chatExists = (emailChat: string) => {
    const chat = chatSnapshot?.docs.find((chat) =>
      chat.data().users.includes(emailChat)
    );
    return chat != null && chat.data().users.length > 0 ? chat : null;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmailInput("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <S.Container>
      <S.Avatar
        src={user?.photoURL?.toString()}
        onClick={() => {
          auth.signOut();
          setUserChat(null);
        }}
        title="Clique para fazer logout"
      />
      <S.Options>
        <S.DisabledIcon>
          <MdDonutLarge />
        </S.DisabledIcon>
        <MdChat onClick={openModal} title="Adicionar chat" />
        <S.DisabledIcon>
          <MdMoreVert />
        </S.DisabledIcon>
      </S.Options>

      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <h2>Adicionar Novo Chat</h2>
            <input
              type="text"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Digite o e-mail"
            />
            <MdSearch onClick={handleCreateChat} title="Pesquisar e-mail" />
            {errorMessage && <S.Error>{errorMessage}</S.Error>}
            {successMessage && <S.Success>{successMessage}</S.Success>}
            {!successMessage && (
              <S.CloseButton onClick={closeModal} title="Fechar modal">
                <S.CloseIcon />
              </S.CloseButton>
            )}
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default SideBarHeader;
