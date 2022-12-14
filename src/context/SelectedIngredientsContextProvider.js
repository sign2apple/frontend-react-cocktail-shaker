import React, {createContext, useState} from 'react';

export const SelectedIngredientsContext = createContext(null);

function SelectedIngredientsContextProvider({children}) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    // const [updated, setUpdated] = useState(false);


    const ingredientsData = {
        addIngredient: addIngredient,
        removeIngredient: removeIngredient,
        selectedIngredients: selectedIngredients
    }

    function addIngredient(ingredientName){
        // setIngredientNames(ingredientNames);
        // setSelectedIngredients(selectedIngredients.push(ingredientName));
        setSelectedIngredients(ingredientNames => [...ingredientNames, ingredientName]);
        // setUpdated(true);
    }

    function removeIngredient(ingredientName){
        setSelectedIngredients((current) =>
            current.filter((selectedIngredient) => selectedIngredient !== ingredientName)
        );
        // setUpdated(true);
    }

    return (
        <SelectedIngredientsContext.Provider value={ingredientsData}>
            {/*{setSelectedIngredients.length === 0 ? children : <p>Loading...</p>}*/}
            {children}
        </SelectedIngredientsContext.Provider>
    )
}

export default SelectedIngredientsContextProvider;