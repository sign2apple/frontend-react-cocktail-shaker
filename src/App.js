import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from "./pages/home/Home";
import Cocktails from "./pages/cocktails/Cocktails";
import CocktailDetails from "./pages/cocktail-details/CocktailDetails";

function App() {

    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <Home/>
                <Cocktails/>
                <CocktailDetails/>
            </div>
            <footer id="footer" className="outer-container">
                <div className="footer-content inner-container">
                    In opdracht van NOVI Hogeschool © 2022
                </div>
            </footer>
        </>
    )
        ;
}

export default App;
