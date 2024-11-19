import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    width: 550px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    gap: 20px;

    ${media.lessThan("large")`
        width: 100%;
    `}

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    &:active{
        background-color: rgba(255, 255, 255, 0.2);
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    
`

export const Image = styled.div`
    img {
        width: 155px;
        height: 125px;

        ${media.lessThan("large")`
            display: none;
        `}
    }
`
