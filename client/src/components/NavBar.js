import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return(
        <ul className="top-nav-bar">
            <li id="top-nav-bar-item" className={splitLocation[1] === "" ? "active" : ""}>
                <NavLink to="/">Home</NavLink>
            </li>
                
            <li id="top-nav-bar-item" className={splitLocation[1] === "animals" ? "active" : ""}>
                <NavLink to="/animals">Sea Animals</NavLink>
            </li>
            <li id="top-nav-bar-item" className={splitLocation[1] === "quiz" ? "active" : ""}>
                <NavLink to="/quiz">Quiz</NavLink>
            </li>
            <li id="top-nav-bar-item" className={splitLocation[1] === "map" ? "active" : ""}>
                <NavLink to="/map">Map</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;