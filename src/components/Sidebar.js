import React from "react";
import { Link } from 'react-router-dom';

// function Sidebar({selectedIngredients,title}){
function Sidebar({selectedIngredient,title}){

    return (
        <aside className="sidebar inner-container">
            <div className="sidebar-content">
                <h4>{title}</h4>
                <ul className="ingredients-list">
                    {/*{selectedIngredients.map((selectedIngredient) => (*/}
                    {/*    <li key={selectedIngredient}>{selectedIngredient}</li>*/}
                    {/*))}*/}
                        <li key={selectedIngredient}>{selectedIngredient}</li>
                    {/*))}*/}
                </ul>
                    {/*<Link to={`/cocktails/${selectedIngredients[0]}`}>*/}
                    <Link to={`/cocktails/`}>
                         <button type="button">Search Cocktails</button>
                    </Link>
            </div>
        </aside>
    )
}

export default Sidebar;