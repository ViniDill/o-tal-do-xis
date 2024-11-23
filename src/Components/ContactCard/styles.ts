import styled from "styled-components";
import Theme from "../../Theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${Theme.colors.Color1};
  margin-bottom: 10px;
  height: 250px;
  justify-content: space-evenly;
  width: 300px;
  transition: background-color 0.3s, transform 0.3s; /* Animações suaves */

  &:hover {
    background-color: ${Theme.colors.Color3}; /* Cor ao passar o mouse */
    transform: translateY(-5px); /* Elevação sutil */
    cursor: pointer; /* Mostra que é clicável */
  }

  &:active {
    background-color: ${Theme.colors.Color5}; /* Cor ao clicar */
    transform: translateY(0); /* Normaliza a elevação ao clicar */
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: #333;

  .Icon {
    width: 50px;
    height: 50px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  color: #333;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
`;