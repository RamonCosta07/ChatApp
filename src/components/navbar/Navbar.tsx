import { NavbarMenu } from "./NavbarStyles";
interface IProps {
  handleSignOut: () => void;
}

const Navbar = ({ handleSignOut }: IProps) => {
  return (
    <NavbarMenu>
      <button onClick={handleSignOut}>Desconectar</button>
    </NavbarMenu>
  );
};

export default Navbar;
