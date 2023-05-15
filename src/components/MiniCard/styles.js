import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 124px;
    height: 124px;

    border-radius: 10px;
    background-color: #fff;
    border: 0.5px solid #EFEFEF;
    box-shadow: inset 0px -45px 3px 0px #EFEFEF;

    padding: 5px 0px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 

    &:hover {
        scale: 1.05;
        background-color: #eee;
        box-shadow: inset 0px -22px 0px 0px #444;
        cursor: pointer;
        font-weight: 600;
        color: #fff;

        img{
            scale: 1.05;
        }
    }

    img {
        width: 82px;
        height: 82px;
        opacity: 0.9;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        &::first-letter {
            text-transform: uppercase;
        }
    }
`


