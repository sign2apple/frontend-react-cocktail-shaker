import React, {useEffect, useState} from 'react';
import '../../App.css';
import './Cocktails.css';
// import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";



function Cocktails() {

    const [cocktailsData, setCocktailsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/search.php?f=a`);
                // const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/list.php?i=list`);
                console.log(result.data.drinks);
                setCocktailsData(result.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);


    // const cocktailImages = cocktailsData.map((cocktail) => {
    //   return cocktail.strDrinkThumb;
    // });
    //
    // const cocktailNames = cocktailsData.map((cocktail) => {
    //     return cocktail.strDrink;
    // });


    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <main class="main inner-container">
                    <div class="cocktails-container outer-container">
                        {cocktailsData.map(({strDrink, strDrinkThumb}) =>
                            <figure className="cocktail inner-container">
                                <img src={strDrinkThumb} alt={strDrink}/>
                                <figcaption>{strDrink}</figcaption>
                            </figure>
                        )}
                    </div>
                </main>
                {/*<Sidebar title="Ingredients" />*/}
            </div>
            <Footer/>
        </>
    );
}

export default Cocktails;

