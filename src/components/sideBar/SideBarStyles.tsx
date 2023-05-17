import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  max-width: 435px;
  border-right: 1px solid #ddd;
  height: 100vh;
  position: relative;
`;

export const Menu = styled.div<{ open: boolean }>`
  z-index: 1;
  position: absolute;
  padding: 0;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  transform: translateX(0);
  transition: left 0.3s ease-in-out;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  background-color: #F0F2F5;
`;

export const CloseButton = styled.div<{ open: boolean }>`
  position: absolute;
  top: 75px;
  left: 30px;
  cursor: pointer;

  & svg{
    color: white;
    font-size: 32px;
  }

  
`;

export const HeaderMenu = styled.div`
  height: 115px;
  background-color: #008069;
  display: flex;
  align-items: center;

  & p{
    margin-left: 6.5rem;
    margin-top: 4.2rem;
    color: white;
    font-size: 22px;
    cursor: default;
  }
`
export const BodyMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Avatar = styled.img`
  width: 160px;
  height: 149px;
  border-radius: 50%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const UserInfo = styled.div`
  width: 100%;
  background-color: white;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .first-paragraph{
    color: #008069;
    margin-top: 16px;
    margin-left: 2.5rem;
    cursor: default;
  }

  & p{
    margin: 5px 40px;
  }
`

export const UserInfoData = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`

export const UserInfoDataIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoDataApp = styled.p`
  margin: 5px 40px;
  cursor: default;
`;

export const InfoApp = styled.p`
  padding: 1.5rem;
  text-align: center;
  color: #667790;
  cursor: default;
`