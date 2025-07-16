import './Nav.css';
import '../../../index.css'
import { Button } from '../Button/Button.jsx';
import navLinks from '../../../DataBases/nav';
export function Nav() {
  return (
    <div className='navHolder'>
    <nav className='container'>
      <img src="https://smartcode.am/public/image/logo.png?v=1" alt="Smart code" className='logo'/>
    
        {navLinks.map((item) => (
          <a href="#" className='links'>
            {item}
          </a>
        ))}

       <Button content = 'Սկսել ուսումը' />
    </nav>

   
    </div>
  );
}
