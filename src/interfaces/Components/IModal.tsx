export interface IModal {
  isModalOpen: boolean;
  emailInput: string;
  setEmailInput: React.Dispatch<React.SetStateAction<string>>;
  handleCreateChat: () => void;
  errorMessage: string | null;
  successMessage: string | null;
  closeModal: () => void;
}