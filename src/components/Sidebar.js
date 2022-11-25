import React from "react";
import Ingredient from "./Ingredient";

function Sidebar(){

    return (
        <aside className="sidebar inner-container">
            <div className="sidebar-content">
                <h4>Ingredients</h4>
                <ul className="ingredients-list">
                    <Ingredient name="Applejack"/>
                    <Ingredient name="Gin"/>
                    <Ingredient name="Dark rum"/>
                    <Ingredient name="Sweet Vermouth"/>
                    <Ingredient name="Strawberry schnapps"/>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;