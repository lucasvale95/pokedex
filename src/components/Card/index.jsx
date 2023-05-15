import { CardContainer, CardContent, ModalCard, StatusContainer} from "./styles"
import {FiArrowLeft} from "react-icons/fi"
import {TbWeight} from "react-icons/tb"
import {TfiRuler} from "react-icons/tfi"
import { colorTypes } from "../ColorTypes"


export default function Card ({cardPokemon, dropdown, closeDropdown}) {

    if(!cardPokemon) return <p>Fetching data...</p>

    let color = colorTypes[cardPokemon.types[0]?.type.name]

    let opacityBaseColor = `rgba(${color}, 0.2)`
    let pokeballBaseColor = `rgba(${color}, 0.8)`
    let baseColor = `rgba(${color}, 1)`


    return (
        <ModalCard style={{"display": `${dropdown}`}} onClick={()=> closeDropdown()}>
            <CardContainer style={{"boxShadow": `0px 0px 150px 1px ${baseColor}`}}>
                <CardContent style={{"backgroundColor": baseColor}} pokeballBaseColor={pokeballBaseColor}>
                    <div className="pokemonName">
                        <FiArrowLeft size={25} color={"#fff"} onClick={()=> closeDropdown()}/>
                        <h2>{cardPokemon.name}</h2>
                        <span>{`#${cardPokemon.order}`}</span>
                    </div>
                    <div className="pokemonImage">
                        <img src={cardPokemon.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                    <StatusContainer>
                        <div className="types">
                            {cardPokemon.types.map((elem)=> <span style={{"backgroundColor": `rgba(${colorTypes[elem.type.name]}, 1)`}}>{elem.type.name}</span>)}
                        </div>

                        <div className="specification">
                            <div className="stature">
                                <div>
                                <span style={{"height": "36px"}}><TbWeight size={15} color="#000"/> {cardPokemon.weight} g</span>
                                <span style={{"color": "#AAAAAA"}}>Weight</span>
                                </div>
                                <div>
                                <span style={{"height": "36px"}}><TfiRuler size={15} color="#000"/> {cardPokemon.height} cm</span>
                                <span style={{"color": "#AAAAAA"}}>Height</span>
                                </div>
                                <div>
                                    <div>
                                        {cardPokemon.abilities.map((elem, index)=> index < 2 && <p style={{"fontSize": "0.78rem"}}>{elem.ability.name}</p>)}
                                    </div>
                                <span  style={{"color": "#AAAAAA"}}>Abilities</span>
                                </div>
                            </div>
                        </div>

                        <div className="baseStatus">
                            <h3 style={{"color": baseColor}}>Base Stats</h3>
                            <div>
                                <div>
                                    <h5 style={{"color": baseColor}}>HP</h5>
                                    <span></span>
                                    <p>{cardPokemon.stats[0].base_stat}</p>
                                    <section style={{"background": opacityBaseColor}}>
                                        <div style={{"width": `${(cardPokemon.stats[0].base_stat)/2}%`, "backgroundColor": baseColor}}></div>
                                    </section>
                                </div>
                                <div>
                                    <h5 style={{"color": baseColor}}>ATK</h5>
                                    <span></span>
                                    <p>{cardPokemon.stats[1].base_stat}</p>
                                    <section style={{"background": opacityBaseColor}}>
                                        <div style={{"width": `${(cardPokemon.stats[1].base_stat)/2}%`, "backgroundColor": baseColor}}></div>
                                    </section>
                                </div>
                                <div>
                                    <h5 style={{"color": baseColor}}>DEF</h5>
                                    <span></span>
                                    <p>{cardPokemon.stats[2].base_stat}</p>
                                    <section style={{"background": opacityBaseColor}}>
                                        <div style={{"width": `${(cardPokemon.stats[2].base_stat)/2}%`, "backgroundColor": baseColor}}></div>
                                    </section>
                                </div>
                                <div>
                                    <h5 style={{"color": baseColor}}>SATK</h5>
                                    <span></span>
                                    <p>{cardPokemon.stats[3].base_stat}</p>
                                    <section style={{"background": opacityBaseColor}}>
                                        <div style={{"width": `${(cardPokemon.stats[3].base_stat)/2}%`, "backgroundColor": baseColor}}></div>
                                    </section>
                                </div>
                                <div>
                                    <h5 style={{"color": baseColor}}>SDEF</h5>
                                    <span></span>
                                    <p>{cardPokemon.stats[4].base_stat}</p>
                                    <section style={{"background": opacityBaseColor}}>
                                        <div style={{"width": `${(cardPokemon.stats[4].base_stat)/2}%`, "backgroundColor": baseColor}}></div>
                                    </section>
                                </div>
                                <div>
                                    <h5 style={{"color": baseColor}}>SPD</h5>
                                    <span></span>
                                    <p>{cardPokemon.stats[5].base_stat}</p>
                                    <section style={{"background": opacityBaseColor}}>
                                        <div style={{"width": `${(cardPokemon.stats[5].base_stat)/2}%`, "backgroundColor": baseColor}}></div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </StatusContainer>           
                </CardContent>
            </CardContainer>
        </ModalCard>
    )
}