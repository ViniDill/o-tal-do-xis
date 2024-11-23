import React from "react";
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import { Card, Icon, Text } from "./styles";

type ContactType = "email" | "phone" | "facebook" | "instagram" | "whatsapp";

interface ContactCardProps {
  type: ContactType;
  value: string;
  label: string;
}

const getIcon = (type: ContactType) => {
  switch (type) {
    case "email":
      return <Email className="Icon" />;
    case "phone":
      return <Phone className="Icon" />;
    case "facebook":
      return <Facebook className="Icon" />;
    case "instagram":
      return <Instagram className="Icon" />;
    case "whatsapp":
      return <WhatsApp className="Icon" />;
    default:
      return null;
  }
};

const getHref = (type: ContactType, value: string) => {
  switch (type) {
    case "email":
      return `mailto:${value}`;
    case "phone":
      return `tel:${value}`;
    case "whatsapp":
      return `https://wa.me/${value}`;
    case "facebook":
    case "instagram":
      return value;
    default:
      return "#";
  }
};

const ContactCard: React.FC<ContactCardProps> = ({ type, value, label }) => {
  const href = getHref(type, value);

  const handleClick = () => {
    if (href !== "#") {
      window.open(href, type === "email" || type === "phone" ? "_self" : "_blank");
    }
  };

  return (
    <Card onClick={handleClick} role="button" tabIndex={0}>
      <Icon>{getIcon(type)}</Icon>
      <Text>{label}</Text>
    </Card>
  );
};

export default ContactCard;
