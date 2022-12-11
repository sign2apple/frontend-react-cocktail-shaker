import React, {createContext, useState} from 'react';

export const SelectedIngredientsContext = createContext(null);

function SelectedIngredientsContextProvider({children}) {
    const [ingredientName, setIngredientName] = useState();


    const selectedIngredients = {
        bla: bla,
        ingredientName: ingredientName,
    };

    function bla(ingredientName) {
        setIngredientName(ingredientName);
    }

    return (
        <SelectedIngredientsContext.Provider value={selectedIngredients}>
            {children}
        </SelectedIngredientsContext.Provider>
    )
}

export default SelectedIngredientsContextProvider;