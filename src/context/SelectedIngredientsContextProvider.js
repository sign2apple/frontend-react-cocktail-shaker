import React, { createContext } from 'react';

//export const SelectedIngredientsContext =  createContext(null);
export const SelectedIngredientsContext =  createContext([]);

function SelectedIngredientsContextProvider({ children }){
    return (
        <SelectedIngredientsContext.Provider
            value={['Tequila', 'Gin']}>
            { children }
        </SelectedIngredientsContext.Provider>
    )
}

export default SelectedIngredientsContextProvider;