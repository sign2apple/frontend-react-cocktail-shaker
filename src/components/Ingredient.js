import React from "react";

function Ingredient({name}){

    function logIngredient(e){
        e.preventDefault();
        console.log(name);
    }

    return (

        <li>
            <a href="/" onClick={logIngredient}>{name}</a>
        </li>

    )
}

export default Ingredient;