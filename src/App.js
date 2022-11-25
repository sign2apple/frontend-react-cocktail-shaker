import React from 'react';
import Header from './components/Header';
import Ingredient from "./components/Ingredient";
import ingredients from "./data/ingredients.json";
import './App.css';
import Home from "./pages/Home";

function App() {

    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <Home/>
                <aside className="sidebar inner-container">
                    <div className="sidebar-content">
                        <h4>Ingredients</h4>
                        <ul className="ingredients-list">
                            <Ingredient name="Applejack"/>
                            <Ingredient name="Gin"/>
                            <Ingredient name="Dark rum"/>
                            <Ingredient name="Sweet Vermouth"/>
                            <Ingredient name="Strawberry schnapps"/>
                        </ul>
                    </div>
                </aside>
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
