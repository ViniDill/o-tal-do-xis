import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddIngredients from "../../Components/AddIngredients";
import RemoveIngredients from "../../Components/RemoveIngredients";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavBar from "../../Components/Navbar";
import AddButton from "../../Components/AddButton";
import Incrementor from "../../Components/Incrementor";

import {
  Container,
  RemoveIngredientsContainer,
  AddIngredientsContainer,
  Observation,
  Subtitle,
  Division,
  CardContainer,
  ImageContainer,
  TextContainer,
  BackButton,
  AddContainer,
  IncrementorContainer,
} from "./styles";

interface Ingredient {
  title: string;
  price: number;
  quantity: number;
}

const OrderDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const deliveryCard = location.state;

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { title: "Alface", price: 1.0, quantity: 0 },
    { title: "Cheddar", price: 4.0, quantity: 0 },
    { title: "Catupiry", price: 3.5, quantity: 0 },
    { title: "Bacon", price: 3.0, quantity: 0 },
    { title: "Ovo", price: 1.5, quantity: 0 },
    { title: "Milho", price: 1.0, quantity: 0 },
    { title: "Ervilha", price: 1.0, quantity: 0 },
    { title: "Batata Palha", price: 1.5, quantity: 0 },
    { title: "Mussarela", price: 3.0, quantity: 0 },
    { title: "Tomate", price: 1.5, quantity: 0 },
  ]);
  const [incrementorQuantity, setIncrementorQuantity] = useState(1);

  const totalIngredientsPrice = ingredients.reduce(
    (total, ingredient) => total + ingredient.price * ingredient.quantity,
    0
  );

  const finalPrice = deliveryCard
    ? deliveryCard.prices + totalIngredientsPrice
    : 0;

  const updateIngredientQuantity = (title: string, quantity: number) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.title === title ? { ...ingredient, quantity } : ingredient
      )
    );
  };

  const handleIncrementorChange = (quantity: number) => {
    setIncrementorQuantity(quantity);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <NavBar />
      <BackButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
        <span>Voltar</span>
      </BackButton>

      {deliveryCard && (
        <CardContainer>
          <TextContainer>
            <h1>{deliveryCard.title}</h1>
            <p>{deliveryCard.description}</p>
            <p>R$ {deliveryCard.prices.toFixed(2)}</p>
          </TextContainer>
          <ImageContainer>
            <img src={deliveryCard.image} alt="xis" />
          </ImageContainer>
        </CardContainer>
      )}

      <RemoveIngredientsContainer>
        <Subtitle>Retirar Ingredientes</Subtitle>
        <RemoveIngredients title="Alface" />
        <RemoveIngredients title="Cebola" />
        <RemoveIngredients title="Tomate" />
        <RemoveIngredients title="Batata Palha" />
        <RemoveIngredients title="Presunto" />
        <RemoveIngredients title="Queijo" />
        <RemoveIngredients title="Ovo" />
        <RemoveIngredients title="Maionese" />
      </RemoveIngredientsContainer>

      <AddIngredientsContainer>
        <Subtitle>Adicionar Ingredientes</Subtitle>
        {ingredients.map((ingredient) => (
          <AddIngredients
            key={ingredient.title}
            title={ingredient.title}
            price={ingredient.price}
            onChangeQuantity={(quantity) =>
              updateIngredientQuantity(ingredient.title, quantity)
            }
          />
        ))}
      </AddIngredientsContainer>

      <Observation>
        <h2>
          <TextsmsIcon /> Alguma observação?
        </h2>
        <textarea placeholder="Observação"></textarea>
        <Division />
      </Observation>

      <AddContainer>
        <IncrementorContainer>
          <Incrementor onChange={handleIncrementorChange} />
        </IncrementorContainer>
        <AddButton
          onClick={() => navigate(-1)}
          text="Adicionar ao Carrinho"
          price={finalPrice * incrementorQuantity}
        />
      </AddContainer>
    </Container>
  );
};

export default OrderDetails;
