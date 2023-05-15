import { useEffect, useState } from "react";
import { CardContainer, ModalCard } from "./styles";
import axios from "axios";
import Card from "../Card";

export default function MiniCard ({name, url}) {

    const [cardPokemon, setCardPokemon] = useState()
    const [image, setImage] = useState([])
    const [dropdown, setDropdown] = useState("none");

    const showDropdown = () => {
      setDropdown("block");
    }
  
    const closeDropdown = event => {
      setDropdown("none");
    };

    useEffect( ()=> {
        async function fetchData() {
            const response = await axios.get(url).then((res)=> {
                setImage(res.data.sprites.other.dream_world.front_default)
                setCardPokemon(res.data)
            })
          }
          fetchData();
    }, [url])

    if(!cardPokemon) return <p>Fetching data...</p>

    return (
        <>
            <CardContainer onClick={showDropdown}>
                <img src={image} alt="Pokemon" />
                <p>{name}</p>
            </CardContainer>
            <Card cardPokemon={cardPokemon} dropdown={dropdown} closeDropdown={closeDropdown}/> 
            
        </>
    )
}