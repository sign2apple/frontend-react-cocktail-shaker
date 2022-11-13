import React from 'react';
import Header from './components/Header';
import Ingredient from "./components/Ingredient";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="middle outer-container">
        <main className="main inner-container">
          <h2>Ingredient Index</h2>
          <h3>Cocktail recepten op een rijtje</h3>
          <p>
            Hieronder vind je meer dan 300 cocktailrecepten. Allemaal vers gemaakt en sommige zelfbedacht.
            Allerlei soorten cocktailrecepten. Met vers fruit, zoet, zuur, sterk, kruidig, spicey. Longdrinks,
            martini’s, margarita’s, mojito’s, sours, gin tonics, you name it. Alle varianten staan ertussen
            en we hebben ze allemaal zelf gemaakt en uitgeprobeerd. Er zit vast iets tussen waar je zin in hebt. Proost!
          </p>
          <h3>Nieuwe cocktail recepten</h3>
          <p>
            Deze pagina wordt constant bijgehouden met de nieuwste cocktail recepten, die we uiteraard ook eerst zelf
            uitproberen. Als je zelf nog cocktail recepten hebt die jij de moeite waard vindt voor onze website,
            mail dan naar cocktails@cocktailicious.nl
          </p>
          <h3>Cocktails op alfabetische volgorde</h3>
          <div className="ingredients-container outer-container">
            <div className="ingredients-column inner-container">
              <ol className="ingredients-list">
                <li>
                  <h3>#</h3>
                  <ol>
                    <Ingredient name="151 proof rum" />
                    <Ingredient name="7-up" />
                  </ol>
                </li>
                <li>
                  <h3>a</h3>
                  <ol>
                    <Ingredient name="absinthe" />
                    <Ingredient name="absolut citron" />
                    <Ingredient name="absolut kurant" />
                    <Ingredient name="absolut peppar" />
                    <Ingredient name="absolut vodka" />
                    <Ingredient name="advocaat" />
                    <Ingredient name="aejo rum" />
                    <Ingredient name="aftershock" />
                    <Ingredient name="agave syrup" />
                    <Ingredient name="ale" />
                    <Ingredient name="allspice" />
                    <Ingredient name="allspice dram" />
                    <Ingredient name="almond" />
                    <Ingredient name="almond flavoring" />
                    <Ingredient name="amaretto" />
                    <Ingredient name="amaro montenegro" />
                    <Ingredient name="angelica root" />
                    <Ingredient name="angostura bitters" />
                    <Ingredient name="anis" />
                    <Ingredient name="anise" />
                    <Ingredient name="anisette" />
                    <Ingredient name="aperol" />
                    <Ingredient name="apfelkorn" />
                    <Ingredient name="apple" />
                    <Ingredient name="apple brandy" />
                    <Ingredient name="apple cider" />
                    <Ingredient name="apple juice" />
                    <Ingredient name="apple schnapps" />
                    <Ingredient name="applejack" />
                    <Ingredient name="apricot" />
                    <Ingredient name="apricot brandy" />
                    <Ingredient name="apricot nectar" />
                    <Ingredient name="aquavit" />
                    <Ingredient name="arrack" />
                    <Ingredient name="asafoetida" />
                    <Ingredient name="averna" />
                    <Ingredient name="añejo rum" />
                  </ol>
                </li>
                <li>
                  <h3>b</h3>
                  <ol>
                    <Ingredient name="bacardi" />
                    <Ingredient name="bacardi limon" />
                    <Ingredient name="baileys irish cream" />
                    <Ingredient name="banana" />
                    <Ingredient name="banana liqueur" />
                    <Ingredient name="banana rum" />
                    <Ingredient name="banana syrup" />
                    <Ingredient name="barenjager" />
                    <Ingredient name="basil" />
                    <Ingredient name="beef stock" />
                    <Ingredient name="beer" />
                    <Ingredient name="benedictine" />
                    <Ingredient name="berries" />
                    <Ingredient name="bitter lemon" />
                    <Ingredient name="bitters" />
                    <Ingredient name="black pepper" />
                    <Ingredient name="black rum" />
                    <Ingredient name="black sambuca" />
                    <Ingredient name="blackberries" />
                    <Ingredient name="blackberry brandy" />
                    <Ingredient name="blackberry schnapps" />
                    <Ingredient name="blackcurrant cordial" />
                    <Ingredient name="blackcurrant schnapps" />
                    <Ingredient name="blackcurrant squash" />
                    <Ingredient name="blackstrap rum" />
                    <Ingredient name="blended scotch" />
                    <Ingredient name="blended whiskey" />
                    <Ingredient name="blood orange" />
                    <Ingredient name="blue curacao" />
                    <Ingredient name="blue maui" />
                    <Ingredient name="blueberries" />
                    <Ingredient name="blueberry schnapps" />
                    <Ingredient name="bourbon" />
                    <Ingredient name="brandy" />
                    <Ingredient name="brown sugar" />
                    <Ingredient name="butter" />
                    <Ingredient name="butterscotch schnapps" />
                  </ol>
                </li>
                  <li>
                    <h3>c</h3>
                    <ol>
                      <Ingredient name="cachaca" />
                      <Ingredient name="calvados" />
                      <Ingredient name="campari" />
                      <Ingredient name="canadian whisky" />
                      <Ingredient name="candy" />
                      <Ingredient name="cantaloupe" />
                      <Ingredient name="caramel coloring" />
                      <Ingredient name="caramel sauce" />
                      <Ingredient name="carbonated soft drink" />
                      <Ingredient name="carbonated water" />
                      <Ingredient name="cardamom" />
                      <Ingredient name="cayenne pepper" />
                      <Ingredient name="celery" />
                      <Ingredient name="celery salt" />
                      <Ingredient name="chambord raspberry liqueur" />
                      <Ingredient name="champagne" />
                      <Ingredient name="chareau" />
                      <Ingredient name="cherries" />
                      <Ingredient name="cherry" />
                      <Ingredient name="cherry brandy" />
                      <Ingredient name="cherry cola" />
                      <Ingredient name="cherry grenadine" />
                      <Ingredient name="cherry heering" />
                      <Ingredient name="cherry juice" />
                      <Ingredient name="cherry liqueur" />
                      <Ingredient name="chocolate" />
                      <Ingredient name="chocolate ice-cream" />
                      <Ingredient name="chocolate liqueur" />
                      <Ingredient name="chocolate milk" />
                      <Ingredient name="chocolate sauce" />
                      <Ingredient name="chocolate syrup" />
                      <Ingredient name="cider" />
                      <Ingredient name="cinnamon" />
                      <Ingredient name="cinnamon schnapps" />
                      <Ingredient name="cinnamon whisky" />
                      <Ingredient name="citrus vodka" />
                      <Ingredient name="clamato juice" />
                      <Ingredient name="cloves" />
                      <Ingredient name="club soda" />
                      <Ingredient name="coca-cola" />
                      <Ingredient name="cocchi americano" />
                      <Ingredient name="cocktail onion" />
                      <Ingredient name="cocoa powder" />
                      <Ingredient name="coconut cream" />
                      <Ingredient name="coconut liqueur" />
                      <Ingredient name="coconut milk" />
                      <Ingredient name="coconut rum" />
                      <Ingredient name="coconut syrup" />
                      <Ingredient name="coffee" />
                      <Ingredient name="coffee brandy" />
                      <Ingredient name="coffee liqueur" />
                      <Ingredient name="cognac" />
                      <Ingredient name="cointreau" />
                      <Ingredient name="cola" />
                      <Ingredient name="cold water" />
                      <Ingredient name="condensed milk" />
                      <Ingredient name="coriander" />
                      <Ingredient name="corn syrup" />
                      <Ingredient name="cornstarch" />
                      <Ingredient name="corona" />
                      <Ingredient name="cranberries" />
                      <Ingredient name="cranberry juice" />
                      <Ingredient name="cranberry liqueur" />
                      <Ingredient name="cranberry vodka" />
                      <Ingredient name="cream" />
                      <Ingredient name="cream of coconut" />
                      <Ingredient name="cream sherry" />
                      <Ingredient name="cream soda" />
                      <Ingredient name="creme de almond" />
                      <Ingredient name="creme de banane" />
                      <Ingredient name="creme de cacao" />
                      <Ingredient name="creme de cassis" />
                      <Ingredient name="creme de mure" />
                      <Ingredient name="creme de noyaux" />
                      <Ingredient name="creme de violette" />
                      <Ingredient name="creme fraiche" />
                      <Ingredient name="crown royal" />
                      <Ingredient name="crystal light" />
                      <Ingredient name="cucumber" />
                      <Ingredient name="cumin powder" />
                      <Ingredient name="cumin seed" />
                      <Ingredient name="curacao" />
                      <Ingredient name="cynar" />
                    </ol>
                  </li>
                  <li>
                    <h3>d</h3>
                    <ol>
                      <Ingredient name="daiquiri mix" />
                      <Ingredient name="dark chocolate" />
                      <Ingredient name="dark creme de cacao" />
                      <Ingredient name="dark rum" />
                      <Ingredient name="dark soy sauce" />
                      <Ingredient name="demerara sugar" />
                      <Ingredient name="diet coke" />
                      <Ingredient name="dr. pepper" />
                      <Ingredient name="drambuie" />
                      <Ingredient name="dried oregano" />
                      <Ingredient name="dry curacao" />
                      <Ingredient name="dry vermouth" />
                      <Ingredient name="dubonnet blanc" />
                      <Ingredient name="dubonnet rouge" />
                    </ol>
                  </li>
              </ol>
            </div>
            <div className="ingredients-column">
              <ol className="ingredients-list">
                <li>
                  <h3>e</h3>
                  <ol>
                    <Ingredient name="egg" />
                    <Ingredient name="egg white" />
                    <Ingredient name="egg yolk" />
                    <Ingredient name="eggnog" />
                    <Ingredient name="elderflower cordial" />
                    <Ingredient name="erin cream" />
                    <Ingredient name="espresso" />
                    <Ingredient name="everclear" />
                  </ol>
                </li>
                <li>
                  <h3>f</h3>
                  <ol>
                    <Ingredient name="falernum" />
                    <Ingredient name="fanta" />
                    <Ingredient name="fennel seeds" />
                    <Ingredient name="fernet-branca" />
                    <Ingredient name="figs" />
                    <Ingredient name="firewater" />
                    <Ingredient name="flaked almonds" />
                    <Ingredient name="food coloring" />
                    <Ingredient name="forbidden fruit" />
                    <Ingredient name="frangelico" />
                    <Ingredient name="fresca" />
                    <Ingredient name="fresh basil" />
                    <Ingredient name="fresh lemon juice" />
                    <Ingredient name="fresh lime juice" />
                    <Ingredient name="fresh mint" />
                    <Ingredient name="fruit" />
                    <Ingredient name="fruit juice" />
                    <Ingredient name="fruit punch" />
                  </ol>
                </li>
                <li>
                  <h3>g</h3>
                  <ol>
                    <Ingredient name="galliano" />
                    <Ingredient name="garlic sauce" />
                    <Ingredient name="gatorade" />
                    <Ingredient name="gin" />
                    <Ingredient name="ginger" />
                    <Ingredient name="ginger ale" />
                    <Ingredient name="ginger beer" />
                    <Ingredient name="ginger syrup" />
                    <Ingredient name="glycerine" />
                    <Ingredient name="godiva liqueur" />
                    <Ingredient name="gold rum" />
                    <Ingredient name="gold tequila" />
                    <Ingredient name="goldschlager" />
                    <Ingredient name="grain alcohol" />
                    <Ingredient name="grand marnier" />
                    <Ingredient name="granulated sugar" />
                    <Ingredient name="grape juice" />
                    <Ingredient name="grape soda" />
                    <Ingredient name="grapefruit juice" />
                    <Ingredient name="grapes" />
                    <Ingredient name="green chartreuse" />
                    <Ingredient name="green creme de menthe" />
                    <Ingredient name="green ginger wine" />
                    <Ingredient name="green olives" />
                    <Ingredient name="grenadine" />
                    <Ingredient name="ground ginger" />
                    <Ingredient name="guava juice" />
                    <Ingredient name="guinness" />
                    <Ingredient name="guinness stout" />
                  </ol>
                </li>
                <li>
                  <h3>h</h3>
                  <ol>
                    <Ingredient name="habanero peppers" />
                    <Ingredient name="half-and-half" />
                    <Ingredient name="hawaiian punch" />
                    <Ingredient name="hazelnut liqueur" />
                    <Ingredient name="heavy cream" />
                    <Ingredient name="honey" />
                    <Ingredient name="honey syrup" />
                    <Ingredient name="hooch" />
                    <Ingredient name="hot chocolate" />
                    <Ingredient name="hot damn" />
                    <Ingredient name="hot sauce" />
                    <Ingredient name="hpnotiq" />
                  </ol>
                </li>
                <li>
                  <h3>i</h3>
                  <ol>
                    <Ingredient name="ice" />
                    <Ingredient name="ice-cream" />
                    <Ingredient name="iced tea" />
                    <Ingredient name="ilegal joven mezcal" />
                    <Ingredient name="irish cream" />
                    <Ingredient name="irish whiskey" />
                    <Ingredient name="islay single malt scotch" />
                  </ol>
                </li>
                <li>
                  <h3>j</h3>
                  <ol>
                    <Ingredient name="jack daniels" />
                    <Ingredient name="jagermeister" />
                    <Ingredient name="jello" />
                    <Ingredient name="jelly" />
                    <Ingredient name="jim beam" />
                    <Ingredient name="johnnie walker" />
                  </ol>
                </li>
                <li>
                  <h3>k</h3>
                  <ol>
                    <Ingredient name="kahlua" />
                    <Ingredient name="key largo schnapps" />
                    <Ingredient name="kirschwasser" />
                    <Ingredient name="kiwi" />
                    <Ingredient name="kiwi liqueur" />
                    <Ingredient name="kool-aid" />
                    <Ingredient name="kummel" />
                  </ol>
                </li>
                <li>
                  <h3>l</h3>
                  <ol>
                    <Ingredient name="lager" />
                    <Ingredient name="lavender" />
                    <Ingredient name="lemon" />
                    <Ingredient name="lemon juice" />
                    <Ingredient name="lemon peel" />
                    <Ingredient name="lemon soda" />
                    <Ingredient name="lemon vodka" />
                    <Ingredient name="lemon-lime" />
                    <Ingredient name="lemon-lime soda" />
                    <Ingredient name="lemonade" />
                    <Ingredient name="licorice root" />
                    <Ingredient name="light cream" />
                    <Ingredient name="light rum" />
                    <Ingredient name="lillet" />
                    <Ingredient name="lillet blanc" />
                    <Ingredient name="lime" />
                    <Ingredient name="lime juice" />
                    <Ingredient name="lime juice cordial" />
                    <Ingredient name="lime liqueur" />
                    <Ingredient name="lime peel" />
                    <Ingredient name="lime vodka" />
                    <Ingredient name="limeade" />
                  </ol>
                </li>
                <li>
                  <h3>m</h3>
                  <ol>
                    <Ingredient name="madeira" />
                    <Ingredient name="malibu rum" />
                    <Ingredient name="mandarin" />
                    <Ingredient name="mandarine napoleon" />
                    <Ingredient name="mango" />
                    <Ingredient name="maple syrup" />
                    <Ingredient name="maraschino cherry" />
                    <Ingredient name="maraschino cherry juice" />
                    <Ingredient name="maraschino liqueur" />
                    <Ingredient name="margarita mix" />
                    <Ingredient name="marjoram leaves" />
                    <Ingredient name="marshmallows" />
                    <Ingredient name="martini bianco" />
                    <Ingredient name="martini extra dry" />
                    <Ingredient name="martini rosso" />
                    <Ingredient name="maui" />
                    <Ingredient name="melon liqueur" />
                    <Ingredient name="melon vodka" />
                    <Ingredient name="mezcal" />
                    <Ingredient name="midori" />
                    <Ingredient name="midori melon liqueur" />
                    <Ingredient name="milk" />
                    <Ingredient name="mini-snickers bars" />
                    <Ingredient name="mint" />
                    <Ingredient name="mint syrup" />
                    <Ingredient name="mountain dew" />
                  </ol>
                </li>
                <li>
                  <h3>n</h3>
                  <ol>
                    <Ingredient name="nocino" />
                    <Ingredient name="nutmeg" />
                  </ol>
                </li>
                <li>
                  <h3>o</h3>
                  <ol>
                    <Ingredient name="olive" />
                    <Ingredient name="olive brine" />
                    <Ingredient name="olive oil" />
                    <Ingredient name="onion" />
                    <Ingredient name="orange" />
                    <Ingredient name="orange bitters" />
                    <Ingredient name="orange curacao" />
                    <Ingredient name="orange juice" />
                    <Ingredient name="orange liqueur" />
                    <Ingredient name="orange peel" />
                    <Ingredient name="orange rum" />
                    <Ingredient name="orange slice" />
                    <Ingredient name="orange soda" />
                    <Ingredient name="orange spiral" />
                    <Ingredient name="orange vodka" />
                    <Ingredient name="oreo cookie" />
                    <Ingredient name="orgeat syrup" />
                    <Ingredient name="ouzo" />
                    <Ingredient name="oyster sauce" />
                  </ol>
                </li>
              </ol>
            </div>
            <div className="ingredients-column">
              <ol className="ingredients-list">
                <li>
                  <h3>p</h3>
                  <ol>
                    <Ingredient name="papaya" />
                    <Ingredient name="papaya juice" />
                    <Ingredient name="parfait amour" />
                    <Ingredient name="passion fruit juice" />
                    <Ingredient name="passion fruit syrup" />
                    <Ingredient name="passoa" />
                    <Ingredient name="peach" />
                    <Ingredient name="peach bitters" />
                    <Ingredient name="peach brandy" />
                    <Ingredient name="peach juice" />
                    <Ingredient name="peach liqueur" />
                    <Ingredient name="peach nectar" />
                    <Ingredient name="peach schnapps" />
                    <Ingredient name="peach vodka" />
                    <Ingredient name="peachtree schnapps" />
                    <Ingredient name="peanut oil" />
                    <Ingredient name="pepper" />
                    <Ingredient name="peppermint extract" />
                    <Ingredient name="peppermint schnapps" />
                    <Ingredient name="pepsi cola" />
                    <Ingredient name="pernod" />
                    <Ingredient name="peychaud bitters" />
                    <Ingredient name="pina colada mix" />
                    <Ingredient name="pineapple" />
                    <Ingredient name="pineapple juice" />
                    <Ingredient name="pineapple rum" />
                    <Ingredient name="pineapple syrup" />
                    <Ingredient name="pineapple vodka" />
                    <Ingredient name="pineapple-orange-banana juice" />
                    <Ingredient name="pink lemonade" />
                    <Ingredient name="pisang ambon" />
                    <Ingredient name="pisco" />
                    <Ingredient name="plain chocolate" />
                    <Ingredient name="plain flour" />
                    <Ingredient name="plums" />
                    <Ingredient name="pomegranate juice" />
                    <Ingredient name="port" />
                    <Ingredient name="powdered sugar" />
                    <Ingredient name="prosecco" />
                    <Ingredient name="purple passion" />
                  </ol>
                </li>
                <li>
                  <h3>r</h3>
                  <ol>
                    <Ingredient name="raisins" />
                    <Ingredient name="ramazzotti" />
                    <Ingredient name="raspberry cordial" />
                    <Ingredient name="raspberry jam" />
                    <Ingredient name="raspberry juice" />
                    <Ingredient name="raspberry liqueur" />
                    <Ingredient name="raspberry schnapps" />
                    <Ingredient name="raspberry syrup" />
                    <Ingredient name="raspberry vodka" />
                    <Ingredient name="red bull" />
                    <Ingredient name="red chile flakes" />
                    <Ingredient name="red chili flakes" />
                    <Ingredient name="red hot chili flakes" />
                    <Ingredient name="red wine" />
                    <Ingredient name="rhubarb" />
                    <Ingredient name="ricard" />
                    <Ingredient name="rock salt" />
                    <Ingredient name="root beer" />
                    <Ingredient name="root beer schnapps" />
                    <Ingredient name="rose" />
                    <Ingredient name="rosemary" />
                    <Ingredient name="rosemary syrup" />
                    <Ingredient name="roses sweetened lime juice" />
                    <Ingredient name="rosewater" />
                    <Ingredient name="rosso vermouth" />
                    <Ingredient name="ruby port" />
                    <Ingredient name="rum" />
                    <Ingredient name="rumple minze" />
                    <Ingredient name="rye whiskey" />
                  </ol>
                </li>
                <li>
                  <h3>s</h3>
                  <ol>
                    <Ingredient name="sake" />
                    <Ingredient name="salt" />
                    <Ingredient name="salted chocolate" />
                    <Ingredient name="sambuca" />
                    <Ingredient name="sarsaparilla" />
                    <Ingredient name="schnapps" />
                    <Ingredient name="schweppes lemon" />
                    <Ingredient name="schweppes russchian" />
                    <Ingredient name="scotch" />
                    <Ingredient name="sherbet" />
                    <Ingredient name="sherry" />
                    <Ingredient name="singani" />
                    <Ingredient name="sirup of roses" />
                    <Ingredient name="sloe gin" />
                    <Ingredient name="soda water" />
                    <Ingredient name="sour apple pucker" />
                    <Ingredient name="sour mix" />
                    <Ingredient name="southern comfort" />
                    <Ingredient name="soy milk" />
                    <Ingredient name="soy sauce" />
                    <Ingredient name="soya milk" />
                    <Ingredient name="soya sauce" />
                    <Ingredient name="spiced rum" />
                    <Ingredient name="sprite" />
                    <Ingredient name="squeezed orange" />
                    <Ingredient name="squirt" />
                    <Ingredient name="st. germain" />
                    <Ingredient name="strawberries" />
                    <Ingredient name="strawberry juice" />
                    <Ingredient name="strawberry liqueur" />
                    <Ingredient name="strawberry schnapps" />
                    <Ingredient name="strawberry syrup" />
                    <Ingredient name="sugar" />
                    <Ingredient name="sugar syrup" />
                    <Ingredient name="sunny delight" />
                    <Ingredient name="surge" />
                    <Ingredient name="swedish punsch" />
                    <Ingredient name="sweet and sour" />
                    <Ingredient name="sweet cream" />
                    <Ingredient name="sweet vermouth" />
                  </ol>
                </li>
                <li>
                  <h3>t</h3>
                  <ol>
                    <Ingredient name="tabasco sauce" />
                    <Ingredient name="tajin" />
                    <Ingredient name="tang" />
                    <Ingredient name="tawny port" />
                    <Ingredient name="tea" />
                    <Ingredient name="tennessee whiskey" />
                    <Ingredient name="tequila" />
                    <Ingredient name="tequila rose" />
                    <Ingredient name="thyme" />
                    <Ingredient name="tia maria" />
                    <Ingredient name="tomato" />
                    <Ingredient name="tomato juice" />
                    <Ingredient name="tonic water" />
                    <Ingredient name="triple sec" />
                    <Ingredient name="tropicana" />
                    <Ingredient name="tuaca" />
                  </ol>
                </li>
                <li>
                  <h3>v</h3>
                  <ol>
                    <Ingredient name="vanilla" />
                    <Ingredient name="vanilla extract" />
                    <Ingredient name="vanilla ice-cream" />
                    <Ingredient name="vanilla liqueur" />
                    <Ingredient name="vanilla schnapps" />
                    <Ingredient name="vanilla syrup" />
                    <Ingredient name="vanilla vodka" />
                    <Ingredient name="vermouth" />
                    <Ingredient name="vinegar" />
                    <Ingredient name="vodka" />
                  </ol>
                </li>
                <li>
                  <h3>w</h3>
                  <ol>
                    <Ingredient name="water" />
                    <Ingredient name="watermelon" />
                    <Ingredient name="watermelon schnapps" />
                    <Ingredient name="whipped cream" />
                    <Ingredient name="whipping cream" />
                    <Ingredient name="whiskey" />
                    <Ingredient name="whisky" />
                    <Ingredient name="white chocolate liqueur" />
                    <Ingredient name="white creme de menthe" />
                    <Ingredient name="white grape juice" />
                    <Ingredient name="white port" />
                    <Ingredient name="white rum" />
                    <Ingredient name="white vermouth" />
                    <Ingredient name="white vinegar" />
                    <Ingredient name="white wine" />
                    <Ingredient name="wild turkey" />
                    <Ingredient name="wildberry schnapps" />
                    <Ingredient name="wine" />
                    <Ingredient name="worcestershire sauce" />
                    <Ingredient name="wormwood" />
                  </ol>
                </li>
                <li>
                  <h3>y</h3>
                  <ol>
                    <Ingredient name="yeast" />
                    <Ingredient name="yellow chartreuse" />
                    <Ingredient name="yoghurt" />
                    <Ingredient name="yukon jack" />
                  </ol>
                </li>
                <li>
                  <h3>z</h3>
                  <ol>
                    <Ingredient name="zima" />
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </main>
        <aside className="sidebar inner-container">
          <div className="sidebar-content">
            <h4>Ingredients</h4>
            <ul className="ingredients-list">
              <Ingredient name="Applejack" />
              <Ingredient name="Gin" />
              <Ingredient name="Dark rum" />
              <Ingredient name="Sweet Vermouth" />
              <Ingredient name="Strawberry schnapps" />
            </ul>
          </div>
        </aside>
      </div>
      <footer id="footer" className="outer-container">
        <div className="footer-content inner-container">
          In opdracht van NOVI Hogeschool © 2022
        </div>
      </footer>
    </>
  );
}

export default App;
