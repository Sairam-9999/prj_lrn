import { Link } from "react-router-dom";
import '../CSS/Navbar.css';

function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <Link to='/'>App Name</Link>
            </div>
            <div className="navbar-links">
                <Link to='/' className="navbar-link">Home</Link>
                <Link to='/favorites' className="navbar-link">My List</Link>
            </div>
        </nav>
        )
}

export default NavBar;