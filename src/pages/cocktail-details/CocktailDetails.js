import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import '../../App.css';
// import Sidebar from '../../components/Sidebar';
import './CocktailDetails.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CocktailDetails() {

    const {id} = useParams();

    const [cocktailData, setCocktailData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${id}`);
                console.log(result.data);
                if (result.data.drinks !== null) {
                    console.log(result.data.drinks[0]);
                    setCocktailData(result.data.drinks[0]);
                }
            } catch (e) {
                console.error(e);
            }
        }
        if (id){
            fetchData();
        }
    }, [id]);

    function displayCocktailDetails(){
        if (cocktailData) {
            return (
                <>
                    <div className="left inner-container">
                        <figure>
                            <figcaption>{cocktailData.strDrink}</figcaption>
                            <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink}/>
                        </figure>
                    </div>
                    <div className="right inner-container">
                        <h4>Ingredients</h4>
                        <ul className="ingredients-list">
                            <li>{cocktailData.strMeasure1}{cocktailData.strIngredient1}</li>
                            <li>{cocktailData.strMeasure2}{cocktailData.strIngredient2}</li>
                            <li>{cocktailData.strMeasure3}{cocktailData.strIngredient3}</li>
                            <li>{cocktailData.strMeasure4}{cocktailData.strIngredient4}</li>
                            <li>{cocktailData.strMeasure5}{cocktailData.strIngredient5}</li>
                            <li>{cocktailData.strMeasure6}{cocktailData.strIngredient6}</li>
                            <li>{cocktailData.strMeasure7}{cocktailData.strIngredient7}</li>
                            <li>{cocktailData.strMeasure8}{cocktailData.strIngredient8}</li>
                            <li>{cocktailData.strMeasure9}{cocktailData.strIngredient9}</li>
                            <li>{cocktailData.strMeasure10}{cocktailData.strIngredient10}</li>
                            <li>{cocktailData.strMeasure11}{cocktailData.strIngredient11}</li>
                            <li>{cocktailData.strMeasure12}{cocktailData.strIngredient12}</li>
                            <li>{cocktailData.strMeasure13}{cocktailData.strIngredient13}</li>
                            <li>{cocktailData.strMeasure14}{cocktailData.strIngredient14}</li>
                            <li>{cocktailData.strMeasure15}{cocktailData.strIngredient15}</li>
                        </ul>
                        <h4>Instructions</h4>
                        <p>{cocktailData.strInstructions}</p>
                        <h4>{cocktailData.strAlcoholic}</h4>
                        <p>Yes</p>
                        <h4>Serve</h4>
                        <p>{cocktailData.strGlass}</p>
                    </div>
                </>
            );
        }
    }

    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <main className="main inner-container">
                    <h2>Cocktail Details</h2>
                    <div className="cocktail-container outer-container">

                        {displayCocktailDetails()}
                    </div>
                </main>
                {/*<Sidebar title="Ingredients"/>*/}
            </div>
            <Footer/>
        </>
    );
}

export default CocktailDetails;

