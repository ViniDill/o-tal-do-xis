import React, { useState } from "react";
import { Button, Box } from "@mui/material";

interface IncrementorProps {
  onChange: (quantity: number) => void;
}

const Incrementor: React.FC<IncrementorProps> = ({ onChange }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Button
        onClick={handleDecrement}
        sx={{ fontSize: "24px", color: "black" }}
      >
        -
      </Button>
      <Box mx={2} sx={{ color: "black" }}>
        {count}
      </Box>
      <Button
        onClick={handleIncrement}
        sx={{ fontSize: "24px", color: "black" }}
      >
        +
      </Button>
    </Box>
  );
};

export default Incrementor;
