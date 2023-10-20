import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
           <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
           </ul>
        </div>
 
    );
};

export default Header;