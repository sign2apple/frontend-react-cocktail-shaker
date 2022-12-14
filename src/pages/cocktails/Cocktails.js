import React, {useEffect, useState, useContext} from 'react';
import '../../App.css';
import './Cocktails.css';
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import {Link} from "react-router-dom";
import {SelectedIngredientsContext} from "../../context/SelectedIngredientsContextProvider";


function Cocktails() {

    const [cocktailsData, setCocktailsData] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {selectedIngredients} = useContext(SelectedIngredientsContext);

    useEffect(() => {
        async function fetchData() {
            try {
                toggleError(false);
                toggleLoading(true);
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${selectedIngredients}`);
                // const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/search.php?f=a`);
                // console.log(result.data.drinks);
                console.log(selectedIngredients);
                // console.log(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${selectedIngredients}`);
                setCocktailsData(result.data.drinks);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }
        if (selectedIngredients) {
            fetchData();
        }
    }, [selectedIngredients]);

    function showCocktails() {
        const temp = cocktailsData.toString()
        if (cocktailsData.length !== 0) {
            console.log(cocktailsData.length)

            if (temp !== "None Found") {
                return (
                    cocktailsData.map(({idDrink, strDrink, strDrinkThumb}) =>
                        <figure key={strDrink} className="cocktail inner-container">
                            <Link to={`/cocktail-details/${idDrink}`}>
                                <img src={strDrinkThumb} alt={strDrink}/>
                                <figcaption>{strDrink}</figcaption>
                            </Link>
                        </figure>
                    )
                )
            }
        }
    }

    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <main className="main inner-container">
                    <h2>Cocktails</h2>
                    <div className="cocktails-container outer-container">
                        {showCocktails()}
                        <div>
                            {error && <span>Het ophalen van de voorspellingen is mislukt. Probeer het opnieuw.</span>}
                            {loading && (<span>Loading...</span>)}
                        </div>
                    </div>
                </main>
                <Sidebar title="Selected Ingredients"/>
            </div>
            <Footer/>
        </>
    );
}

export default Cocktails;

