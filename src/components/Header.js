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
                            <NavLink className="nav-link" to="/">Ingredients</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/cocktails">Cocktails</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/cocktail-details">Cocktail Details</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;