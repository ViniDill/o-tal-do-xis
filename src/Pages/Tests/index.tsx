import React from "react";
import { Container } from "./styles";
import DeliveryCard from "../../Components/DeliveryCard";

const Tests: React.FC = () => {
  return (
    <Container>
      <DeliveryCard
        title="Xis da Casa - Normal"
        description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
        prices={30.0}
        image={<img src="./icons/Cheers.png" alt="xis" />}
      />
      <DeliveryCard
        title="Xis da Casa - Mini"
        description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
        prices={26.0}
        image={<img src="./icons/Cheers.png" alt="xis" />}
      />
    </Container>
  );
};

export default Tests;
