import React from "react";

function Ingredient({ name }){

    return (
        <li>
            <button>{name}</button>
        </li>
    )
}

export default Ingredient;