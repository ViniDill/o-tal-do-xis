import React from "react";
import { Container } from "./styles";
import DeliveryCard from "../../Components/DeliveryCard";

const Tests: React.FC = () => {
  return (
    <Container>
      <p className="neutrals0">Neutrals 0</p>
      <p className="neutrals1">Neutrals 10</p>
      <p className="neutrals2">Neutrals 20</p>
      <p className="neutrals3">Neutrals 30</p>
      <p className="neutrals4">Neutrals 40</p>
      <p className="neutrals5">Neutrals 50</p>
      <p className="neutrals6">Neutrals 60</p>
      <p className="neutrals7">Neutrals 70</p>
      <p className="neutrals8">Neutrals 80</p>
      <p className="neutrals9">Neutrals 90</p>
      <p className="neutrals10">Neutrals 100</p>
      <DeliveryCard
        title="Xis da Casa - Normal"
        description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
        prices={30.0}
        image={<img src="./icons/Cheers.png" alt="xis" />}
      />

      <div className="color1">Core divadrão 1</div>
      <div className="color2">Core divadrão 2</div>
      <div className="color3">Core divadrão 3</div>
      <div className="color4">Core divadrão 4</div>
      <div className="color5">Core divadrão 5</div>
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
