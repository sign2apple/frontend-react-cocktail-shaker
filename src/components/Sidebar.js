import React from "react";

function Sidebar({selectedIngredients,title}){

    return (
        <aside className="sidebar inner-container">
            <div className="sidebar-content">
                <h4>{title}</h4>
                <ul className="ingredients-list">
                    {selectedIngredients.map((selectedIngredient) => (
                        <li key={selectedIngredient}>{selectedIngredient}</li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;