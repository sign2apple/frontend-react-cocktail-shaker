import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {SelectedIngredientsContext} from "../context/SelectedIngredientsContextProvider";

function Sidebar({title}) {

    const { removeIngredient, selectedIngredients} = useContext(SelectedIngredientsContext);

    function handleClick(e, ingredientName) {
            removeIngredient(ingredientName);
    }

    return (
        <aside className="sidebar inner-container">
            <div className="sidebar-content">
                <h4>{title}</h4>
                <ul className="ingredients-list">
                    {selectedIngredients.map((selectedIngredient) => (
                        <li key={selectedIngredient}>
                            <input type="checkbox" checked onChange={e => handleClick(e, selectedIngredient)} />
                            {selectedIngredient}
                        </li>
                    ))}
                </ul>
                <Link to={`/cocktails/`}>
                    <button type="button">Search Cocktails</button>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar;