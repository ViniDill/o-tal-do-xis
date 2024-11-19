import React from "react";
import { useNavigate } from "react-router-dom"; // para redirecionamento
import { Container, Content } from "./styles";

import NavBar from "../../Components/Navbar";
import DeliveryCard from "../../Components/DeliveryCard";

const CustomerOrder: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (deliveryCardData: any) => {
    navigate("/order-details", { state: deliveryCardData }); // Redireciona e passa o card selecionado
  };

  const deliveryCards = [
    {
      title: "Xis da Casa - Normal",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 30.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Casa - Mini",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 26.0,
      image: "./icons/Cheers.png",
    },

    {
      title: "Xis da Bacon - Normal",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 35.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Bacon - Mini",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 30.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Filé - Normal",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 45.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Filé - Mini",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 40.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Coração - Normal",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 38.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Coração - Mini",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 32.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Brócolos - Normal",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 34.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Brócolos - Mini",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 30.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Galinha - Normal",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 26.0,
      image: "./icons/Cheers.png",
    },
    {
      title: "Xis da Galinha - Mini",
      description:
        "Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese",
      prices: 22.0,
      image: "./icons/Cheers.png",
    },
  ];

  return (
    <Container>
      <NavBar />
      <Content>
        {deliveryCards.map((card, index) => (
          <DeliveryCard
            key={index}
            title={card.title}
            description={card.description}
            prices={card.prices}
            image={<img src={card.image} alt="xis" />}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </Content>
    </Container>
  );
};

export default CustomerOrder;
