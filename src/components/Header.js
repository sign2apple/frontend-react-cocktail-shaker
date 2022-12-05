import React from "react";
import { NavLink } from 'react-router-dom';

function Header(){

    return (
        <header id="header" className="outer-container">
            <div className="header-content inner-container">
                <h1>The Cocktail Shaker</h1>
                <nav className="navbar">
                    <ul className="nav-menu">
                        <li key="home">
                            <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/">Ingredients</NavLink>
                        </li>
                        <li key="cocktails">
                            <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/cocktails">Cocktails</NavLink>
                        </li>
                        <li key="cocktail-details">
                            <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/cocktail-details">Cocktail Details</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;