import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5; /* Cor de fundo */
  font-family: Arial, sans-serif; /* Fonte */
`;

export const Button = styled.button`
  outline: none;
  font-size: 18px;
  padding: 14px 18px;
  cursor: pointer;
  background-color: #4285f4; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto */
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3367d6; /* Cor de fundo ao passar o mouse */
  }

  & svg{
    margin-right: 1rem;
    margin-top: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  & svg{
    margin-left: .5rem;
  }
`;

export const Information = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #4285f4;
  margin-bottom: 1.5rem;
  margin-top: -.5rem;
`;