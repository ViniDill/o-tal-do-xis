import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url('./icons/fundo.jpeg');
  background-size: cover;
  background-position: center;
  text-align: center;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`

export const Content = styled.div`
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px;
  z-index: 1;


  ${media.lessThan("large")`
    flex-direction: column;
    padding: 10px;
  `}

  ${media.lessThan("medium")`
      margin-top: 100px;
  `}

  ${media.lessThan("small")`
      margin-top: 580px;
  `}
`

export const Text = styled.div` 
    width: 50%;
    padding: 100px;


    ${media.lessThan("large")`
        width: 100%;
        padding: 10px;

        margin-bottom: 25px;
    `}

    h1{
        text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
        font-size: 45px;
        margin-bottom: 25px;
    }

    p {
        font-size: 20px;
        text-align: justify;
    }
`

export const Image = styled.div`
    width: 50%;


    img {
        width: 355px;
        height: 520px;
        border: 5px solid #fff;
        margin: auto;

        ${media.lessThan("large")`
          height: auto;
          width: 235px;
          height: 320px;
        `}
    }
`