import React from "react";
import NavBar from "../../Components/Navbar";
import { Container, CardContent, Title } from "./styles";

import ContactCard from "../../Components/ContactCard";

const Contacts: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Title>
        <h1>Como você prefere falar com a gente?</h1>
      </Title>
      <CardContent>
        <ContactCard type="phone" value="+5511999999999" label="Telefone" />
        <ContactCard type="email" value="example@example.com" label="Email" />
        <ContactCard
          type="facebook"
          value="https://facebook.com/user"
          label="Facebook"
        />
        <ContactCard
          type="instagram"
          value="https://instagram.com/user"
          label="Instagram"
        />
        <ContactCard type="whatsapp" value="5511999999999" label="WhatsApp" />
      </CardContent>
    </Container>
  );
};

export default Contacts;
