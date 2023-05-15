import { useEffect, useState } from "react";
import MiniCard from "../../components/MiniCard";
import { PokedexContainer, PokedexMain } from "./styles";
import { AiOutlineSearch } from "react-icons/ai"
import { api } from "../../services/api";
import ReactPaginate from "react-paginate";
import "./styles.css";


export default function Pokedex() {

    const [ actual, setActual] = useState('pokemon?offset=0&limit=649')

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [renderized, setRenderized] = useState(data)

    useEffect(()=> {
        api.get(actual).then((res)=> {
            setData(res.data.results)
            setRenderized(res.data.results)
        })
    }, [])

    const PER_PAGE = 104;
    const offset = currentPage * PER_PAGE;
    const currentPageData = renderized
        .slice(offset, offset + PER_PAGE)
        .map((elem) => <MiniCard name={elem.name} url={elem.url} />);
    const pageCount = Math.ceil(data.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let filter = data.filter((item)=> item.name.includes(event.target.value.toLowerCase()))
            setRenderized(filter)
        }
    };

    return (
        <PokedexContainer>
            <header>
                <img src="/logopokedex.png" alt="Pokedex" />
                <div>
                    <AiOutlineSearch size={20} color="#DC0A2D"/>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Search"
                        onKeyDown={handleKeyDown}
                    />
                    {/* <input type="text" placeholder="Search" onChange={(event)=> setSearch(event.target.value)}/> */}
                </div>
            </header>

            <PokedexMain>
                {currentPageData}
            </PokedexMain>

            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </PokedexContainer>
    )
}