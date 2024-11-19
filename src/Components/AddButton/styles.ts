import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.button`
    background-color: red;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;


    ${media.lessThan("medium")`
        flex-direction: column;
        max-width: 205px;
    `}

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:active{
        background-color: rgba(255, 255, 255, 0.2);
    }
`