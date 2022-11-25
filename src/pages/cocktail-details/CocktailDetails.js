import React from 'react';
import '../../App.css';
import Sidebar from '../../components/Sidebar';
import './CocktailDetails.css';

function CocktailDetails() {

    return (
        <>
            <main className="main inner-container">
                <div className="cocktail-container outer-container">
                    <div className="left inner-container">
                        <figure>
                            <figcaption>Adios Amigos Cocktail</figcaption>
                            <img src="https://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg"
                                 alt="Adios Amigos Cocktail"/>
                        </figure>
                    </div>
                    <div className="right inner-container">
                        <h4>Ingredients</h4>
                        <ul className="ingredients-list">
                            <li>1 shot Rum</li>
                            <li>1/2 shot Dry Vermouth</li>
                            <li>1/2 shot Cognac</li>
                            <li>1/2 shot Gin</li>
                            <li>1/4 shot Fresh Lime Juice</li>
                            <li>1/4 shot Sugar Syrup</li>
                            <li>1/2 shot Water</li>
                        </ul>
                        <h4>Instructions</h4>
                        <p>Shake together all the ingredients and strain into a cold glass.</p>
                        <h4>Alcoholic</h4>
                        <p>Yes</p>
                        <h4>Serve</h4>
                        <p>Martini Glass</p>
                    </div>
                </div>
            </main>
            <Sidebar/>
        </>
    );
 }

export default CocktailDetails;

