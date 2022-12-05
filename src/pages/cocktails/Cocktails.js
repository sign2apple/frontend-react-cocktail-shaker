import React from 'react';
import '../../App.css';
import './Cocktails.css';
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Cocktails() {

    return (
        <>
            <Header/>
            <div className="middle outer-container">
                <main class="main inner-container">
                    <div class="cocktails-container outer-container">
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg" alt="Bla"/>
                            <figcaption>Adios Amigos Cocktail</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg" alt="Bla"/>
                            <figcaption>Allies Cocktail</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg" alt="Bla"/>
                            <figcaption>Bermuda Highball</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg" alt="Bla"/>
                            <figcaption>Boomerang</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg" alt="Bla"/>
                            <figcaption>Dry Martini</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg" alt="Bla"/>
                            <figcaption>English Rose Cocktail</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/wsyqry1479298485.jpg" alt="Bla"/>
                            <figcaption>Lone Tree Cooler</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg" alt="Bla"/>
                            <figcaption>Martinez Cocktail</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg" alt="Bla"/>
                            <figcaption>Martini</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg" alt="Bla"/>
                            <figcaption>Queen Elizabeth</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg" alt="Bla"/>
                            <figcaption>Rose</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg" alt="Bla"/>
                            <figcaption>Turf Cocktail</figcaption>
                        </figure>
                        <figure class="cocktail inner-container">
                            <img src="https://www.thecocktaildb.com/images/media/drink/4u0nbl1504352551.jpg" alt="Bla"/>
                            <figcaption>Tuxedo Cocktail</figcaption>
                        </figure>
                    </div>
                </main>
                <Sidebar title="Ingredients" />
            </div>
            <Footer/>
        </>
    );
}

export default Cocktails;

