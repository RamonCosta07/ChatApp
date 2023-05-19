import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: fixed;
  top: 40px;
  right: 70px;
  display: flex;
  gap: 10px;
  z-index: 1;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
