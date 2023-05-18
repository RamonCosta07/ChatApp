// CSS
import { NavbarMenu } from "./NavbarStyles";
// Interface
import { INavbarProps } from '../../interfaces/Components/INavbar';

const Navbar = ({ handleSignOut }: INavbarProps) => {
  return (
    <NavbarMenu>
      <button onClick={handleSignOut}>Desconectar</button>
    </NavbarMenu>
  );
};

export default Navbar;
