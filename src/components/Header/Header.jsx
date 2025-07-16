import './Header.css';
import { Nav } from './Nav/Nav';

import { Headerinfo } from './HeaderInfo/Headerinfo';
function Header() {
  return (
    <header>
      <Nav />
      <Headerinfo />
    </header>
  );
}

export default Header;
