import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../../App.css';
// import Sidebar from '../../components/Sidebar';
import './CocktailDetails.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CocktailDetails() {

    const [cocktailData, setCocktailData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=11007`);
                console.log(result.data.drinks);
                setCocktailData(result.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);


    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <main className="main inner-container">
                    <div className="cocktail-container outer-container">
                        {cocktailData.map(({
                                               strDrink,
                                               strAlcoholic,
                                               strGlass,
                                               strInstructions,
                                               strDrinkThumb,
                                               strIngredient1,
                                               strIngredient2,
                                               strIngredient3,
                                               strIngredient4,
                                               strIngredient5,
                                               strIngredient6,
                                               strIngredient7,
                                               strIngredient8,
                                               strIngredient9,
                                               strIngredient10,
                                               strIngredient11,
                                               strIngredient12,
                                               strIngredient13,
                                               strIngredient14,
                                               strIngredient15,
                                               strMeasure1,
                                               strMeasure2,
                                               strMeasure3,
                                               strMeasure4,
                                               strMeasure5,
                                               strMeasure6,
                                               strMeasure7,
                                               strMeasure8,
                                               strMeasure9,
                                               strMeasure10,
                                               strMeasure11,
                                               strMeasure12,
                                               strMeasure13,
                                               strMeasure14,
                                               strMeasure15
                                           }) =>
                            <>
                                <div className="left inner-container">
                                    <figure>
                                        <figcaption>{strDrink}</figcaption>
                                        <img src={strDrinkThumb} alt={strDrink}/>
                                    </figure>
                                </div>
                                <div className="right inner-container">
                                    <h4>Ingredients</h4>
                                    <ul className="ingredients-list">
                                        <li>{strMeasure1}{strIngredient1}</li>
                                        <li>{strMeasure2}{strIngredient2}</li>
                                        <li>{strMeasure3}{strIngredient3}</li>
                                        <li>{strMeasure4}{strIngredient4}</li>
                                        <li>{strMeasure5}{strIngredient5}</li>
                                        <li>{strMeasure6}{strIngredient6}</li>
                                        <li>{strMeasure7}{strIngredient7}</li>
                                        <li>{strMeasure8}{strIngredient8}</li>
                                        <li>{strMeasure9}{strIngredient9}</li>
                                        <li>{strMeasure10}{strIngredient10}</li>
                                        <li>{strMeasure11}{strIngredient11}</li>
                                        <li>{strMeasure12}{strIngredient12}</li>
                                        <li>{strMeasure13}{strIngredient13}</li>
                                        <li>{strMeasure14}{strIngredient14}</li>
                                        <li>{strMeasure15}{strIngredient15}</li>
                                    </ul>
                                    <h4>Instructions</h4>
                                    <p>{strInstructions}</p>
                                    <h4>{strAlcoholic}</h4>
                                    <p>Yes</p>
                                    <h4>Serve</h4>
                                    <p>{strGlass}</p>
                                </div>
                            </>
                        )}
                    </div>
                </main>
                {/*<Sidebar title="Ingredients"/>*/}
            </div>
            <Footer/>
        </>
    );
}

export default CocktailDetails;

