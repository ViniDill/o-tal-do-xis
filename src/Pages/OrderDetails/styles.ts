import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    width: 100vw;
    padding: 20px 20%;
    background-color: white;
    overflow-x: hidden;
    max-width: 100%;

    ${media.lessThan("medium")`
        padding: 3px;
    `}
`

export const RemoveIngredientsContainer = styled.div``

export const AddIngredientsContainer = styled.div``

export const Observation = styled.div`

        display: flex;
        flex-direction: column;
        text-align: left;

        h2 {
            margin: 30px 0 15px;
            color: black;
        }


    textarea {
        cursor: text;
        outline: none;
        border: 0;
        appearance: none;
        padding: 20px 10px;
        background-color: transparent;
        resize: none;
        word-break: break-word;
        width: 100%;
        color: black;
    }
`

export const Subtitle = styled.h2`
    background-color: grey;
    text-align: left;
    padding-left: 10px;

    ${media.lessThan("medium")`
        max-width: 100%;
    `}
`

export const Division = styled.div`
    width: 100%;
    border-bottom: 1px solid green;
    background-color: green;
`

export const CardContainer = styled.div`
    color: black;
    display: flex;
    gap: 30px;
`
export const ImageContainer = styled.div`
    img{
        width: 100px;

        ${media.lessThan("medium")`
            display: none;
        `}
    }
`

export const TextContainer = styled.div`
    text-align: left;

    h1 {
        font-size: 30px;
    }
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 0;
  margin: 80px 0 25px;

  span {
    margin-left: 5px;
  }

  &:hover {
    color: #007bff;
  }
`;


export const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IncrementorContainer = styled.div`
    min-width: 150px;
    display: flex;
    justify-content: center;
`