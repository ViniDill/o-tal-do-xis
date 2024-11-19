import React from "react";
import { Container, Content, Text, Image } from "./styles";
import NavBar from "../../Components/Navbar";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <Text>
          <h1>SOBRE NÓS</h1>
          <p>
            O Tal do Xis é um restaurante gastronômico de luxo, focado em
            preparar pratos deliciosos, com um atendimento personalizado e um
            ambiente confortável.
          </p>
          <p>
            Nossa história começa em 1994, com o objetivo de oferecer aos
            clientes uma melhor experiência gastronômica, com produtos de alta
            qualidade e um atendimento extremamente completo.
          </p>
          <p>
            Atualmente, estamos presentes em 30 cidades do Brasil, com o
            objetivo de continuar expandindo nosso cardápio e oferecer aos
            nossos clientes uma melhor
          </p>
        </Text>
        <Image>
          <img src="./icons/aboutus.jpg" alt="imagem de lanche" />
        </Image>
      </Content>
    </Container>
  );
};

export default AboutUs;
