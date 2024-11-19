import React from "react";

import NavBar from "../../Components/Navbar";
import Card from "../../Components/Card";

import { Container, Title, Content } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Title>
        <h1>CARDÁPIO</h1>
        <p>Veja nossos pratos deliciosos</p>
      </Title>
      <Content>
        <Card
          image={<img src="./icons/Cheers.png" alt="xis" />}
          description="lorem ipsum dolor teste das sombras lanche saboroso agua e sal"
          title="BACON"
          types={["Normal", "Mini"]}
          prices={[22.52, 18.27]}
        />

        <Card
          image={<img src="./icons/fundo.jpeg" alt="xis" />}
          description="picles, ovo, queijo, mostarda, crem, vinagre, figado"
          title="FRANGO"
          types={["Normal", "Mini"]}
          prices={[20.52, 16.27]}
        />
        <Card
          image={<img src="./icons/Cheers.png" alt="xis" />}
          description="lorem ipsum dolor teste das sombras lanche saboroso agua e sal"
          title="BACON"
          types={["Normal", "Mini"]}
          prices={[22.52, 18.27]}
        />

        <Card
          image={<img src="./icons/fundo.jpeg" alt="xis" />}
          description="picles, ovo, queijo, mostarda, crem, vinagre, figado"
          title="FRANGO"
          types={["Normal", "Mini"]}
          prices={[20.52, 16.27]}
        />
        <Card
          image={<img src="./icons/Cheers.png" alt="xis" />}
          description="lorem ipsum dolor teste das sombras lanche saboroso agua e sal"
          title="BACON"
          types={["Normal", "Mini"]}
          prices={[22.52, 18.27]}
        />

        <Card
          image={<img src="./icons/fundo.jpeg" alt="xis" />}
          description="picles, ovo, queijo, mostarda, crem, vinagre, figado"
          title="FRANGO"
          types={["Normal", "Mini"]}
          prices={[20.52, 16.27]}
        />
        <Card
          image={<img src="./icons/Cheers.png" alt="xis" />}
          description="lorem ipsum dolor teste das sombras lanche saboroso agua e sal"
          title="BACON"
          types={["Normal", "Mini"]}
          prices={[22.52, 18.27]}
        />

        <Card
          image={<img src="./icons/fundo.jpeg" alt="xis" />}
          description="picles, ovo, queijo, mostarda, crem, vinagre, figado"
          title="FRANGO"
          types={["Normal", "Mini"]}
          prices={[20.52, 16.27]}
        />
        <Card
          image={<img src="./icons/Cheers.png" alt="xis" />}
          description="lorem ipsum dolor teste das sombras lanche saboroso agua e sal"
          title="BACON"
          types={["Normal", "Mini"]}
          prices={[22.52, 18.27]}
        />

        <Card
          image={<img src="./icons/fundo.jpeg" alt="xis" />}
          description="picles, ovo, queijo, mostarda, crem, vinagre, figado"
          title="FRANGO"
          types={["Normal", "Mini"]}
          prices={[20.52, 16.27]}
        />
        <Card
          image={<img src="./icons/Cheers.png" alt="xis" />}
          description="lorem ipsum dolor teste das sombras lanche saboroso agua e sal"
          title="BACON"
          types={["Normal", "Mini"]}
          prices={[22.52, 18.27]}
        />

        <Card
          image={<img src="./icons/fundo.jpeg" alt="xis" />}
          description="picles, ovo, queijo, mostarda, crem, vinagre, figado"
          title="FRANGO"
          types={["Normal", "Mini"]}
          prices={[20.52, 16.27]}
        />
      </Content>
    </Container>
  );
};

export default Menu;
