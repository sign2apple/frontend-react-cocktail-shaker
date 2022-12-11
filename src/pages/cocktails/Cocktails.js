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
    const {ingredientName} = useContext(SelectedIngredientsContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${ingredientName}`);
                // const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/search.php?f=a`);
                console.log(result.data.drinks);
                // console.log(selectedIngredients);
                setCocktailsData(result.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }
        if (ingredientName) {
            fetchData();
        }
    }, [ingredientName]);

    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <main className="main inner-container">
                    <div className="cocktails-container outer-container">
                        {cocktailsData.map(({idDrink, strDrink, strDrinkThumb}) =>

                            <figure key={strDrink} className="cocktail inner-container">
                                <Link to={`/cocktail-details/${idDrink}`}>
                                <img src={strDrinkThumb} alt={strDrink}/>
                                <figcaption>{strDrink}</figcaption>
                                </Link>
                            </figure>

                        )}
                    </div>
                </main>
                <Sidebar title="Selected Ingredients" />
            </div>
            <Footer/>
        </>
    );
}

export default Cocktails;

