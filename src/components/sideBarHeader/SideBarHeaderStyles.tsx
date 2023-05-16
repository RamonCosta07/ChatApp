import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 59px;
  background-color: #f0f2f5;
  padding: 10px 16px;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #000;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`;

export const DisabledIcon = styled.span`
  pointer-events: none;
  opacity: 0.5;
`;

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
  background-color: #EFEAE2;
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
    color: #555555;
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
