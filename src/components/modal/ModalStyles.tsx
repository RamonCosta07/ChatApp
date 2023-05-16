import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 9999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #777571;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #9DE0CC;
  padding: 3rem 4rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  
  ${CloseButton} {
  color: red;
  font-weight: bold;
}

  h2 {
    color: #008069;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  & svg {
    cursor: pointer;
    margin-left: 0.3rem;
    font-size: 20px;
  }

  & input {
    padding: 0.3rem;
    width: 15rem;
    border-radius: 5px;
    margin-bottom: 0.7rem;
    background-color: #9DE0CC;
    font-size: 14px;

    &::placeholder {
    color: #008069;
    font-weight: bold;
  }
  }
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: red;
`;

export const Success = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: green;
`;

export const CloseIcon = styled(MdClose)`
  width: 100%;
  height: 100%;
`;
