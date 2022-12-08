import React, {useEffect, useState, useContext} from 'react';
import {SelectedIngredientsContext} from "../../context/SelectedIngredientsContextProvider";
import axios from "axios";
// import Ingredient from "../../components/Ingredient";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {

    const [ingredientsData, setIngredientsData] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const {selectedIngredient} = useContext(SelectedIngredientsContext);

    const ingredientNames = ingredientsData.map((ingredient) => {
        return ingredient.strIngredient1.toLowerCase();
    });

    const ingredientNamesSorted = ingredientNames.sort();

    const characterList = ["#", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let ingredientsList = [];
    let ingredientByCharacterList = [];
    const numberOfColumns = 3;
    const ingredientsIndexColumn = [];

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/list.php?i=list`);
                console.log(result.data.drinks);
                setIngredientsData(result.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    function createIngredientsList(character) {
        ingredientNamesSorted.forEach((ingredientName) => {
                if (character === "#" && ingredientName.charAt(0) >= "0" && ingredientName.charAt(0) <= "9") {
                    ingredientsList.push(
                        <li key={ingredientName}>
                            <button type="button" id={ingredientName} disabled={selectedIngredients.includes(ingredientName)} onClick={e => handleClick(e, ingredientName)}>{ingredientName}</button>
                        </li>
                    );
                } else if (ingredientName.charAt(0) === character) {
                    ingredientsList.push(
                         <li key={ingredientName}>
                            <button type="button" id={ingredientName} disabled={selectedIngredients.includes(ingredientName)} onClick={e => handleClick(e, ingredientName)}>{ingredientName}</button>
                        </li>
                    );
                }
            }
        )
    }

    function createIngredientByCharacterList(fromIndex, untilIndex) {
        for (const [i, character] of characterList.entries()) {
            if (i <= untilIndex && i >= fromIndex) {
                createIngredientsList(character);
                if (ingredientsList.length > 0) {
                    ingredientByCharacterList.push(
                        <li key={character}>
                            <h3>{character}</h3>
                            <ol>{ingredientsList}</ol>
                        </li>);
                    ingredientsList = [];
                }
            }
        }
    }

    function createIngredientsIndexColumn() {
        for (let i = 1; i <= numberOfColumns; i++) {
            if (i === 1) {
                createIngredientByCharacterList(0, 4);
            } else if (i === 2) {
                createIngredientByCharacterList(5, 15);
            } else if (i === 3) {
                createIngredientByCharacterList(16, 26);
            }
            ingredientsIndexColumn.push(
                <div key={i} className="ingredients-column">
                    <ol className="ingredients-list">{ingredientByCharacterList}</ol>
                </div>);
            ingredientByCharacterList = [];
        }
    }

    function handleClick(e, ingredientName) {
        e.preventDefault();
        console.log(ingredientName);
        setSelectedIngredients(selectedIngredients => [...selectedIngredients, ingredientName]);
        console.log(selectedIngredients);
    }

    createIngredientsIndexColumn();

    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <main className="main inner-container">
                    <h2>Ingredient Index</h2>
                    <h3>Cocktail recepten op een rijtje</h3>
                    <p>
                        Hieronder vind je meer dan 300 cocktailrecepten. Allemaal vers gemaakt en sommige zelfbedacht.
                        Allerlei soorten cocktailrecepten. Met vers fruit, zoet, zuur, sterk, kruidig, spicey.
                        Longdrinks,
                        martini’s, margarita’s, mojito’s, sours, gin tonics, you name it. Alle varianten staan ertussen
                        en we hebben ze allemaal zelf gemaakt en uitgeprobeerd. Er zit vast iets tussen waar je zin in
                        hebt.
                        Proost!
                    </p>
                    <h3>Nieuwe cocktail recepten</h3>
                    <p>
                        Deze pagina wordt constant bijgehouden met de nieuwste cocktail recepten, die we uiteraard ook
                        eerst
                        zelf
                        uitproberen. Als je zelf nog cocktail recepten hebt die jij de moeite waard vindt voor onze
                        website,
                        mail dan naar cocktails@cocktailicious.nl
                    </p>
                    <h3>Cocktails op alfabetische volgorde</h3>
                    <div className="ingredients-container outer-container">
                        {ingredientsIndexColumn}
                    </div>
                </main>
                {/*<Sidebar title="Selected Ingredients" selectedIngredients={selectedIngredients} />*/}
                <Sidebar title="Selected Ingredients" selectedIngredient={selectedIngredient} />
            </div>
            <Footer/>
        </>
    );
}

export default Home;