import styled from "styled-components"


export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;

    background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);

    .headerContent {
        width: 100%;
        height: 100px;
        background: #F5DB13;
        box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        header {
            width: 100%;
            max-width: 1800px;
            height: 100px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            img {
                height: 100px;
                text-align: start;
                flex-grow: 2;
                object-fit: scale-down;
            }

        }
    }
`

export const MainHome = styled.main`
    width: 100vw;
    height: calc(100% - 100px);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .mainContent {
        width: 100%;
        max-width: 1400px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        .descriptions {
            width: 40%;
            max-width: 600px;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            gap: 67px;

            h1 {
                font-style: normal;
                font-weight: 500;
                font-size: 70px;
                letter-spacing: 4px;
                margin-top: 80px;
                line-height: 80px;
            }

            p {
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 37px;
            }

            button {
                width: 230px;
                height: 70px;
                font-size: 0.95rem;
                background: #73D677;
                box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
                border-radius: 11px;
                margin-right: 70px;

                &:hover {
                    cursor: pointer;
                    box-shadow: inset 4px 4px 0px rgba(0, 0, 0, 0.18);
                }
            }
        }

        .imagePikachu {            
            width: 70%;
            max-width: 800px;

            img{
                width: 100%;
                object-fit: fill;
            }
        }
    
    }
`


