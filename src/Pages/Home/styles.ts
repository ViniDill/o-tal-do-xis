import styled from "styled-components";
import Theme from "../../Theme";

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

  h1, p {
    z-index: 1;
    position: relative;
  }

  h1 {
    color: ${Theme.colors.Color5};
    font-size: 64px;
    font-weight: bold;
  }

  p {
    color: ${Theme.colors.neutrals40};
    font-size: 36px;
    font-weight: bold;
  }
`;
