import React from "react";
import {
  Container,
  ImageContainer,
  DescriptionContainer,
  PriceContainer,
} from "./styles";

export interface CardProps {
  title: string;
  description: string;
  types: string[];
  prices: number[];
  image: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  types,
  prices,
  image,
}) => {
  return (
    <Container>
      <ImageContainer>{image}</ImageContainer>
      <strong>
        <h2>{title}</h2>
      </strong>
      <DescriptionContainer>
        <h3>Ingredientes</h3>
        <p>{description}</p>
      </DescriptionContainer>
      <PriceContainer>
        {types.map((type, index) => (
          <div key={index}>
            <p>{type}</p>
            <p>R$ {prices[index].toFixed(2)}</p>
          </div>
        ))}
      </PriceContainer>
    </Container>
  );
};

export default Card;
