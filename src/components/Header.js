import React from "react";
import { NavLink } from 'react-router-dom';

function Header(){

    return (
        <header id="header" className="outer-container">
            <div className="header-content inner-container">
                <h1>The Cocktail Shaker</h1>
                <nav className="navbar">
                    <ul className="nav-menu">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/">Ingredients</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/cocktails/">Cocktails</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;