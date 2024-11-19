import React, { useState } from "react";
import { Container } from "./styles";
import Checkbox from "@mui/material/Checkbox";

export interface RemoveIngredientsProps {
  title: string;
}

const RemoveIngredients: React.FC<RemoveIngredientsProps> = ({ title }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <Container onClick={handleToggle}>
      <p>{title}</p>
      <Checkbox checked={checked} onChange={handleToggle} />
    </Container>
  );
};

export default RemoveIngredients;
