const Navbar = ({toggle , setToggle}) => {
    return ( <nav style={{left: toggle && "0"}} className="navbar">
        <ul className="navbar-links">
            <li onClick={()=>setToggle(prev => !prev)} className="navbar-link">Home</li>
            <li onClick={()=>setToggle(prev => !prev)} className="navbar-link">Authors</li>
            <li onClick={()=>setToggle(prev => !prev)} className="navbar-link">About us</li>
            <li onClick={()=>setToggle(prev => !prev)} className="navbar-link">Contact</li>
            <li onClick={()=>setToggle(prev => !prev)} className="navbar-link">Register</li>

        </ul>
    </nav> );
}
 
export default Navbar;