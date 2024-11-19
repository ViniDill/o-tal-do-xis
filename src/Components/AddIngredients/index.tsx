import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Container, Text } from "./styles"; // Ajuste o caminho para o arquivo de estilos

interface AddIngredientsProps {
  title: string;
  price: number;
  onChangeQuantity: (quantity: number) => void; // Função para atualizar a quantidade
}

const AddIngredients: React.FC<AddIngredientsProps> = ({
  title,
  price,
  onChangeQuantity,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChangeQuantity(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChangeQuantity(newQuantity);
    }
  };

  return (
    <Container>
      <Text>
        <p>{title}</p>
        <p>+ R$ {price.toFixed(2)}</p>
      </Text>
      <Box display="flex" alignItems="center">
        <Button
          onClick={handleDecrement}
          sx={{ fontSize: "24px", color: "black" }}
        >
          -
        </Button>
        <Box mx={2} sx={{ color: "black" }}>
          {quantity}
        </Box>
        <Button
          onClick={handleIncrement}
          sx={{ fontSize: "24px", color: "black" }}
        >
          +
        </Button>
      </Box>
    </Container>
  );
};

export default AddIngredients;
