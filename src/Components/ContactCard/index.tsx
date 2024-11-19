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

const getLink = (type: ContactType, value: string, label: string) => {
  switch (type) {
    case "email":
      return <a href={`mailto:${value}`}>{label}</a>;
    case "phone":
      return <a href={`tel:${value}`}>{label}</a>;
    case "whatsapp":
      return (
        <a
          href={`https://wa.me/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    case "facebook":
    case "instagram":
      return (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    default:
      return <span>{label}</span>;
  }
};

const ContactCard: React.FC<ContactCardProps> = ({ type, value, label }) => {
  return (
    <Card>
      <Icon>{getIcon(type)}</Icon>
      <Text>{getLink(type, value, label)}</Text>
    </Card>
  );
};

export default ContactCard;
