// AddButton.tsx
import React from "react";
import { Button } from "@mui/material";

interface AddButtonProps {
  onClick: () => void;
  text: string;
  price: number; // Deve ser um número
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, text, price }) => {
  return (
    <Button onClick={onClick} variant="contained">
      {text} - R$ {price.toFixed(2)}
    </Button>
  );
};

export default AddButton;
