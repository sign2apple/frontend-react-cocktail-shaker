import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {SelectedIngredientsContext} from "../context/SelectedIngredientsContextProvider";

// function Sidebar({selectedIngredients,title}){
function Sidebar({title}) {

    const {ingredientName} = useContext(SelectedIngredientsContext);

    return (
        <aside className="sidebar inner-container">
            <div className="sidebar-content">
                <h4>{title}</h4>
                <ul className="ingredients-list">
                    {/*{selectedIngredients.map((selectedIngredient) => (*/}
                    {/*    <li key={selectedIngredient}>{selectedIngredient}</li>*/}
                    {/*))}*/}
                    <li>{ingredientName}</li>
                </ul>
                <Link to={`/cocktails/`}>
                    <button type="button">Search Cocktails</button>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar;