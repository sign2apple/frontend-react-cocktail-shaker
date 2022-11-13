import './App.css';

function App() {
  return (
    <>
      <header id="header" className="outer-container">
        <div className="header-content inner-container">
          <h1>The Cocktail Shaker</h1>
          <nav className="navbar">
            <ul className="nav-menu">
              <li>
                <a className="nav-link" href="#">Ingredients</a>
              </li>
              <li>
                <a className="nav-link" href="#">Cocktails</a>
              </li>
              <li>
                <a className="nav-link" href="#">Cocktail Details</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
                    <li><a href="#">151 proof rum</a></li>
                    <li><a href="#">7-up</a></li>
                  </ol>
                </li>
                <li>
                  <h3>a</h3>
                  <ol>
                    <li><a href="#">absinthe</a></li>
                    <li><a href="#">absolut citron</a></li>
                    <li><a href="#">absolut kurant</a></li>
                    <li><a href="#">absolut peppar</a></li>
                    <li><a href="#">absolut vodka</a></li>
                    <li><a href="#">advocaat</a></li>
                    <li><a href="#">aejo rum</a></li>
                    <li><a href="#">aftershock</a></li>
                    <li><a href="#">agave syrup</a></li>
                    <li><a href="#">ale</a></li>
                    <li><a href="#">allspice</a></li>
                    <li><a href="#">allspice dram</a></li>
                    <li><a href="#">almond</a></li>
                    <li><a href="#">almond flavoring</a></li>
                    <li><a href="#">amaretto</a></li>
                    <li><a href="#">amaro montenegro</a></li>
                    <li><a href="#">angelica root</a></li>
                    <li><a href="#">angostura bitters</a></li>
                    <li><a href="#">anis</a></li>
                    <li><a href="#">anise</a></li>
                    <li><a href="#">anisette</a></li>
                    <li><a href="#">aperol</a></li>
                    <li><a href="#">apfelkorn</a></li>
                    <li><a href="#">apple</a></li>
                    <li><a href="#">apple brandy</a></li>
                    <li><a href="#">apple cider</a></li>
                    <li><a href="#">apple juice</a></li>
                    <li><a href="#">apple schnapps</a></li>
                    <li><a href="#">applejack</a></li>
                    <li><a href="#">apricot</a></li>
                    <li><a href="#">apricot brandy</a></li>
                    <li><a href="#">apricot nectar</a></li>
                    <li><a href="#">aquavit</a></li>
                    <li><a href="#">arrack</a></li>
                    <li><a href="#">asafoetida</a></li>
                    <li><a href="#">averna</a></li>
                    <li><a href="#">añejo rum</a></li>
                  </ol>
                </li>
                <li>
                  <h3>b</h3>
                  <ol>
                    <li><a href="#">bacardi</a></li>
                    <li><a href="#">bacardi limon</a></li>
                    <li><a href="#">baileys irish cream</a></li>
                    <li><a href="#">banana</a></li>
                    <li><a href="#">banana liqueur</a></li>
                    <li><a href="#">banana rum</a></li>
                    <li><a href="#">banana syrup</a></li>
                    <li><a href="#">barenjager</a></li>
                    <li><a href="#">basil</a></li>
                    <li><a href="#">beef stock</a></li>
                    <li><a href="#">beer</a></li>
                    <li><a href="#">benedictine</a></li>
                    <li><a href="#">berries</a></li>
                    <li><a href="#">bitter lemon</a></li>
                    <li><a href="#">bitters</a></li>
                    <li><a href="#">black pepper</a></li>
                    <li><a href="#">black rum</a></li>
                    <li><a href="#">black sambuca</a></li>
                    <li><a href="#">blackberries</a></li>
                    <li><a href="#">blackberry brandy</a></li>
                    <li><a href="#">blackberry schnapps</a></li>
                    <li><a href="#">blackcurrant cordial</a></li>
                    <li><a href="#">blackcurrant schnapps</a></li>
                    <li><a href="#">blackcurrant squash</a></li>
                    <li><a href="#">blackstrap rum</a></li>
                    <li><a href="#">blended scotch</a></li>
                    <li><a href="#">blended whiskey</a></li>
                    <li><a href="#">blood orange</a></li>
                    <li><a href="#">blue curacao</a></li>
                    <li><a href="#">blue maui</a></li>
                    <li><a href="#">blueberries</a></li>
                    <li><a href="#">blueberry schnapps</a></li>
                    <li><a href="#">bourbon</a></li>
                    <li><a href="#">brandy</a></li>
                    <li><a href="#">brown sugar</a></li>
                    <li><a href="#">butter</a></li>
                    <li><a href="#">butterscotch schnapps</a></li>
                  </ol>
                </li>
                  <li>
                    <h3>c</h3>
                    <ol>
                      <li><a href="#">cachaca</a></li>
                      <li><a href="#">calvados</a></li>
                      <li><a href="#">campari</a></li>
                      <li><a href="#">canadian whisky</a></li>
                      <li><a href="#">candy</a></li>
                      <li><a href="#">cantaloupe</a></li>
                      <li><a href="#">caramel coloring</a></li>
                      <li><a href="#">caramel sauce</a></li>
                      <li><a href="#">carbonated soft drink</a></li>
                      <li><a href="#">carbonated water</a></li>
                      <li><a href="#">cardamom</a></li>
                      <li><a href="#">cayenne pepper</a></li>
                      <li><a href="#">celery</a></li>
                      <li><a href="#">celery salt</a></li>
                      <li><a href="#">chambord raspberry liqueur</a></li>
                      <li><a href="#">champagne</a></li>
                      <li><a href="#">chareau</a></li>
                      <li><a href="#">cherries</a></li>
                      <li><a href="#">cherry</a></li>
                      <li><a href="#">cherry brandy</a></li>
                      <li><a href="#">cherry cola</a></li>
                      <li><a href="#">cherry grenadine</a></li>
                      <li><a href="#">cherry heering</a></li>
                      <li><a href="#">cherry juice</a></li>
                      <li><a href="#">cherry liqueur</a></li>
                      <li><a href="#">chocolate</a></li>
                      <li><a href="#">chocolate ice-cream</a></li>
                      <li><a href="#">chocolate liqueur</a></li>
                      <li><a href="#">chocolate milk</a></li>
                      <li><a href="#">chocolate sauce</a></li>
                      <li><a href="#">chocolate syrup</a></li>
                      <li><a href="#">cider</a></li>
                      <li><a href="#">cinnamon</a></li>
                      <li><a href="#">cinnamon schnapps</a></li>
                      <li><a href="#">cinnamon whisky</a></li>
                      <li><a href="#">citrus vodka</a></li>
                      <li><a href="#">clamato juice</a></li>
                      <li><a href="#">cloves</a></li>
                      <li><a href="#">club soda</a></li>
                      <li><a href="#">coca-cola</a></li>
                      <li><a href="#">cocchi americano</a></li>
                      <li><a href="#">cocktail onion</a></li>
                      <li><a href="#">cocoa powder</a></li>
                      <li><a href="#">coconut cream</a></li>
                      <li><a href="#">coconut liqueur</a></li>
                      <li><a href="#">coconut milk</a></li>
                      <li><a href="#">coconut rum</a></li>
                      <li><a href="#">coconut syrup</a></li>
                      <li><a href="#">coffee</a></li>
                      <li><a href="#">coffee brandy</a></li>
                      <li><a href="#">coffee liqueur</a></li>
                      <li><a href="#">cognac</a></li>
                      <li><a href="#">cointreau</a></li>
                      <li><a href="#">cola</a></li>
                      <li><a href="#">cold water</a></li>
                      <li><a href="#">condensed milk</a></li>
                      <li><a href="#">coriander</a></li>
                      <li><a href="#">corn syrup</a></li>
                      <li><a href="#">cornstarch</a></li>
                      <li><a href="#">corona</a></li>
                      <li><a href="#">cranberries</a></li>
                      <li><a href="#">cranberry juice</a></li>
                      <li><a href="#">cranberry liqueur</a></li>
                      <li><a href="#">cranberry vodka</a></li>
                      <li><a href="#">cream</a></li>
                      <li><a href="#">cream of coconut</a></li>
                      <li><a href="#">cream sherry</a></li>
                      <li><a href="#">cream soda</a></li>
                      <li><a href="#">creme de almond</a></li>
                      <li><a href="#">creme de banane</a></li>
                      <li><a href="#">creme de cacao</a></li>
                      <li><a href="#">creme de cassis</a></li>
                      <li><a href="#">creme de mure</a></li>
                      <li><a href="#">creme de noyaux</a></li>
                      <li><a href="#">creme de violette</a></li>
                      <li><a href="#">creme fraiche</a></li>
                      <li><a href="#">crown royal</a></li>
                      <li><a href="#">crystal light</a></li>
                      <li><a href="#">cucumber</a></li>
                      <li><a href="#">cumin powder</a></li>
                      <li><a href="#">cumin seed</a></li>
                      <li><a href="#">curacao</a></li>
                      <li><a href="#">cynar</a></li>
                    </ol>
                  </li>
                  <li>
                    <h3>d</h3>
                    <ol>
                      <li><a href="#">daiquiri mix</a></li>
                      <li><a href="#">dark chocolate</a></li>
                      <li><a href="#">dark creme de cacao</a></li>
                      <li><a href="#">dark rum</a></li>
                      <li><a href="#">dark soy sauce</a></li>
                      <li><a href="#">demerara sugar</a></li>
                      <li><a href="#">diet coke</a></li>
                      <li><a href="#">dr. pepper</a></li>
                      <li><a href="#">drambuie</a></li>
                      <li><a href="#">dried oregano</a></li>
                      <li><a href="#">dry curacao</a></li>
                      <li><a href="#">dry vermouth</a></li>
                      <li><a href="#">dubonnet blanc</a></li>
                      <li><a href="#">dubonnet rouge</a></li>
                    </ol>
                  </li>
              </ol>
            </div>
            <div className="ingredients-column">
              <ol className="ingredients-list">
                <li>
                  <h3>e</h3>
                  <ol>
                    <li><a href="#">egg</a></li>
                    <li><a href="#">egg white</a></li>
                    <li><a href="#">egg yolk</a></li>
                    <li><a href="#">eggnog</a></li>
                    <li><a href="#">elderflower cordial</a></li>
                    <li><a href="#">erin cream</a></li>
                    <li><a href="#">espresso</a></li>
                    <li><a href="#">everclear</a></li>
                  </ol>
                </li>
                <li>
                  <h3>f</h3>
                  <ol>
                    <li><a href="#">falernum</a></li>
                    <li><a href="#">fanta</a></li>
                    <li><a href="#">fennel seeds</a></li>
                    <li><a href="#">fernet-branca</a></li>
                    <li><a href="#">figs</a></li>
                    <li><a href="#">firewater</a></li>
                    <li><a href="#">flaked almonds</a></li>
                    <li><a href="#">food coloring</a></li>
                    <li><a href="#">forbidden fruit</a></li>
                    <li><a href="#">frangelico</a></li>
                    <li><a href="#">fresca</a></li>
                    <li><a href="#">fresh basil</a></li>
                    <li><a href="#">fresh lemon juice</a></li>
                    <li><a href="#">fresh lime juice</a></li>
                    <li><a href="#">fresh mint</a></li>
                    <li><a href="#">fruit</a></li>
                    <li><a href="#">fruit juice</a></li>
                    <li><a href="#">fruit punch</a></li>
                  </ol>
                </li>
                <li>
                  <h3>g</h3>
                  <ol>
                    <li><a href="#">galliano</a></li>
                    <li><a href="#">garlic sauce</a></li>
                    <li><a href="#">gatorade</a></li>
                    <li><a href="#">gin</a></li>
                    <li><a href="#">ginger</a></li>
                    <li><a href="#">ginger ale</a></li>
                    <li><a href="#">ginger beer</a></li>
                    <li><a href="#">ginger syrup</a></li>
                    <li><a href="#">glycerine</a></li>
                    <li><a href="#">godiva liqueur</a></li>
                    <li><a href="#">gold rum</a></li>
                    <li><a href="#">gold tequila</a></li>
                    <li><a href="#">goldschlager</a></li>
                    <li><a href="#">grain alcohol</a></li>
                    <li><a href="#">grand marnier</a></li>
                    <li><a href="#">granulated sugar</a></li>
                    <li><a href="#">grape juice</a></li>
                    <li><a href="#">grape soda</a></li>
                    <li><a href="#">grapefruit juice</a></li>
                    <li><a href="#">grapes</a></li>
                    <li><a href="#">green chartreuse</a></li>
                    <li><a href="#">green creme de menthe</a></li>
                    <li><a href="#">green ginger wine</a></li>
                    <li><a href="#">green olives</a></li>
                    <li><a href="#">grenadine</a></li>
                    <li><a href="#">ground ginger</a></li>
                    <li><a href="#">guava juice</a></li>
                    <li><a href="#">guinness</a></li>
                    <li><a href="#">guinness stout</a></li>
                  </ol>
                </li>
                <li>
                  <h3>h</h3>
                  <ol>
                    <li><a href="#">habanero peppers</a></li>
                    <li><a href="#">half-and-half</a></li>
                    <li><a href="#">hawaiian punch</a></li>
                    <li><a href="#">hazelnut liqueur</a></li>
                    <li><a href="#">heavy cream</a></li>
                    <li><a href="#">honey</a></li>
                    <li><a href="#">honey syrup</a></li>
                    <li><a href="#">hooch</a></li>
                    <li><a href="#">hot chocolate</a></li>
                    <li><a href="#">hot damn</a></li>
                    <li><a href="#">hot sauce</a></li>
                    <li><a href="#">hpnotiq</a></li>
                  </ol>
                </li>
                <li>
                  <h3>i</h3>
                  <ol>
                    <li><a href="#">ice</a></li>
                    <li><a href="#">ice-cream</a></li>
                    <li><a href="#">iced tea</a></li>
                    <li><a href="#">ilegal joven mezcal</a></li>
                    <li><a href="#">irish cream</a></li>
                    <li><a href="#">irish whiskey</a></li>
                    <li><a href="#">islay single malt scotch</a></li>
                  </ol>
                </li>
                <li>
                  <h3>j</h3>
                  <ol>
                    <li><a href="#">jack daniels</a></li>
                    <li><a href="#">jagermeister</a></li>
                    <li><a href="#">jello</a></li>
                    <li><a href="#">jelly</a></li>
                    <li><a href="#">jim beam</a></li>
                    <li><a href="#">johnnie walker</a></li>
                  </ol>
                </li>
                <li>
                  <h3>k</h3>
                  <ol>
                    <li><a href="#">kahlua</a></li>
                    <li><a href="#">key largo schnapps</a></li>
                    <li><a href="#">kirschwasser</a></li>
                    <li><a href="#">kiwi</a></li>
                    <li><a href="#">kiwi liqueur</a></li>
                    <li><a href="#">kool-aid</a></li>
                    <li><a href="#">kummel</a></li>
                  </ol>
                </li>
                <li>
                  <h3>l</h3>
                  <ol>
                    <li><a href="#">lager</a></li>
                    <li><a href="#">lavender</a></li>
                    <li><a href="#">lemon</a></li>
                    <li><a href="#">lemon juice</a></li>
                    <li><a href="#">lemon peel</a></li>
                    <li><a href="#">lemon soda</a></li>
                    <li><a href="#">lemon vodka</a></li>
                    <li><a href="#">lemon-lime</a></li>
                    <li><a href="#">lemon-lime soda</a></li>
                    <li><a href="#">lemonade</a></li>
                    <li><a href="#">licorice root</a></li>
                    <li><a href="#">light cream</a></li>
                    <li><a href="#">light rum</a></li>
                    <li><a href="#">lillet</a></li>
                    <li><a href="#">lillet blanc</a></li>
                    <li><a href="#">lime</a></li>
                    <li><a href="#">lime juice</a></li>
                    <li><a href="#">lime juice cordial</a></li>
                    <li><a href="#">lime liqueur</a></li>
                    <li><a href="#">lime peel</a></li>
                    <li><a href="#">lime vodka</a></li>
                    <li><a href="#">limeade</a></li>
                  </ol>
                </li>
                <li>
                  <h3>m</h3>
                  <ol>
                    <li><a href="#">madeira</a></li>
                    <li><a href="#">malibu rum</a></li>
                    <li><a href="#">mandarin</a></li>
                    <li><a href="#">mandarine napoleon</a></li>
                    <li><a href="#">mango</a></li>
                    <li><a href="#">maple syrup</a></li>
                    <li><a href="#">maraschino cherry</a></li>
                    <li><a href="#">maraschino cherry juice</a></li>
                    <li><a href="#">maraschino liqueur</a></li>
                    <li><a href="#">margarita mix</a></li>
                    <li><a href="#">marjoram leaves</a></li>
                    <li><a href="#">marshmallows</a></li>
                    <li><a href="#">martini bianco</a></li>
                    <li><a href="#">martini extra dry</a></li>
                    <li><a href="#">martini rosso</a></li>
                    <li><a href="#">maui</a></li>
                    <li><a href="#">melon liqueur</a></li>
                    <li><a href="#">melon vodka</a></li>
                    <li><a href="#">mezcal</a></li>
                    <li><a href="#">midori</a></li>
                    <li><a href="#">midori melon liqueur</a></li>
                    <li><a href="#">milk</a></li>
                    <li><a href="#">mini-snickers bars</a></li>
                    <li><a href="#">mint</a></li>
                    <li><a href="#">mint syrup</a></li>
                    <li><a href="#">mountain dew</a></li>
                  </ol>
                </li>
                <li>
                  <h3>n</h3>
                  <ol>
                    <li><a href="#">nocino</a></li>
                    <li><a href="#">nutmeg</a></li>
                  </ol>
                </li>
                <li>
                  <h3>o</h3>
                  <ol>
                    <li><a href="#">olive</a></li>
                    <li><a href="#">olive brine</a></li>
                    <li><a href="#">olive oil</a></li>
                    <li><a href="#">onion</a></li>
                    <li><a href="#">orange</a></li>
                    <li><a href="#">orange bitters</a></li>
                    <li><a href="#">orange curacao</a></li>
                    <li><a href="#">orange juice</a></li>
                    <li><a href="#">orange liqueur</a></li>
                    <li><a href="#">orange peel</a></li>
                    <li><a href="#">orange rum</a></li>
                    <li><a href="#">orange slice</a></li>
                    <li><a href="#">orange soda</a></li>
                    <li><a href="#">orange spiral</a></li>
                    <li><a href="#">orange vodka</a></li>
                    <li><a href="#">oreo cookie</a></li>
                    <li><a href="#">orgeat syrup</a></li>
                    <li><a href="#">ouzo</a></li>
                    <li><a href="#">oyster sauce</a></li>
                  </ol>
                </li>
              </ol>
            </div>
            <div className="ingredients-column">
              <ol className="ingredients-list">
                <li>
                  <h3>p</h3>
                  <ol>
                    <li><a href="#">papaya</a></li>
                    <li><a href="#">papaya juice</a></li>
                    <li><a href="#">parfait amour</a></li>
                    <li><a href="#">passion fruit juice</a></li>
                    <li><a href="#">passion fruit syrup</a></li>
                    <li><a href="#">passoa</a></li>
                    <li><a href="#">peach</a></li>
                    <li><a href="#">peach bitters</a></li>
                    <li><a href="#">peach brandy</a></li>
                    <li><a href="#">peach juice</a></li>
                    <li><a href="#">peach liqueur</a></li>
                    <li><a href="#">peach nectar</a></li>
                    <li><a href="#">peach schnapps</a></li>
                    <li><a href="#">peach vodka</a></li>
                    <li><a href="#">peachtree schnapps</a></li>
                    <li><a href="#">peanut oil</a></li>
                    <li><a href="#">pepper</a></li>
                    <li><a href="#">peppermint extract</a></li>
                    <li><a href="#">peppermint schnapps</a></li>
                    <li><a href="#">pepsi cola</a></li>
                    <li><a href="#">pernod</a></li>
                    <li><a href="#">peychaud bitters</a></li>
                    <li><a href="#">pina colada mix</a></li>
                    <li><a href="#">pineapple</a></li>
                    <li><a href="#">pineapple juice</a></li>
                    <li><a href="#">pineapple rum</a></li>
                    <li><a href="#">pineapple syrup</a></li>
                    <li><a href="#">pineapple vodka</a></li>
                    <li><a href="#">pineapple-orange-banana juice</a></li>
                    <li><a href="#">pink lemonade</a></li>
                    <li><a href="#">pisang ambon</a></li>
                    <li><a href="#">pisco</a></li>
                    <li><a href="#">plain chocolate</a></li>
                    <li><a href="#">plain flour</a></li>
                    <li><a href="#">plums</a></li>
                    <li><a href="#">pomegranate juice</a></li>
                    <li><a href="#">port</a></li>
                    <li><a href="#">powdered sugar</a></li>
                    <li><a href="#">prosecco</a></li>
                    <li><a href="#">purple passion</a></li>
                  </ol>
                </li>
                <li>
                  <h3>r</h3>
                  <ol>
                    <li><a href="#">raisins</a></li>
                    <li><a href="#">ramazzotti</a></li>
                    <li><a href="#">raspberry cordial</a></li>
                    <li><a href="#">raspberry jam</a></li>
                    <li><a href="#">raspberry juice</a></li>
                    <li><a href="#">raspberry liqueur</a></li>
                    <li><a href="#">raspberry schnapps</a></li>
                    <li><a href="#">raspberry syrup</a></li>
                    <li><a href="#">raspberry vodka</a></li>
                    <li><a href="#">red bull</a></li>
                    <li><a href="#">red chile flakes</a></li>
                    <li><a href="#">red chili flakes</a></li>
                    <li><a href="#">red hot chili flakes</a></li>
                    <li><a href="#">red wine</a></li>
                    <li><a href="#">rhubarb</a></li>
                    <li><a href="#">ricard</a></li>
                    <li><a href="#">rock salt</a></li>
                    <li><a href="#">root beer</a></li>
                    <li><a href="#">root beer schnapps</a></li>
                    <li><a href="#">rose</a></li>
                    <li><a href="#">rosemary</a></li>
                    <li><a href="#">rosemary syrup</a></li>
                    <li><a href="#">roses sweetened lime juice</a></li>
                    <li><a href="#">rosewater</a></li>
                    <li><a href="#">rosso vermouth</a></li>
                    <li><a href="#">ruby port</a></li>
                    <li><a href="#">rum</a></li>
                    <li><a href="#">rumple minze</a></li>
                    <li><a href="#">rye whiskey</a></li>
                  </ol>
                </li>
                <li>
                  <h3>s</h3>
                  <ol>
                    <li><a href="#">sake</a></li>
                    <li><a href="#">salt</a></li>
                    <li><a href="#">salted chocolate</a></li>
                    <li><a href="#">sambuca</a></li>
                    <li><a href="#">sarsaparilla</a></li>
                    <li><a href="#">schnapps</a></li>
                    <li><a href="#">schweppes lemon</a></li>
                    <li><a href="#">schweppes russchian</a></li>
                    <li><a href="#">scotch</a></li>
                    <li><a href="#">sherbet</a></li>
                    <li><a href="#">sherry</a></li>
                    <li><a href="#">singani</a></li>
                    <li><a href="#">sirup of roses</a></li>
                    <li><a href="#">sloe gin</a></li>
                    <li><a href="#">soda water</a></li>
                    <li><a href="#">sour apple pucker</a></li>
                    <li><a href="#">sour mix</a></li>
                    <li><a href="#">southern comfort</a></li>
                    <li><a href="#">soy milk</a></li>
                    <li><a href="#">soy sauce</a></li>
                    <li><a href="#">soya milk</a></li>
                    <li><a href="#">soya sauce</a></li>
                    <li><a href="#">spiced rum</a></li>
                    <li><a href="#">sprite</a></li>
                    <li><a href="#">squeezed orange</a></li>
                    <li><a href="#">squirt</a></li>
                    <li><a href="#">st. germain</a></li>
                    <li><a href="#">strawberries</a></li>
                    <li><a href="#">strawberry juice</a></li>
                    <li><a href="#">strawberry liqueur</a></li>
                    <li><a href="#">strawberry schnapps</a></li>
                    <li><a href="#">strawberry syrup</a></li>
                    <li><a href="#">sugar</a></li>
                    <li><a href="#">sugar syrup</a></li>
                    <li><a href="#">sunny delight</a></li>
                    <li><a href="#">surge</a></li>
                    <li><a href="#">swedish punsch</a></li>
                    <li><a href="#">sweet and sour</a></li>
                    <li><a href="#">sweet cream</a></li>
                    <li><a href="#">sweet vermouth</a></li>
                  </ol>
                </li>
                <li>
                  <h3>t</h3>
                  <ol>
                    <li><a href="#">tabasco sauce</a></li>
                    <li><a href="#">tajin</a></li>
                    <li><a href="#">tang</a></li>
                    <li><a href="#">tawny port</a></li>
                    <li><a href="#">tea</a></li>
                    <li><a href="#">tennessee whiskey</a></li>
                    <li><a href="#">tequila</a></li>
                    <li><a href="#">tequila rose</a></li>
                    <li><a href="#">thyme</a></li>
                    <li><a href="#">tia maria</a></li>
                    <li><a href="#">tomato</a></li>
                    <li><a href="#">tomato juice</a></li>
                    <li><a href="#">tonic water</a></li>
                    <li><a href="#">triple sec</a></li>
                    <li><a href="#">tropicana</a></li>
                    <li><a href="#">tuaca</a></li>
                  </ol>
                </li>
                <li>
                  <h3>v</h3>
                  <ol>
                    <li><a href="#">vanilla</a></li>
                    <li><a href="#">vanilla extract</a></li>
                    <li><a href="#">vanilla ice-cream</a></li>
                    <li><a href="#">vanilla liqueur</a></li>
                    <li><a href="#">vanilla schnapps</a></li>
                    <li><a href="#">vanilla syrup</a></li>
                    <li><a href="#">vanilla vodka</a></li>
                    <li><a href="#">vermouth</a></li>
                    <li><a href="#">vinegar</a></li>
                    <li><a href="#">vodka</a></li>
                  </ol>
                </li>
                <li>
                  <h3>w</h3>
                  <ol>
                    <li><a href="#">water</a></li>
                    <li><a href="#">watermelon</a></li>
                    <li><a href="#">watermelon schnapps</a></li>
                    <li><a href="#">whipped cream</a></li>
                    <li><a href="#">whipping cream</a></li>
                    <li><a href="#">whiskey</a></li>
                    <li><a href="#">whisky</a></li>
                    <li><a href="#">white chocolate liqueur</a></li>
                    <li><a href="#">white creme de menthe</a></li>
                    <li><a href="#">white grape juice</a></li>
                    <li><a href="#">white port</a></li>
                    <li><a href="#">white rum</a></li>
                    <li><a href="#">white vermouth</a></li>
                    <li><a href="#">white vinegar</a></li>
                    <li><a href="#">white wine</a></li>
                    <li><a href="#">wild turkey</a></li>
                    <li><a href="#">wildberry schnapps</a></li>
                    <li><a href="#">wine</a></li>
                    <li><a href="#">worcestershire sauce</a></li>
                    <li><a href="#">wormwood</a></li>
                  </ol>
                </li>
                <li>
                  <h3>y</h3>
                  <ol>
                    <li><a href="#">yeast</a></li>
                    <li><a href="#">yellow chartreuse</a></li>
                    <li><a href="#">yoghurt</a></li>
                    <li><a href="#">yukon jack</a></li>
                  </ol>
                </li>
                <li>
                  <h3>z</h3>
                  <ol>
                    <li><a href="#">zima</a></li>
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
              <li><a href="#">Applejack</a></li>
              <li><a href="#">Gin</a></li>
              <li><a href="#">Dark rum</a></li>
              <li><a href="#">Sweet Vermouth</a></li>
              <li><a href="#">Strawberry schnapps</a></li>
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
