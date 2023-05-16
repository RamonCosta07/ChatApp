import * as S from "./ModalStyles";
import { MdSearch } from "react-icons/md";
import { useRef, useEffect } from "react";
// Interface
interface IModal {
  isModalOpen: boolean;
  emailInput: string;
  setEmailInput: React.Dispatch<React.SetStateAction<string>>;
  handleCreateChat: () => void;
  errorMessage: string | null;
  successMessage: string | null;
  closeModal: () => void;
}

const Modal = ({
  isModalOpen,
  emailInput,
  setEmailInput,
  handleCreateChat,
  errorMessage,
  successMessage,
  closeModal,
}: IModal) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <h2>Adicionar Novo Chat</h2>
            <input
              ref={inputRef}
              type="text"
              value={emailInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCreateChat();
                }
              }}
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
    </>
  );
};

export default Modal;
