import { NavLink, Link } from "react-router-dom"
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
        <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
                <NavLink to="/" style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : ""
                    };
                }}>Home</NavLink>
            </li>
                
            <li className={splitLocation[1] === "animals" ? "active" : ""}>
                <NavLink to="/animals" style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : ""
                    };
                }}>Sea Animals</NavLink>
            </li>
            <li className={splitLocation[1] === "quiz" ? "active" : ""}>
                <NavLink to="/quiz" style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : ""
                    };
                }}>Quiz</NavLink>
            </li>
            <li className={splitLocation[1] === "map" ? "active" : ""}>
                <NavLink to="/map" style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : ""
                    };
                }}>Map</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;