import React from "react";
import { Container } from "./styles";
import NavBar from "../../Components/Navbar";

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <h1>Deixe seu dia mais saboroso!!!</h1>
      <p>O xis mais delicioso da região</p>
    </Container>
  );
};

export default Home;
