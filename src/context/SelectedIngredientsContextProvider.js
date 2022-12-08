import React, { createContext } from 'react';

export const SelectedIngredientsContext =  createContext(null);

function SelectedIngredientsContextProvider({ children }){
    return (
        <SelectedIngredientsContext.Provider
            value={{ selectedIngredient: 'Tequila'}}>
            { children }
        </SelectedIngredientsContext.Provider>
    )
}

export default SelectedIngredientsContextProvider;