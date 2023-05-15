import styled from 'styled-components';



export const CardContainer = styled.div`
    position: fixed;
    scale: 1.3;
    width: 300px;
    height: 450px;
    border-radius: 15px;
    padding: 5px;

    left: 43%;
    top: 22%;
    
    background-color: #fff;
    
    z-index: 15;
`

export const CardContent = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 5px;
    background:linear-gradient(0deg, ${(props) => props.pokeballBaseColor}, ${(props) => props.pokeballBaseColor}), url(/pokeball.png);
    background-size: 60%; 
    background-position: 90% 5%;
    background-repeat: no-repeat;

    .pokemonName {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 10px;

        

        h2::first-letter {
            text-transform: uppercase;
        }

        svg {
            &:hover {
                cursor: pointer;
            }
        }

        span {
            flex-grow: 5;
            display: flex;
            align-items: center;
            justify-content: end;
        }

    }

    .pokemonImage {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;

        img {
            margin-bottom: -25px;
            width: 130px;
        }
    }
`

export const StatusContainer = styled.div`
    width: 100%;
    height: 275px;
    border-radius: 7px;

    padding: 2px;
    background-color: #fff;

    box-shadow: inset 0 0 5px #000;

    .types {
        display: flex;
        justify-content: center;
        align-items: end;
        width: 100%;
        height: 55px;

        gap: 10px;

        span {
            background-color: #000;
            padding: 3px 8px;
            border-radius: 10px;
        }

        span::first-letter {
            text-transform: uppercase;
        }
    }

    .specification {
        width: 100%;
        height: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .stature {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding: 0px 25px;

        div {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;

            span {
                font-size: 0.78rem;
                letter-spacing: 0;
                font-weight: 500;
                color: #000;
                display: flex;
                align-items: center;
                gap: 3px;
            }

            div {

                p::first-letter{
                    text-transform: uppercase;
                }
            }
        }
    }

    .baseStatus {
        width: 100%;
        height: 150px;
        border-radius: 7px;

        padding: 0px 15px 10px 15px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7px;
        
        h3 {
            font-weight: 600;
            font-size: 0.95rem;
        }

        div {
            width: 100%;

            div {

                width: 100%;
                height: 18px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 7px;

                h5 {
                    text-align: center;
                    width: 45px;
                    font-size: 0.7rem;
                    font-weight: 800;
                }

                span {
                    width: 1px;
                    height: 100%;
                    background-color: #ccc;
                }

                p {
                    text-align: center;
                    width: 30px;
                    font-size: 0.75rem;
                }
                
                section {
                    width: 100%;
                    height: 5px;
                    border-radius: 5px;

                    div {
                        width: 0;
                        height: 5px;
                        border-radius: 3px;
                        -webkit-transition: width 1.3s ease-out;
                        -o-transition: width 1.3s ease-out;
                        transition: width 1.3s ease-out;
                    }
                }
            }
        }
    }

`

export const ModalCard = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;
`