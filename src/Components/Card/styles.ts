import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 400px;
  height: 550px;
  background: linear-gradient(to bottom, orange, yellow);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );

  h2 {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  ${media.lessThan("medium")`
    width: 300px;
  `}
`;

export const ImageContainer = styled.div`
    width: 400px;


    img {
        width: 200px;
        height: 200px;
    }
`

export const DescriptionContainer = styled.div`
    color: black;
    font-weight: bold;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 20px 10px;
    border-radius: 5px;
    height: 160px;
    width: 100%;

    h3 {
        margin-bottom: 15px;
    }
`

export const PriceContainer = styled.div`
    color: black;
    font-weight: bold;
    width: 100%;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;
    border-radius: 5px;
    margin-top: 20px;
`