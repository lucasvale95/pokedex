import styled from "styled-components"


export const PokedexContainer = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #DC0A2D;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    header {
        width: 90%;
        max-width: 1200px;
        min-width: 375px;

        height: 100px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
            scale: 1.2;
            object-fit: contain;
        }

        div {
            border-radius: 20px;
            background-color: #fff;
            width: 300px;
            height: 35px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;

            input {
                width: 240px;
                border: none;

                &:focus {
                    outline: none;
                }
            }
        }
    }
`

export const PokedexMain = styled.main`
    width: 90%;
    max-width: 1140px;
    min-width: 375px;

    height: calc(100vh - 150px);
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: start;
    overflow: scroll;
    overflow-x: hidden;

    padding: 30px;
    gap: 10px;

    background-color: #fff;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px 0px #444;
`

