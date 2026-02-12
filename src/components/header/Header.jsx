import './header.css';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import Navbar from './Navbar';
import { useState } from 'react';
const Header = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    return ( <header className="header">
       <HeaderTop setToggle={setToggleNavbar}  toggle={toggleNavbar}/>
       <HeaderMiddle />
       <Navbar toggle={toggleNavbar} setToggle={setToggleNavbar} />
        </header> );
}
 
export default Header;