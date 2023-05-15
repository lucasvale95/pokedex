import { HomeContainer, MainHome } from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            <div className="headerContent">
                <header>
                    <img src="/logoPokemon.png" alt="" />
                </header>
            </div>
            <MainHome>
                <div className="mainContent">
                    <div className="descriptions">
                        <h1><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
                        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                        <button onClick={()=> window.open("/pokedex", "_self")}>See pokemons</button>
                    </div>
                    <div className="imagePikachu">
                        <img src="/pikachuHome.png" alt="" />
                    </div>
                </div>
                
            </MainHome>
        </HomeContainer>
    )
}