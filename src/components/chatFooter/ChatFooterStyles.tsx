import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const Container = styled.div`
  height: 62px;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #f0f2f5;
  display: flex;
  box-shadow: 2px 1px 3px 1px #0003;

  svg {
    width: 25px;
    height: 25px;
    color: #54656f;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;

  & svg {
    cursor: pointer;
  }
`;

export const Input = styled(TextareaAutosize)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  font-size: 14px;
  font-family: Arial, sans-serif;
  max-height: 3.5rem;

  /* Estilo do scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #888 #ccc;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ccc;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    cursor: auto;
  }

  &:focus {
    outline: none;
    border-color: #888;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;
