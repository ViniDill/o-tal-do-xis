import React from "react";
import { Container, Info, Image } from "./styles";

export interface DeliveryCardProps {
  title: string;
  description: string;
  prices: number;
  image: React.ReactNode;
  onClick?: () => void;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  title,
  description,
  prices,
  image,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <Info>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>R$ {prices.toFixed(2)}</p>
      </Info>
      <Image>{image}</Image>
    </Container>
  );
};

export default DeliveryCard;
