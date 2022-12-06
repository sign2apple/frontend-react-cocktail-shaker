import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Cocktails from "./pages/cocktails/Cocktails";
import CocktailDetails from "./pages/cocktail-details/CocktailDetails";

function App() {

    return (
        <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/cocktails/:ingredient" element={<Cocktails/>}/>*/}
                    <Route path="/cocktails/" element={<Cocktails/>}/>
                    <Route path="/cocktail-details" element={<CocktailDetails/>}/>
                </Routes>
        </>
    );
}

export default App;
