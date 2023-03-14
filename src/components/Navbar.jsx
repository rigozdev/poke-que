import { NavLink } from "react-router-dom";



export default function Navbar() {
    return (
        <header className="header-container">
            <ul className="unorder-list-nav">
                <img src="pokeball.png" alt="" height="40px" width="40px" />
                <li className="">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-class" : "nav-items"}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/pokemones"
                        className={({ isActive }) => isActive ? "active-class" : "nav-items"}
                    >
                        Pokemones
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}