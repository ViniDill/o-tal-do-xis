import React from "react";
import { Container } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Login</h1>
      <form className="form">
        <input type="text" placeholder="Email" className="OrdinaryInput" />
        <input
          type="password"
          placeholder="Password"
          className="OrdinaryInput"
        />
        <button type="submit" className="Submit">
          Login
        </button>
      </form>
    </Container>
  );
};

export default Login;
