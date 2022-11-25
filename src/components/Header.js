import React from "react";

function Header(){

    return (
        <header id="header" className="outer-container">
            <div className="header-content inner-container">
                <h1>The Cocktail Shaker</h1>
                <nav className="navbar">
                    <ul className="nav-menu">
                        <li>
                            <a className="nav-link" href="/">Ingredients</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/">Cocktails</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/">Cocktail Details</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;