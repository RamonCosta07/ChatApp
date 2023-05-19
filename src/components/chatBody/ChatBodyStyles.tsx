import styled, { css, keyframes } from "styled-components";

interface IMessageContainerProps {
  highlighted: string;
}

export const Container = styled.div`
  position: relative;
  flex: 1;
  background-color: #efeae2;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

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

export const MessageContainer = styled.div<IMessageContainerProps>`

  ${({ highlighted }) =>
    highlighted === "true" &&
    css`
      background-color: yellow;
      color: #f50b8c;
      font-weight: bold;

      &.highlighted-animation {
        animation: ${keyframes`
          0% { background-color: yellow; }
          50% { background-color: #efeae2; }
          100% { background-color: yellow; }
        `} 1s linear infinite;
      }
    `}
`;
