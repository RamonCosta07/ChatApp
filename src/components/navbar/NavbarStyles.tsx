import styled from "styled-components";

export const NavbarMenu = styled.div`
  width: 10rem;
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;

  & button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;

    &:hover {
      background-color: #ced7e4d2;
    }
  }
`;
